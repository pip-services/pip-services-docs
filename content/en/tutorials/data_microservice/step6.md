---
type: docs
no_list: true
title: "Step 6. Wrapping microservice into container"
linkTitle: "Step 6"
---

Our service is pretty much done - all that is left is to place the components we’ve developed into a process container and configure it.

When a container is started, it starts composing the microservice out of the components indicated in the configuration file. For the container to be able to build these components, it will need a component factory. In the **build** directory, create a `BeaconsServiceFactory` class and populate it with the following code:

**/src/build/BeaconsServiceFactory.ts**

```typescript
import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';
‍
import { BeaconsMemoryPersistence } from '../../src/persistence/BeaconsMemoryPersistence';
import { BeaconsFilePersistence } from '../../src/persistence/BeaconsFilePersistence';
import { BeaconsMongoDbPersistence } from '../../src/persistence/BeaconsMongoDbPersistence';
import { BeaconsController } from '../../src/logic/BeaconsController';
import { BeaconsHttpServiceV1 } from '../../src/services/version1/BeaconsHttpServiceV1';
‍
export class BeaconsServiceFactory extends Factory{
    public static MemoryPersistenceDescriptor = new Descriptor('beacons', 'persistence', 'memory', '*', '1.0');
    public static FilePersistenceDescriptor = new Descriptor('beacons', 'persistence', 'file', '*', '1.0');
    public static MongoDbPersistenceDescriptor = new Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0');
    public static ControllerDescriptor = new Descriptor('beacons', 'controller', 'default', '*', '1.0');
    public static HttpServiceV1Descriptor = new Descriptor('beacons', 'service', 'http', '*', '1.0');
        constructor(){
        super();
‍
        this.registerAsType(BeaconsServiceFactory.MemoryPersistenceDescriptor, BeaconsMemoryPersistence);
        this.registerAsType(BeaconsServiceFactory.FilePersistenceDescriptor, BeaconsFilePersistence);
        this.registerAsType(BeaconsServiceFactory.MongoDbPersistenceDescriptor, BeaconsMongoDbPersistence);
        this.registerAsType(BeaconsServiceFactory.ControllerDescriptor, BeaconsController);
        this.registerAsType(BeaconsServiceFactory.HttpServiceV1Descriptor, BeaconsHttpServiceV1);
    }
}

```

As shown in the code above, we start by creating descriptors for all of our components, and then, in the constructor, we register each component in the factory using its descriptor.

Now let’s move on to creating the container itself. In the **container** directory, create a BeaconsProcess file with the following code:

```typescript
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
‍
import {BeaconsServiceFactory} from '../build/BeaconsServiceFactory';
‍
export class BeaconsProcess extends ProcessContainer{
    public constructor(){
        super('beacons', 'Beacons microservice');
‍
        this._factories.add(new BeaconsServiceFactory());
        this._factories.add(new DefaultRpcFactory());
    }
}

```

Next, add the factories that are missing from the standard container (the one from the pip-services3-container module), so that we can build all the objects our service needs. In our case, this means adding the factory for the components we’ve written, as well as the default RPC factory (from the pip-services3-rpc module), which is needed for the HTTP service to work.

Before we run the microservice, we need to prepare an initial configuration for it. In the **config** folder, create a **config.yml** file with the following configuration:

**/config/config.yml**

```yml
---
# Container descriptor
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "beacons"
  description: "Beacons microservice"
‍
# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"
‍
# Performance counter that post values to log
- descriptor: "pip-services:counters:log:default:1.0"
‍
{{^if MONGO_ENABLED}}
# Memory persistence- descriptor: "beacons:persistence:memory:default:1.0"
{{/if}}
‍
{{#if MONGO_ENABLED}}
# MongoDb persistence
- descriptor: "beacons:persistence:mongodb:default:1.0"
  connection:
    uri: {{MONGO_SERVICE_URI}}
    host: {{MONGO_SERVICE_HOST}}{{^if MONGO_SERVICE_HOST}}"localhost"{{/if}}
    port: {{MONGO_SERVICE_PORT}}{{^if MONGO_SERVICE_PORT}}27017{{/if}}
    database: {{MONGO_DB}}{{^if MONGO_DB}}"test"{{/if}}
{{/if}}
‍
# Controller
- descriptor: "beacons:controller:default:default:1.0"
‍
# Shared HTTP Endpoint
- descriptor: "pip-services:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: {{HTTP_PORT}}{{^if HTTP_PORT}}8080{{/if}}
‍
# HTTP Service V1
- descriptor: "beacons:service:http:default:1.0"
‍
# Heartbeat service
- descriptor: "pip-services:heartbeat-service:http:default:1.0"
 
# Status service
- descriptor: "pip-services:status-service:http:default:1.0"

```

Let’s take a closer look at “what’s what” in the configuration above. First of all, the file is structured in such a way that the configuration is divided into sections. Each section consists of one or more descriptors and, optionally, a set of configuration parameters. To keep things organized, a section is meant to configure no more than one component. 

In our case, we first configure the context parameters for the container, to make its name and description available. This information will be displayed in the logs as well. 

In the next section, the console logger is enabled, and its log level is set to “trace”.

After that, performance counters are enabled and set to send information to the logger.

The next two sections are dedicated to configuring the persistent storage. However, which one we end up using will be determined by whether or not the **MONGO_ENABLED** environment variable is set. If it is set, then the MongoDB persistence will be used.
Otherwise, we will just default to the in-memory persistence

The controller doesn’t need any special configuration parameters, so we just list its descriptor to make sure the component gets created.

To enable our microservice to work on a network, we configure an endpoint with a host + port pair. If the corresponding environment variables are set, then those values will be used. Otherwise, the default values indicated in this section will be used.

The descriptor in the next section creates our HTTP service, which will automatically start listening for requests using the endpoint we configured in the previous section.

The last section configures services that monitor the health and status of our microservice.

Now that we’ve set up the container and a valid configuration, it’s time to move on to the final [Step 7. Running and testing the microservice.](../step7)