# [Choice] Debian OS version: bullseye, buster
FROM mcr.microsoft.com/devcontainers/base:1-bookworm

USER vscode
ENV DENO_INSTALL=/home/vscode/deno
RUN mkdir -p ${DENO_INSTALL}
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends <your-package-list-here>
