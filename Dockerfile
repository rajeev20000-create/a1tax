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
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
