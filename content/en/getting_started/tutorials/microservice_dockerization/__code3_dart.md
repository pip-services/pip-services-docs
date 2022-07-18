
```dockerfile
# Start with the Dart image
FROM google/dart:2.7.2

# Set a working directory
WORKDIR /app

# Copy the entire project
COPY . .

# Install all dependencies
RUN pub get
RUN pub get --offline

# Set the required environment variables
ENV HTTP_PORT=8080
ENV MONGO_SERVICE_HOST=
ENV MONGO_SERVICE_PORT=27017

# Expose the HTTP port
EXPOSE "8080:8080"

# Specify the command for running the service
CMD []
ENTRYPOINT ["/usr/bin/dart", "./bin/run.dart"]

```
