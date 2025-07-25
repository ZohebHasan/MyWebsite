# Use Node.js image
FROM node:20

# Create app directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy compiled code
COPY dist ./dist

# Expose the port
EXPOSE 3000

# Start the server
CMD [ "node", "dist/index.js" ]