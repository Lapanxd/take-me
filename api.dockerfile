FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable 
# && apt update && apt install procps
WORKDIR /app

COPY . .

WORKDIR /app/apps/api

RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "start"]