# == BASE: Общая среда
FROM node:22-bookworm-slim AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.29.2 --activate

# == Deps: Только установка пакетов
FROM base AS deps
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# == BUILDER: Сборка приложения
FROM base AS builder
ENV NODE_OPTIONS="--max-old-space-size=4096"
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# == PRODUCTION: Финальный образ
FROM node:22-bookworm-slim AS runner
WORKDIR /app
COPY --from=builder /app/.output ./.output

# Настройка окружения
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
