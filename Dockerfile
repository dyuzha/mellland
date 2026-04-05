# == BASE: Общая среда
FROM node:22-alpine AS base
WORKDIR /app

# == Deps: Только установка пакетов
FROM base AS deps
COPY package*.json ./
RUN npm ci

# Ci для более быстрой и точной установки в отличии от install
# - не меняет package-lock.json
# - быстрее


# == BUILDER: Сборка приложения
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Формируем финальный ./.output


# == PRODUCTION: Финальный образ
FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.output ./.output
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/content ./content

# Настройка окружения
ENV NODE_ENV=production
ENV PORT=3000

# Скорей всего не нужно
# RUN npm install --omit=dev

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
