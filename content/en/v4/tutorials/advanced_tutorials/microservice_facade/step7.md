---
type: docs
no_list: true
title: "Step 8. Running the facade"
linkTitle: "Step 8. Running the facade" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Before we can run our facade, we need to add three more things: a factory for the component's we've created, a container, and the code that will run it all. The process of implementing these pieces is the same as the one described in [Data Microservice](../../data_microservice), so this time around we'll just list the code:


Create three factories in the **pip_facades_sample_python/build/** folder:

One factory for the facade in a file named **FacadeFactory.py**, containing the following code:

{{< tabsection >}}
  {{< include "../__code15_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code15_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And last but not least, a factory for the clients that the facade depends on in a file named  **ClientFacadeFactory.py**:

{{< tabsection >}}
  {{< include "../__code16_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code16_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

The container that we want to run our facade in should be implemented in a file named **FacadeProcess.py** and placed in the **/container** folder:

{{< tabsection >}}
  {{< include "../__code17_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code17_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

For us to be able to run the container, create a run.js file in the **/bin** folder with the following code:

{{< tabsection >}}
  {{< include "../__code18_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code18_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code18_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Our facade will need to be configured before running, so create a **config-distributed.yml** file in the **/config** folder of the project with the following:

**/config/config.yml**

```yml
---
# Container info
- descriptor: "pip-services:container-info:default:default:*"
  name: "pip-facades-example"
  description: "Example Pip.Services facade on Dart"

# Console logger
- descriptor: "pip-services:logger:console:default:*"
  level: trace

# Log counters
- descriptor: "pip-services:counters:log:default:*"

# Mongodb connection
- descriptor: "pip-services:connection:mongodb:default:*"
  connection:
    uri: {{{MONGO_SERVICE_URI}}}
    host: {{{MONGO_SERVICE_HOST}}}{{#unless MONGO_SERVICE_HOST}}localhost{{/unless}}
    port: {{MONGO_SERVICE_PORT}}{{#unless MONGO_SERVICE_PORT}}27017{{/unless}}
    database: {{MONGO_DB}}{{#unless MONGO_DB}}app{{/unless}}
  credential:
    username: {{MONGO_USER}}
    password: {{MONGO_PASS}}


# Accounts components
# - descriptor: "pip-services-accounts:persistence:mongodb:default:*"
# - descriptor: "pip-services-accounts:controller:default:default:*"
# - descriptor: "pip-services-accounts:client:null:default:1.0"
- descriptor: "pip-services-accounts:client:memory:default:1.0"

# Roles components
# - descriptor: "pip-services-roles:persistence:mongodb:default:*"
# - descriptor: "pip-services-roles:controller:default:default:*"
# - descriptor: "pip-services-roles:client:memory:default:*"
- descriptor: "pip-services-roles:client:null:default:*"

# Passwords components
# - descriptor: "pip-services-passwords:persistence:mongodb:default:*"
# - descriptor: "pip-services-passwords:controller:default:default:*"
# - descriptor: "pip-services-passwords:client:memory:default:*"
- descriptor: "pip-services-passwords:client:null:default:*"

# Session components
# - descriptor: "pip-services-sessions:persistence:mongodb:default:*"
# - descriptor: "pip-services-sessions:controller:default:default:*"
# - descriptor: "pip-services-sessions:client:null:default:*"
- descriptor: "pip-services-sessions:client:memory:default:*"

# Beacons components
- descriptor: "beacons:persistence:mongodb:default:*"
- descriptor: "beacons:controller:default:default:*"
- descriptor: "beacons:client:direct:default:*"

# Main facade service
- descriptor: "pip-services:endpoint:http:default:*"
  root_path: ""
  connection:
    protocol: "http"
    host: "0.0.0.0"
    port: 8080

# Facade API V1
- descriptor: "pip-facades-example:service:http:default:1.0"

# Hearbeat service
- descriptor: "pip-services:heartbeat-service:http:default:1.0"

# Status service
- descriptor: "pip-services:status-service:http:default:1.0"
```

For demonstration purposes, we'll be running our system in a distributed mode, with all of its components running in their own, individual containers. The configuration above is designed specifically for this type of distributed deployment.

The process of running a controller in a Docker container is described in detail in the [Microservice Dockerization](../../microservice_dockerization) tutorial.

To run our system using Docker Compose, create a docker-compose.yml file with the following:

**/docker/docker-compose.yml**

```yml
version: '3.3'

services:

  app:
    image: ${IMAGE}
    environment:
      - MAGIC_CODE=magic
      - MONGO_SERVICE_URI=
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=app   
    ports:
      - "8080:8080"
    links:
      - mongo
      - accounts
      - role
      - passwords
      - sessions
      - beacons     
      
    command: node /app/bin/run.js -c /app/config/config-distributed.yml

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"

  accounts:
    image: pipdevs/pip-services-accounts-node:latest
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=accounts
    links:
      - mongo   
    ports:
      - "8082:8080"
  
  role:
    image: pipdevs/pip-services-roles-node:latest
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=roles
    links:
        - mongo
    ports:
      - "8083:8080"

  passwords: 
    image: pipdevs/pip-services-passwords-node:1.0.1-12-rc
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=passwd
    links:
        - mongo
    ports:
      - "8084:8080"

  sessions:
    image: pipdevs/pip-services-sessions-node:1.0.1-19-rc
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=sessions
    links:
        - mongo
    ports:
      - "8085:8080"

  beacons:
    image: pipdevs/pip-services-beacons-node:1.0
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=beacons
    links:
        - mongo
    ports:
      - "8086:8080"
  
```

Build and run the facade using the respective scripts (described in the [Microservice Dockerization](../../microservice_dockerization) we mentioned above) tutorial, which can be found in this example project's [repository (facade-sample-*)](https://github.com/pip-services-samples).

To build the facade's image and load the rest of the controllers' images, run the "package" script using the command below:

```
.\package.ps1
```

Once the build process successfully finishes, run the entire system with all of its microservices in Docker Compose using the "run" script. This can be done with the following command:

```
.\run.ps1
```

When running the facade, you should see something like this in the console:

```

app_1    | [pip-facades-example:DEBUG:2021-06-17T22:03:56.128800] Opened REST service at http://0.0.0.0:8080
app_1    | [pip-facades-example:INFO:2021-06-17T22:03:56.180451] Container pip-facades-example started.
app_1    | [pip-facades-example:INFO:2021-06-17T22:03:56.180451] Press Control-C to stop the microservice...
```
Now we're ready to move on to manually testing our facade. In [Step 9 - Manually testing the facade](../step8) - we'll show you how this can be done.


<span class="hide-title-link">

### [Step 9 - Manually testing the facade](../step8)

</span>
