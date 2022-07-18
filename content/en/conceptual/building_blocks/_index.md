---
type: docs
title: "Building Blocks"
linkTitle: "Building Blocks" 
weight: 5
no_list: true
exclude_from_list: true
---
---


### [Components](components)
Pip.Services toolkit is built around components, which can be created from scratch, obtained from existing code via simple augmentation or selected from a large collection of prebuilt modules. These components are assembled into fully-functional microservices using a number of inversion-of-control containers.

### [Data Handling](data_handling)
The toolkit provides a large collection of abstractions and patterns to handle dynamically or statically typed data. It supports conversions, validations, introspection, filtering, sorting, paging, storing and retrieving, and more. 

### [Configurations](configurations)
Pip.Services offers the flexibility to configure components and microservices at design, runtime and deployment time.

### [Connectivity](connectivity)
Microservices often get to connect to databases, infrastructure services and other microservices. For this, Pip.Services offers discovery components and credential stores.

### [Observability](observability)
Monitoring and observability is critical to run and support microservices systems in production. Pip.Services includes components to do logging, tracing and metric collection with a few lines of code.

### [Concurrency](concurrency)
To achieve a high scale and reliability microservices shall support horizontal scaling where multiple copies of the same microservice work concurrently. To prevent conflicts and enable complex collaboration scenarios Pip.Services offer components like distributed caches and locks.