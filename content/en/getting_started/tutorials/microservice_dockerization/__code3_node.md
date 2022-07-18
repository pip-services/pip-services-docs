
```dockerfile
FROM node:8

# set working directory
WORKDIR /app

# Copy project file
COPY package*.json ./

# install ALL node_modules, including 'devDependencies'
RUN npm install

# copy all project
COPY . . 

ENV HTTP_PORT=8080
ENV MONGO_SERVICE_HOST=
ENV MONGO_SERVICE_PORT=27017
EXPOSE "8080:8080"

CMD [ "node", "bin/run.js" ]

```
