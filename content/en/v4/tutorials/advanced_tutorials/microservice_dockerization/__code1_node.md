To perform the build process for a Node.js project, we'll be creating a Docker container build scenario in a file named **Dockerfile.build**. Copy the following into this file:      
```dockerfile
FROM node:8
‍
# Install development tools
RUN npm install typescript -g
‍
# set working directory
WORKDIR /app
‍
# Copy project file
COPY package*.json ./
‍
# install ALL node_modules, including 'devDependencies'
RUN npm install

# copy all project
COPY . .
# compile source code
RUN tsc

```
