---
type: docs
title: "Recipes"
linkTitle: "Recipes" 
weight: 10
no_list: true
exclude_from_list: true
---
---

### [Logging](logging)

Any and all nontrivial systems need logging, and microservices are no exception. Messages in logs  help us track running transactions and sort out any problems that may occur. The quality of the information that is stored in logs largely defines how simple or difficult it is to support a system.
The Pip.Services Toolkit contains logging components that can either output messages to the console, or hand them over to specialized services, such as ElasticSearch, AppInsights or CloudWatch.

### [Memory Persistence](memory_persistence)

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!

### [Configuration](configuration)

The Pip.Services Toolkit offers a simple but very flexible mechanism for component configuration. Configurations can be loaded from various sources - configuration files, command line parameters, environment variables, configuration services, etc. Once loaded, they are passed to the specific component, which configures itself accordingly. In this recipe, we'll be taking a look at this mechanism's capabilities and how it can be utilized.


### [Component creation](creating_a_component)

How to create a component and assemble a service from it.
In this tutorial, we will learn how to create a component and how to assemble a service from it. We will start with a short description of a component’s lifecycle and then we will create a component by defining step-by-step all the elements that compose its lifecycle. Finally, we will assemble a service from it through a container, run it, and see the results.  

### [Component References](component_references)

Developing systems out of loosely-coupled components significantly reduces complexity, improves testing, and increases developer productivity. The Pip.Services Toolkit offers a flexible and simple set of primitives for referencing components that is symmetrically implemented in all of the supported programming languages.

### [Component lifecycle](component_lifecycle)

A microservice is a set of loosely coupled components, each of which serves a specific purpose, such as logging events, reading records from a database, or connecting to a 3rd party service.
One of the roles of the microservice’s container is to correctly initialize all internal components, each of which can have its own lifecycle. For example, loading its own configuration, running certain functional processes, and even waiting for results from other components.

### [MongoDB Persistence](mongodb_persistence)

Another frequent choice of persistence is Pip.Service’s MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database. The most basic implementation of this component is the MongoDbPersistence class defined in the MongoDb module. It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations.

### [Background Execution](background_execution)

Sometimes you may need to use your microservices as background tasks. From an architectural point of view, we call this type of tasks Background Execution, as they don’t need any external event to prompt them but a background task logic only. There are several ways to design this task. One approach consists of adding a timer to the microservice’s controller and distributed locks. Another method would be using a message queue to manage the execution process. Lastly, we can use a microservice, such as the Pip.Services’ Job microservice, which keeps a list of jobs performed by other microservices and manages their execution. This article explains how to tackle those three approaches through the use of a practical example.

### [Config File Syntax](config_file_syntax)

Page description for heading and indexes.
In this tutorial you will learn how to create yml configuration files. First, we will see a general case. Then, we will show examples of the most common components in PIP.Services. These examples are valid for any of the six languages used by the toolkit.

### [Reflection](reflection)

How to allow a component to examine itself and manage its internal properties.  
This package provides different classes that will allow you to develop code with introspection capacity. We will start by briefly describing reflection. Then, we will learn how to use each of the different components provided in the package through the use of examples.