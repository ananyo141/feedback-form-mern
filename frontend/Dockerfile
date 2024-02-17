# Use the official Node.js image as the base image
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the Vite React app
RUN yarn build

# Use a lightweight image for serving static files
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default NGINX port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
