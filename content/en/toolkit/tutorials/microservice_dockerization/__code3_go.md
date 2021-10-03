
```dockerfile
#FROM docker.pkg.github.com/nov-pocs/max-devops/go-runtime:latest
FROM scratch

# Set a working directory
WORKDIR /app

# Copy the entire project
COPY ./dist ./bin
COPY ./config ./config

# Set environment variables
ENV HTTP_PORT=8080
ENV GRPC_SERVICE_PORT=8090
ENV POSTGRES_SERVICE_HOST=
ENV POSTGRES_SERVICE_PORT=27017
ENV POSTGRES_USER=
ENV POSTGRES_PASS=
ENV POSTGRES_DB=app

# Expose the port
EXPOSE "8080:8080"
EXPOSE "8090:8090"

# Specify the command to run
CMD ["./bin/main"]


```

