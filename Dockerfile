# --- Stage 1: Build ---
# Use the official Bun image
FROM oven/bun:1.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb
# This leverages Docker's layer caching
COPY package.json .
COPY bun.lockb .

# Install dependencies with Bun
RUN bun install --frozen-lockfile

# Copy the rest of your project source code
COPY . .

# Run the build script (assumes "build" in package.json)
# This will use the "dist" folder as seen in your screenshot
RUN bun run build

# --- Stage 2: Serve ---
# Use a lightweight Nginx image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx welcome page
RUN rm -rf ./*

# Copy the built static files from the 'build' stage
# The 'dist' folder is correct based on your screenshot
COPY --from=build /app/dist .

# Copy your custom Nginx configuration
# This is crucial for single-page applications (SPA) to handle routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]