---
type: docs
no_list: true
title: "Step 7. Wrapping the microservice into a container"
linkTitle: "Step 7. Container"
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Our service is pretty much done - all that is left is to place the components we've developed into a process container and configure it.

When a container is started, it starts composing the microservice out of the components indicated in the configuration file. For the container to be able to build these components, it will need a component factory. In the **build** directory, create a `BeaconsServiceFactory` class and populate it with the following code:

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
  {{< include "../__code18_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


As shown in the code above, we start by creating descriptors for all of our components, and then, in the constructor, we register each component in the factory using its descriptor.

Now let's move on to creating the container itself. In the **container** directory, create a BeaconsProcess file with the following code:

{{< tabsection >}}
  {{< include "../__code19_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code19_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code19_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code19_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


Next, add the factories that are missing from the standard container (the one from the pip-services3-container module), so that we can build all the objects our service needs. In our case, this means adding the factory for the components we've written, as well as the default RPC factory (from the pip-services3-rpc module), which is needed for the HTTP service to work.

Before we run the microservice, we need to prepare an initial configuration for it. In the **config** folder, create a **config.yml** file with the following configuration:

**/config/config.yml**

```yml
---
# Container descriptor
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "beacons"
  description: "Beacons microservice"

# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

# Tracer that posts records to log
- descriptor: "pip-services:tracer:log:default:1.0"

# Performance counters that post values to log
- descriptor: "pip-services:counters:log:default:1.0"

{{#unless MONGO_ENABLED}}{{#unless FILE_ENABLED}}
# Memory persistence
- descriptor: "beacons:persistence:memory:default:1.0"
{{/unless}}{{/unless}}

{{#if FILE_ENABLED}}
# File persistence
- descriptor: "beacons:persistence:file:default:1.0"
  path: {{FILE_PATH}}{{#unless FILE_PATH}}"./data/beacons.json"{{/unless}}
{{/if}}

{{#if MONGO_ENABLED}}
# MongoDb persistence
- descriptor: "beacons:persistence:mongodb:default:1.0"
  connection:
    uri: {{MONGO_SERVICE_URI}}
    host: {{MONGO_SERVICE_HOST}}{{#unless MONGO_SERVICE_HOST}}"localhost"{{/unless}}
    port: {{MONGO_SERVICE_PORT}}{{#unless MONGO_SERVICE_PORT}}27017{{/unless}}
    database: {{MONGO_DB}}{{#unless MONGO_DB}}"test"{{/unless}}
{{/if}}

# Service
- descriptor: "beacons:service:default:default:1.0"

# Shared HTTP Endpoint
- descriptor: "pip-services:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: {{HTTP_PORT}}{{#unless HTTP_PORT}}8080{{/unless}}

# HTTP controller V1
- descriptor: "beacons:controller:http:default:1.0"
  swagger:
    enable: true

# Hearbeat controller
- descriptor: "pip-services:heartbeat-controller:http:default:1.0"

# Status controller
- descriptor: "pip-services:status-controller:http:default:1.0"

# Swagger controller
- descriptor: "pip-services:swagger-controller:http:default:1.0"

```

Let's take a closer look at "what's what" in the configuration above. First of all, the file is structured in such a way that the configuration is divided into sections. Each section consists of one or more descriptors and, optionally, a set of configuration parameters. To keep things organized, a section is meant to configure no more than one component. 

In our case, we first configure the context parameters for the container, to make its name and description available. This information will be displayed in the logs as well. 

In the next section, the console logger is enabled, and its log level is set to "trace".

After that, performance counters are enabled and set to send information to the logger.

The next two sections are dedicated to configuring the persistent storage. However, which one we end up using will be determined by whether or not the **MONGO_ENABLED** environment variable is set. If it is set, then the MongoDB persistence will be used.
Otherwise, we will just default to the in-memory persistence

The controller doesn't need any special configuration parameters, so we just list its descriptor to make sure the component gets created.

To enable our microservice to work on a network, we configure an endpoint with a host + port pair. If the corresponding environment variables are set, then those values will be used. Otherwise, the default values indicated in this section will be used.

The descriptor in the next section creates our HTTP service, which will automatically start listening for requests using the endpoint we configured in the previous section.

The last section configures services that monitor the health and status of our microservice.

Now that we've set up the container and a valid configuration, it's time to move on to the final [Step 8. Running and testing the microservice.](../step7)

<span class="hide-title-link">

### [Step 7. Running and testing the microservice.](../step7)

</span>
