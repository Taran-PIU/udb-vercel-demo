# Node.js as the Base
FROM node:20 AS builder

# Set the working directory
WORKDIR /backend

#Copy package.json and install dependencies
COPY package.json ./

RUN npm install

#Copy the rest
COPY . .

#Expose the backend port
EXPOSE 5000
EXPOSE 27017

#Run the backend server
CMD [ "node", "server.js" ]

#Fake Push

