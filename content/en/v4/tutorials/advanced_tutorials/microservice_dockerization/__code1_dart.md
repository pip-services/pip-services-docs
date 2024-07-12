To perform the build process for a Dart project, we'll be creating a Docker container build scenario in a file named **Dockerfile.build**. Copy the following into this file:         

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
