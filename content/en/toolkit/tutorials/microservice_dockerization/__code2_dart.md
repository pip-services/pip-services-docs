
```dockerfile
FROM google/dart

# set working directory
WORKDIR /app

# copy all project
COPY . .

# Install all dependencies
RUN pub get
RUN pub get --offline

# Specify the command from running tests
CMD pub run test

```

