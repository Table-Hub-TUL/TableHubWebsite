# --- Stage 1: Build ---
# Use a newer stable Bun 1.x image
FROM oven/bun:1 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json .
COPY bun.lockb .

# Install dependencies with Bun
RUN bun install --frozen-lockfile

# Copy the rest of your project source code
COPY . .

# Run the build script
RUN bun run build

# --- Stage 2: Serve ---
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]