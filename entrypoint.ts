const command = new Deno.Command("deno", {
  args: ["task", "serve"],
});
await command.spawn().status;
