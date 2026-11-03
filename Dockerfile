# ---------- build ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install deps from the lockfile (reproducible, no network drift)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Build. FIGMA_PUBLIC_URL must stay UNSET here, otherwise Vite
# rewrites `base` and every /assets/* URL breaks.
COPY . .
RUN npm run build

# ---------- serve ----------
# Node now serves the static site AND handles POST /api/contact,
# so the SMTP password never reaches the browser.
# Dokploy's "Docker Build Stage" field must be empty or "production".
FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

# Runtime deps only — no Vite, no TypeScript, no React toolchain.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund && npm cache clean --force

COPY --from=build /app/dist ./dist
COPY server ./server

# Drop root; the node image ships an unprivileged `node` user.
USER node

EXPOSE 3000
CMD ["node", "server/index.js"]
