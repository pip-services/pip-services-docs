---
type: docs
no_list: true
title: "The Structure of a Microservice"
linkTitle: "Microservice Structure"
weight: 20
---

In essence, microservices are an architectural style that structures a system as a set of relatively small services. Each of these services has its own independent life cycle, and communication between them is usually built upon light-weight communication protocols. However, there don't exist any standards regarding the structure of the microservices themselves. Each company, team, and/or developer is free to choose a design that fits their own unique requirements.

Although there is a large variety of design possibilities, practice shows that building microservices out of loosely-coupled components is the preferred way of getting things done. For example, the popular SpringBoot framework uses this very same approach. The Pip.Services toolkit doesn't impose any restrictions on developers when it comes to structuring a microservice - each developer is free to choose their own path. However, it is worth noting that this componentized design is strongly supported in the Pip.Services toolkit. This approach empowers us to:

- Simplify the development and testing of individual components. Each component can be isolated from the rest of the code, and its dependencies can be substituted for simple mocks during testing.

- Configure microservices for various platforms without diving into the code itself. We can swap out infrastructure-related services, communication protocols, or databases just by changing the microservice's composition and/or configuration.

- Enhance support and speed up the process of introducing innovations. The majority of the components don't require modification when new technologies are added, as they remain untouched by these changes. Only components that directly use these new technologies are modified and/or added.

The typical structure of a microservice and its independent components is shown in the diagram below:

![Toolkit structure diagram](structure_diagram.svg)

Basically, a microservice is a container that is composed of components, essential to that specific service. Components can generally be classified into the following groups:

- Components that define the microservice's external interface, communication protocols, and data structures. In the diagram, these are shown in red.

- Components that provide the microservice with its unique functionality and define how data is stored and processed, as well as the interfaces that are used to communicate with clients. In the diagram, these are shown in green.

- Additional components for caching, monitoring, configuring, synchronising, etc. These are usually added from our standard set of available components, which provide integration with various infrastructure services and platforms. In the diagram, these are shown in grey.

- Client libraries, which can be added to simplify our interactions with the microservice. These provide a convenient interface for working with the microservice and hide all low-level communication details. In the diagram, these are shown in blue.


Configuration files are often used for building microservices and configuring components in the Pip.Services toolkit. Below is an example of such a file:

**config.yml**
```yml
---
# Container descriptor
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "hello-world" 
  description: "HelloWorld microservice"

# Console logger
- descriptor: "pip-services:logger:console:default:1.0" 
  level: "trace"

# Performance counter that post values to log
- descriptor: "pip-services:counters:log:default:1.0"

# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"

# Shared HTTP Endpoint
- descriptor: "pip-services:endpoint:http:default:1.0" 
  connection:
    protocol: http
    host: 0.0.0.0
    port: 8080

# HTTP Service V1
- descriptor: "hello-world:service:http:default:1.0"

# Heartbeat service
- descriptor: "pip-services:heartbeat-service:http:default:1.0"

# Status service
- descriptor: "pip-services:status-service:http:default:1.0"
```

A microservice's container can read this configuration, use the descriptors in a factory to create all necessary components, provide these components with some configuration parameters, link the components with one another, and start up all available active processes.


This approach was used to implement [The Pip.Services Library](https://github.com/pip-services/pip-services-library), which offers dozens of reusable microservices. And as a result, these microservices are all incredibly flexible: to configure them for a specific platform, all you need to do is provide them with the correct configuration, and you're done! No coding needed!
