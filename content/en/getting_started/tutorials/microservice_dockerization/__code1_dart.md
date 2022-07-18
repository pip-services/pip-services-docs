
```dockerfile
FROM google/dart

# set working directory
WORKDIR /app

# copy all project
COPY pubspec.* .

# Install all dependencies
RUN pub get
RUN pub get --offline

# copy all project
COPY . .

```
