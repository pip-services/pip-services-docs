---
type: docs
no_list: true
title: "Step 7. Running and testing the microservice" 
linkTitle: "Step 7" 
---

To run our microservice, we need to add just one last bit of code. In the bin folder, create a run.js file with the following:

**/bin/run.js**

```javascript
let BeaconsProcess = require('../obj/src/container/BeaconsProcess').BeaconsProcess;
‍
try {
    let proc = new BeaconsProcess();
    proc._configPath = "./config/config.yml";
    proc.run(process.argv);
} catch (ex) {
    console.error(ex);
}


```

In the code above, all we’re doing is creating an instance of the container we described earlier, telling it where to find the configuration file, and running it using the `run()` method.

To run the microservice, execute the following command from a terminal at the root of the project:

```bash
 node ./bin/run.js
```

You should get a result similar to the one shown below.

![ConsoleScreen1](/images/tutorials/data_microservice/console_screen1.png)

Since we opted for the console logger in our configuration file, all information is going to be printed to the console. The service is using the in-memory persistence by default. To switch over to the MongoDB persistence, the MONGO_ENABLED environment variable has to be set and MongoDB should be running. This can be done either by starting the service from a script, in which we set our environment variables beforehand, or by configuring them in the OS’s environment.

Let’s use the following two commands to set our environment variable and start our microservice using the MongoDB persistence:

```bash
export MONGO_ENABLED=truenode .\bin\run.js
```

Make sure that you have MongoDB running locally (see [Setup environment](../quick_start/setup_enviroment)) or in an accessible Docker container (i.e. whose ports are exposed), and that the connection parameters set in the configuration file are correct.

We can use the following docker composer configuration to run MongoDB in Docker:

**/docker/docker-compose.yml**

```yml
<em>version: '3.3'
‍</em>
<em>services:
‍</em>
<em>mongo:
    image: mongo:latest
    ports:
      - "27017:27017"</em>

```

And use the following command to get it up and running:

```bash
docker-compose -f ./docker/docker-compose.yml up
```
Once the microservice has started, we can check whether or not it is available by requesting the following URL from a browser: `http://localhost:8080/heartbeat`. If everything is working correctly, we should receive the current date and UTC time in the JSON format. This mechanism allows us to check whether or not our microservice is up and running at any given time.

Now let’s request the status URL from our browser: `http://localhost:8080/status`. This should generate a response with information about the service in a JSON format, such as: its name, what modules are loaded, etc. This mechanism allows us to identify our microservices while they’re running.

```json
{
  "id": "microservice-server",
  "name": "beacons",
  "description": "Beacons microservice",
  "start_time": "2020-06-11T10:48:03.623Z",
  "current_time": "2020-06-11T10:49:19.777Z",
  "uptime": 76154,
  "properties": {},
  "components": [
    "pip-services:context-info:default:*:1.0",
    "pip-services:factory:container:default:1.0",
    "pip-services:context-info:default:default:1.0",
    "pip-services:logger:console:default:1.0",
    "pip-services:counters:log:default:1.0",
    "beacons:persistence:memory:default:1.0",
    "pip-services:endpoint:http:default:1.0",
    "beacons:service:http:default:1.0",
    "pip-services:heartbeat-service:http:default:1.0",
    "pip-services:status-service:http:default:1.0",
    "beacons:controller:default:*:1.0"
  ]
}
```

Let’s move on to testing the main functionality of our microservice. Our set of commands for working with the service is available at the base path of `http://localhost:8080/v1/beacons`, using the POST method.

We could use a REST client to test our microservice, but for the sake of this example, we’ll be using curl instead.

Let’s check the availability of our commands - the very same ones we defined in our CommandSet.

First, we’ll attempt to create a few beacons in the system:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"beacon\":{\"id\": \"1\", \"udi\": \"00001\",  \"type\": \"altbeacon\",  \"site_id\": \"1\",    \"label\": \"TestBeacon1\", \"center\": { \"type\": \"Point\", \"coordinates\": [ 0, 0 ] },\"radius\": 50}}"
http://localhost:8080/v1/beacons/create_beacon
‍
curl -X POST -H "Content-Type: application/json" -d "{\"beacon\":{\"id\": \"2\", \"udi\": \"00002\",  \"type\": \"altbeacon\",  \"site_id\": \"1\",    \"label\": \"TestBeacon2\", \"center\": { \"type\": \"Point\", \"coordinates\": [ 2, 2 ] },\"radius\": 70}}"
http://localhost:8080/v1/beacons/create_beacon

```

Update the second beacon by changing its coordinates and radius:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"beacon\":{\"id\": \"2\", \"udi\": \"00002\", \"type\": \"altbeacon\", \"site_id\": \"1\", \"label\": \"TestBeacon2\", \"center\": { \"type\": \"Point\", \"coordinates\": [ 2, 4 ] },\"radius\": 80}}" http://localhost:8080/v1/beacons/update_beacon

```

Retrieve a list of all available beacons using the command below:

```bash
curl -X POST http://localhost:8080/v1/beacons/get_beacons
```

We should get the following JSON response with all of the beacons currently in the system:

```json
{"total":2,"data":[{"id":"1","udi":"00001","type":"altbeacon","site_id":"1","label":"TestBeacon1","center":{"type":"Point","coordinates":[0,0]},"radius":50},{"id":"2","udi":"00002","type":"altbeacon","site_id":"1","label":"TestBeacon2","center":{"type":"Point","coordinates":[2,4]},"radius":80}]}
```

Try to get the first beacon by its UDI using the command:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"udi\":\"00001\"}" http://localhost:8080/v1/beacons/get_beacon_by_udi
```

We should receive the following response:

```json
{"id":"1","udi":"00001","type":"altbeacon","site_id":"1","label":"TestBeacon1","center":{"type":"Point","coordinates":[0,0]},"radius":50}
```

To calculate a device’s position, use the following request:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"site_id\": \"1\",\"udis\": [\"00001\", \"00002\"]}" http://localhost:8080/v1/beacons/calculate_position
```

As a result, we should get the following coordinates:

``json
{"type":"Point","coordinates":[1,2]}
```

Now let’s delete a beacon by its id:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"beacon_id\":\"1\"}" http://localhost:8080/v1/beacons/delete_beacon_by_id
```

The system will return the deleted beacon if deletion was successful:

```json
{"id":"1","udi":"00001","type":"altbeacon","site_id":"1","label":"TestBeacon1","center":{"type":"Point","coordinates":[0,0]},"radius":50}
```

Let’s make sure that there’s only one beacon left in the system by asking again for a list of all available beacons:

```bash
curl -X POST  http://localhost:8080/v1/beacons/get_beacons
```

As a result, only the beacon with an id of “2” is returned.

```json
{"total":1,"data":[{"id":"2","udi":"00002","type":"altbeacon","site_id":"1","label":"TestBeacon2","center":{"type":"Point","coordinates":[2,4]},"radius":80}]}
```

And that’s it! Congratulations! You’ve created a microservice that’s far more advanced than the regular <em>“Hello, World”</em> example!
All source code is available on [Github](https://github.com/pip-services-samples/pip-services-beacons-node)



