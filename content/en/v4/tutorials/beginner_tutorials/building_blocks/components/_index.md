---
type: docs
no_list: true
title: "Components"
linkTitle: "Components"
weight: 1
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Components and their interfaces

The Pip.Services toolkit is based on components. The component definition is very flexible. It allows users to create components from scratch, convert existing pieces of code into a component or choose from a large collection of prebuilt components. In the toolkit, any class (or struct in non-OOP languages) can be a component. Additional capabilities can be added via a few standard interfaces that enable specific states in the component lifecycle.

![figure 1](./figure1.svg)

The component interfaces are optional, and can be used in any combination. They are defined in the commons module:

- The IConfigurable interface with the configure method allows passing component configuration parameters. The configurations defined in the ConfigParams object may come from different sources and can be defined during design, runtime or deployment time. Typically components are configured once, right after creation. IReconfigurable interface signifies that components can receive and process configurations more than once.
- The IReferenceable interface sets component dependencies. It represents the locator pattern, then dependencies are retrieved from an IReferences object passed to the component via the setReferences method using a special locator. Locators can be any values, but the PipServices toolkit most often uses Descriptors, which allow matching dependencies using 5 fields: logical group, logical type, implementation type (kind), unique object name and implementation version. The IUnreferenceable interface notifies components via the unsetReferences method to release dependencies before the component is destroyed.
- The IOpenable interface allows components to establish connections, start active threads, or do other things when they are open to prepare for handling incoming calls. On close, the collections are released and resources are freed. The IClosable interface is a subset of IOpenable with only the close method in it.
- The IExecutable interface allows components to process incoming calls by implementing an execute method. And the INotifiable interface receives asynchronous notifications via the notify method.
- The ICleanable method is used to clear a component's state. That can be handy in situations like resetting components in automated tests.

A component that implements all standard interfaces looks the following way:

{{< tabsection >}}
{{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
{{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

### Containers and their configurations

Components can be created, referenced and opened manually. That is usually done in unit tests. However, the most power and flexibility comes when components can be created and managed by inversion of control containers.

The most basic container can be instantiated in-process. On top of it, the Pip.Services toolkit creates a variety of other containers, that allow to assemble microservices from components and deploy them on different platforms. These are:

- ProcessContainer: used to run microservices as system processes or package them into Docker containers.
- LambdaFunction: used to deploy microservices as AWS Lambda.
- AzureFunction: used to deploy microservices as Azure Functions.
- CloudFunction: used to deploy microservices as Google Cloud Functions.
- ServiceFabricService: used to deploy microservices as Service Fabric services on Azure cloud
- ServiceFabricActor: used to deploy microservices as Service Fabric actors on Azure cloud
- Servlet: used to deploy microservices in J2EE containers

Containers allow great flexibility to developers since they can repackage their microservices and run on drastically different platforms like Docker or Serverless reusing over 90% of their code. That also makes their code more future-proof, as they will be able to support the latest and greatest deployment platforms that may emerge in the future with just a few lines of code.

Components are driven by configurations that can be stored in JSON or YAML files. The Mustache templating language allows to inject deployment-time configuration parameters and change the composition of microservices by using command-line arguments and environment variables set during deployment time. This feature allows for the creation of microservices that can adjust themselves depending on the deployment configuration without changing and rebuilding the code. The example below shows how to configure several commonly used components.

```yml
# Container descriptor
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "pip-service-data"
  description: "Entities data microservice"

# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

# Performance log counters
- descriptor: "pip-services:counters:log:default:1.0"

{{#if MONGO_ENABLED}}
# MongoDb persistence
- descriptor: "pip-service-data:persistence:mongodb:default:1.0"
  connection:
    uri: {{MONGO_SERVICE_URI}}
    host: {{MONGO_SERVICE_HOST}}{{#unless MONGO_SERVICE_HOST}}"localhost"{{/unless}}
    port: {{MONGO_SERVICE_PORT}}{{#unless MONGO_SERVICE_PORT}}27017{{/unless}}
    database: {{MONGO_DB}}{{#unless MONGO_DB}}"test"{{/unless}}
  credential:
    username: {{MONGO_USER}}
    password: {{MONGO_PASS}}
{{/if}}

{{#unless MONGO_ENABLED}}
# Default to in-memory persistence, if nothing is set
- descriptor: "pip-service-data:persistence:memory:default:1.0"
{{/unless}}

# Service
- descriptor: "pip-service-data:service:default:default:1.0"

{{#if HTTP_ENABLED}}
# Common HTTP endpoint
- descriptor: "pip-services:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: {{HTTP_PORT}}{{#unless HTTP_PORT}}8080{{/unless}}

# HTTP controller version 1.0
- descriptor: "pip-service-data:controller:http:default:1.0"
  swagger:
    enable: true

# Swagger service
- descriptor: "pip-services:swagger-controller:http:default:1.0"
{{/if}}

{{#if GRPC_ENABLED}}
# Common GRPC endpoint
- descriptor: "pip-services:endpoint:grpc:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: {{GRPC_PORT}}{{#unless GRPC_PORT}}8090{{/unless}}

# GRPC controller version 1.0
- descriptor: "pip-service-data:controller:grpc:default:1.0"
{{/if}}
```

### Component factories

To help containers instantiate components using their locators (descriptors) defined in the configuration files, the Pip.Services toolkit provides the IComponentFactory abstraction that has to be implemented by microservice developers. Standard components provide their corresponding factories that just get to be added to the microservice containers to enable new functionality.

{{< tabsection >}}
{{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
{{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

## Microservice componentized design

Components represent the most basic building block in the Pip.Services toolkit that allows assembling microservices from loosely coupled components mixed together with out-of-the-box components from the toolkit. The typical composition of a microservice is presented in the diagram below. It may contain components to persist data, implement business logic, expose functionality as external interfaces and address various cross-cutting concerns like logging, monitoring, health management, and others.

![figure 2](./figure2.svg)

## References

For more information on components and containers see:

- #### [Component configuration](../../configuration/component_configuration/)
- #### [Config file syntax](../../configuration/config_file_syntax/)
- #### [Process container](../../containers/process_container/)
