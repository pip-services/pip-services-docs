
```dockerfile
FROM node:8

# set working directory
WORKDIR /app

# Copy project file
COPY package*.json ./

# install ALL node_modules, including 'devDependencies'
RUN npm install

# copy all projectCOPY . . 

CMD [ "npm", "test" ]

```
