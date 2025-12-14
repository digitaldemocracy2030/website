import type { Data, Entry, EntrySource, Storage } from "lume/cms/types.ts";

/**
 * JointStorage combines multiple Storage instances and routes operations
 * to the appropriate storage based on a decision function.
 */
export class JointStorage implements Storage {
  private storages: { draft: Storage; public: Storage };

  constructor(storages: { draft: Storage; public: Storage }) {
    this.storages = storages;
  }

  private getStorageAndName(
    name: string,
  ): { storage: Storage; name: string; type: "draft" | "public" } {
    if (name.startsWith("public:")) {
      return {
        storage: this.storages.public,
        name: name.slice(7),
        type: "public",
      };
    }
    if (name.startsWith("draft:")) {
      return {
        storage: this.storages.draft,
        name: name.slice(6),
        type: "draft",
      };
    }
    return { storage: this.storages.draft, name, type: "draft" };
  }

  /**
   * Normalize a name using the appropriate storage
   */
  name(name: string): string {
    const { storage, name: innerName, type } = this.getStorageAndName(name);
    return `${type}:${storage.name(innerName)}`;
  }

  /**
   * Get an Entry from the appropriate storage based on the prefix
   */
  get(name: string): Entry {
    const { storage, name: innerName, type: currentType } = this
      .getStorageAndName(name);
    const entry = storage.get(innerName);
    const storages = this.storages;
    const writeDataOrg = entry.writeData.bind(entry);
    entry.writeData = async function (data: Data) {
      const targetType = data.draft ? "draft" : "public";

      if (targetType === currentType) {
        await writeDataOrg(data);
      } else {
        const currentStorage = storages[currentType];
        const targetStorage = storages[targetType];
        const targetEntry = targetStorage.get(innerName);
        await targetEntry.writeData(data);
        await currentStorage.delete(innerName);
      }
    };
    return entry;
  }

  /**
   * Get the EntrySource metadata from the appropriate storage
   */
  source(name: string): EntrySource {
    const { storage, name: innerName, type } = this.getStorageAndName(name);
    const src = storage.source(innerName);
    return {
      ...src,
      name: `${type}:${src.name}`,
    };
  }

  /**
   * Create a new JointStorage for a subdirectory
   */
  directory(name: string): Storage {
    const { name: innerName } = this.getStorageAndName(name);
    return new JointStorage({
      draft: this.storages.draft.directory(innerName),
      public: this.storages.public.directory(innerName),
    });
  }

  /**
   * Delete an entry from the appropriate storage
   */
  delete(name: string): Promise<void> {
    const { storage, name: innerName } = this.getStorageAndName(name);
    return storage.delete(innerName);
  }

  /**
   * Rename an entry in the appropriate storage
   */
  async rename(name: string, newName: string): Promise<void> {
    const src = this.getStorageAndName(name);
    const dest = this.getStorageAndName(newName);

    if (src.type === dest.type) {
      return src.storage.rename(src.name, dest.name);
    }

    const sourceEntry = src.storage.get(src.name);
    const data = await sourceEntry.readData();
    const destEntry = dest.storage.get(dest.name);
    await destEntry.writeData(data);
    await src.storage.delete(src.name);
  }

  /**
   * Async iterator that yields entries from all storages
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<EntrySource> {
    for (const [type, storage] of Object.entries(this.storages)) {
      for await (const entry of storage) {
        yield {
          ...entry,
          name: `${type}:${entry.name}`,
        };
      }
    }
  }
}

export default JointStorage;
