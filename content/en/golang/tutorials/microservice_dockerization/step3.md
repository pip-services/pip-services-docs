---
type: docs
no_list: true
title: "Step 3. Packaging a microservice into a container"
linkTitle: "Step 3. Package"
---

Once a microservice has successfully passed the previous “build” and “test” stages, it is ready to be published and tested as a part of the system. But before we can do this, we need to correctly package it into a Docker container.

When creating containers, we follow the “Build once - run everywhere” principle. What this means is that the container is created just once. After being created, this container goes through the stages of system testing in various environments and eventually gets deployed into production - all without any modifications.

Furthermore, a flexibly configurable container can easily be included in various systems, even those that use a wide array of system services, databases, and communication protocols. This is achieved by building and configuring microservices out of loosely coupled components using the container’s configuration. Environment variables are often used for configuration and have great support in Docker. To do this, developers need to envisage all possible configuration combinations, include the required components into the container, open up ports, and then perform configuration via environment variables.

We’ll be creating a separate container for packaging our microservice and defining its build instructions in a file named **Dockerfile**:

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

Once again, this script is pretty similar to the ones we’ve already written. What’s new in this script is the indication of which file needs to be used to start the application, as well as what port we need to expose to make the service available from outside the container (EXPOSE "8080:8080").

We checked that our microservice is functional in the previous “testing” step, but this doesn’t guarantee that the container that the microservice is running in will work as needed. To check this, we can create a special Docker Compose environment. Place the following code into a file named **docker-compose.yml**:

```yml
version: '3.3'

services:
  app:
    image: ${IMAGE}
    ports:
      - "8080:8080"
      depends_on:
      - mongo
    environment:
      - HTTP_PORT=8080
      - MONGO_ENABLED=true
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017

  mongo:
    image: mongo:latest

```

To automate this process, create a **package.ps1** script with the following content:

```ps1
#!/usr/bin/env pwsh

Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

# Generate image names using the data in the "component.json" file
$component = Get-Content -Path "component.json" | ConvertFrom-Json
$rcImage="$($component.registry)/$($component.name):$($component.version)-$($component.build)-rc"
$latestImage="$($component.registry)/$($component.name):latest"

# Build docker image
docker build -f docker/Dockerfile -t $rcImage -t $latestImage .

# Set environment variables
$env:IMAGE = $rcImage

# Set docker machine ip (on windows not localhost)
if ($env:DOCKER_IP -ne $nil) {
    $dockerMachineIp = $env:DOCKER_IP
} else {
    $dockerMachineIp = "localhost"
}

try {
    # Workaround to remove dangling images
    docker-compose -f ./docker/docker-compose.yml down

    docker-compose -f ./docker/docker-compose.yml up -d

    # Give the service time to start and then check that it's responding to requests
    Start-Sleep -Seconds 20
    Invoke-WebRequest -Uri "http://$($dockerMachineIp):8080/heartbeat"
    Invoke-WebRequest -Uri "http://$($dockerMachineIp):8080/$($component.test_route)" -Method Post

    Write-Host "The container was successfully built."
} finally {
    docker-compose -f ./docker/docker-compose.yml down
}


```

This script performs an automatic build of the Docker image and then runs and checks it from within the Docker Compose environment. The Docker Compose environment allows us to run our microservice alongside its dependencies, while keeping them all in separate containers. The script then runs the microservice and, if all is well, the service can be checked by requesting the http://localhost:8080/heartbeat URL from a browser. This URL returns and displays the current time in the JSON format, which indicates that the application is up and running in the container. All build results will be outputted to the console. Once the container tests are done, the containers are stopped.

This finishes the process of preparing a microservice container for publishing. When you’re ready, continue on to [Step 4 ](../step4) to publish the image to a Docker registry.

<span class="hide-title-link">

### [Step 4. Publishing a microservice container to a registry.](../step4)

</span>
