---
type: docs
no_list: true
title: "Step 5. Run"
linkTitle: "Step 5. Run"
---

While developing and debugging a project, you may find the need to run and connect to a microservice, for example, using a client. Readily available Docker images, like the ones we made in the previous steps, are quite handy in such situations.

To run our service, we’ll be using the scenario we wrote in the third step of this tutorial in the **docker-compose.yml** file:

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

To automated the running process, we can create a file named **run.ps1** with the following script:

```ps1
#!/usr/bin/env pwsh

Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

$component = Get-Content -Path "component.json" | ConvertFrom-Json
$image="$($component.registry)/$($component.name):$($component.version)-$($component.build)-rc"

# Set environment variables
$env:IMAGE = $image

docker-compose -f ./docker/docker-compose.yml up
docker-compose -f ./docker/docker-compose.yml down
```

To run the script, enter the following command:

```bash
./run.ps1
```

While running, the script will generate a name for the image using the data in the component.json file and then run it in Docker Compose. In accordance with the scenario, Docker Compose will run two containers: one with the service, and another with a DB. The service will be made available on port 8080.

When the service is stopped, both containers will automatically be stopped as well.

Congratulations! You now know how to Dockerize your microservices! We hope this knowledge helps you avoid environment related errors and keep your development process automated and standardized.