---
type: docs
no_list: true
title: "Step 6. Testing the Client with a Remote Microservice"
linkTitle: "Step 6. Testing the Client" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

In the previous steps, we were looking at the development of clients and at the clients themselves. However, both the client and the microservice were implemented in the same language, which allowed us to run components of the microservice from right inside the tests. In a multi-language environment, there are times when you need to create clients in a language that is different from the one that was used to write the microservice. In this last step, we will be demonstrating a similar situation, showing how to use Docker to link and run microservices and other infrastructure services, and describing how to integrate this into the development process.
This step will be using the **BeaconsCommandableHttpClientV1** class that we created in step 3, along with a new set of tests that still uses the Beacons microservice, but this time - one that is running in a separate Docker container. In other words, the Beacon microservice that is on DockerHub is written in Node.js, which may or may not be the language that you have been using throughout this tutorial. 
To run the microservice in Docker, we'll first need to create a configuration file called  **docker/docker-compose.dev.yml**:

```yml
version: '3.3'
services:
  app:    
    image: "pipdevs/data-microservice-node:1.0"    
    ports:      
      - "8080:8080"  
    depends_on:      
      - mongo     
    environment:      
      - HTTP_ENABLED=true      
      - HTTP_PORT=8080      
      - MONGO_ENABLED=true      
      - MONGO_SERVICE_HOST=mongo      
      - MONGO_SERVICE_PORT=27017
  mongo:    
    image: mongo:latest      
    ports:        
      - "27017:27017"

```

This configuration will run the microservice alongside a Mongo DB for data storage. HTTP services will also be started on port 8080 and will be made accessible from outside the container. You can set up the microservice to run with a memory persistence as well. To do this, comment out the MONGO environment variables, as well as any other Mongo-related parameters.
The image parameter contains the name of the Docker image being hosted on DockerHub (pipdevs/data-microservice-node:1.0), which is the microservice we want to be testing with. Once we get our microservice up and running, it will be available at http://localhost:8080, and the client will be able to work with it using this address. Let's design a test, in which the client will work with our new service. We'll be basing this test off of the one we wrote in Step 3. Place the code below into a file named **test_BeaconsHttpClientV1.py**.

{{< tabsection >}}
  {{< include "../__code8_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code8_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code8_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code8_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

This test differs from the previous one mainly in that we aren't running the microservice's components in the test itself. Instead, we are configuring our client to connect to the microservice, which will be running in our Docker container. Another difference is that we will be deleting all data from the microservice before each test, so that our test always starts off with a clean DB.
Before we can start testing, we need to get our containerized microservice up and running. To do this, run the command:

```bash
docker-compose -f ./docker/docker-compose.dev.yml up 

```

In a separate console, run the test using the following command:

{{< tabsection >}}
  {{< include "../__code9_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code9_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code9_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code9_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

The tests should all pass, and the container's console should display information about what it was doing in the process:

```bash
[beacons:INFO:2020-06-24T15:27:42.747Z] Press Control-C to stop the microservice...
[beacons:DEBUG:2020-06-24T15:27:42.982Z] Opened REST service at http://0.0.0.0:8080
[beacons:INFO:2020-06-24T15:27:42.983Z] Container beacons started.
[123:TRACE:2020-06-24T15:31:19.003Z] Executing v1/beacons.create_beacon method
[123:TRACE:2020-06-24T15:31:19.007Z] Created item 1
[123:TRACE:2020-06-24T15:31:19.093Z] Executing v1/beacons.create_beacon method
[123:TRACE:2020-06-24T15:31:19.093Z] Created item 2
[123:TRACE:2020-06-24T15:31:19.108Z] Executing v1/beacons.get_beacons method
[123:TRACE:2020-06-24T15:31:19.111Z] Retrieved 2 items
[123:TRACE:2020-06-24T15:31:19.165Z] Executing v1/beacons.update_beacon method
[123:TRACE:2020-06-24T15:31:19.167Z] Updated item 1
[123:TRACE:2020-06-24T15:31:19.218Z] Executing v1/beacons.get_beacon_by_udi method
[123:TRACE:2020-06-24T15:31:19.220Z] Found beacon by 00001
[123:TRACE:2020-06-24T15:31:19.270Z] Executing v1/beacons.delete_beacon_by_id method
[123:TRACE:2020-06-24T15:31:19.271Z] Deleted item by 1
[123:TRACE:2020-06-24T15:31:19.322Z] Executing v1/beacons.get_beacon_by_id method
[123:TRACE:2020-06-24T15:31:19.322Z] Cannot find item by 1
[123:TRACE:2020-06-24T15:31:19.332Z] Executing v1/beacons.delete_beacon_by_id method
[123:TRACE:2020-06-24T15:31:19.333Z] Deleted item by 2
[123:TRACE:2020-06-24T15:31:21.435Z] Executing v1/beacons.create_beacon method
[123:TRACE:2020-06-24T15:31:21.435Z] Created item 1
[123:TRACE:2020-06-24T15:31:21.448Z] Executing v1/beacons.create_beacon method
[123:TRACE:2020-06-24T15:31:21.449Z] Created item 2
[123:TRACE:2020-06-24T15:31:21.505Z] Executing v1/beacons.calculate_position method
[123:TRACE:2020-06-24T15:31:21.509Z] Retrieved 1 items
[123:TRACE:2020-06-24T15:31:21.562Z] Executing v1/beacons.calculate_position method
[123:TRACE:2020-06-24T15:31:21.563Z] Retrieved 2 items
```
Using this approach, any combination of services and clients can be tested against one another.
