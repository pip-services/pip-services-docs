---
type: docs
no_list: true
title: "Step 6. Wrapping the microservice into a container"
linkTitle: "Step 6. Container"
gitUrl: "https://github.com/pip-services-samples/service-beacons-dart"
---

Our service is pretty much done - all that is left is to place the components we’ve developed into a process container and configure it.

When a container is started, it starts composing the microservice out of the components indicated in the configuration file. For the container to be able to build these components, it will need a component factory. In the **build** directory, create a `BeaconsServiceFactory` class and populate it with the following code:

**/src/build/BeaconsServiceFactory.dart**

```dart
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';

import '../persistence/BeaconsMemoryPersistence.dart';
import '../persistence/BeaconsFilePersistence.dart';
import '../persistence/BeaconsMongoDbPersistence.dart';
import '../logic/BeaconsController.dart';
import '../services/version1/BeaconsCommandableHttpServiceV1.dart';

class BeaconsServiceFactory extends Factory {
  static final MemoryPersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'memory', '*', '1.0');
  static final FilePersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'file', '*', '1.0');
  static final MongoDbPersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0');
  static final ControllerDescriptor =
      Descriptor('beacons', 'controller', 'default', '*', '1.0');
  static final CommandableHttpServiceV1Descriptor =
      Descriptor('beacons', 'service', 'commandable-http', '*', '1.0');
  
  BeaconsServiceFactory() : super() {
    registerAsType(BeaconsServiceFactory.MemoryPersistenceDescriptor,
        BeaconsMemoryPersistence);
    registerAsType(BeaconsServiceFactory.FilePersistenceDescriptor,
        BeaconsFilePersistence);
    registerAsType(BeaconsServiceFactory.MongoDbPersistenceDescriptor,
        BeaconsMongoDbPersistence);
    registerAsType(
        BeaconsServiceFactory.ControllerDescriptor, BeaconsController);
    registerAsType(BeaconsServiceFactory.CommandableHttpServiceV1Descriptor,
        BeaconsCommandableHttpServiceV1);
    
  }
}
```

As shown in the code above, we start by creating descriptors for all of our components, and then, in the constructor, we register each component in the factory using its descriptor.

Now let’s move on to creating the container itself. In the **container** directory, create a BeaconsProcess file with the following code:

```dart
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

import '../build/BeaconsServiceFactory.dart';

class BeaconsProcess extends ProcessContainer {
  BeaconsProcess() : super('beacons', 'Beacons microservice') {
    factories.add(BeaconsServiceFactory());
    factories.add(DefaultRpcFactory());
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

<span class="hide-title-link">

### [Step 7. Running and testing the microservice.](../step7)

</span>
