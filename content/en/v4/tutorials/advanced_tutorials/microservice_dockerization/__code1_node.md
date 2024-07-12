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
This file, along with the others we will be creating, should be placed in the docker folder at the root of the project.

Let's have a look at what this Docker script will be doing. The standard typescript image is going to be used as the base image, and Python is going to be installed on top of it. Next, /app is set as the working directory and our project's requirements.txt file is copied there. This file contains a list of dependencies that are required to build the project, which are installed using the **RUN npm install** command. The last steps of the script simply copies the rest of the project to the image.
