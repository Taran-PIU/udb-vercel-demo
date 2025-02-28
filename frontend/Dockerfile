# # Node.js as the Base
# # FROM alpine
# # RUN apk add --no-cache nodejs npm
# FROM node:20 AS builder

# # Set the working directory
# WORKDIR /frontend

# #Copy package.json and install dependencies
# COPY package.json ./

# RUN npm install --legacy-peer-deps --force

# #Copy the rest
# COPY . .

# RUN npm run build

# FROM node:20
# WORKDIR /frontend

# COPY package.json ./
 
# RUN npm install -g serve

# COPY --from=builder /frontend/build /frontend/build

# #Expose the frontend port
# EXPOSE 3000

# # EXPOSE 3001

# #Run the backend server
# # CMD [ "nginx", "-g","daemon off;" ]

#  CMD [ "serve","-s","/frontend/build", "-p","3000" ]


# Use Node.js as the base image
FROM node:20 AS builder

# Set the working directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps --force

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Create the final image
FROM node:20

# Set the working directory
WORKDIR /frontend

# Copy only the necessary files
COPY package.json package-lock.json ./

# Install serve globally
RUN npm install -g serve

# Copy build output from the builder stage
COPY --from=builder /frontend/build /frontend/build

# Expose the frontend port
EXPOSE 3000

# Run the frontend server
CMD ["serve", "-s", "/frontend/build", "-p", "3000"]