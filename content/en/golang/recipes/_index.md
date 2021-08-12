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


### [Configuration](configuration)

The Pip.Services Toolkit offers a simple but very flexible mechanism for component configuration. Configurations can be loaded from various sources - configuration files, command line parameters, environment variables, configuration services, etc. Once loaded, they are passed to the specific component, which configures itself accordingly. In this recipe, we'll be taking a look at this mechanism's capabilities and how it can be utilized.


### [Component References!](component_references)

**Note: this recipe is not implemented yet**

Developing systems out of loosely-coupled components significantly reduces complexity, improves testing, and increases developer productivity. The Pip.Services Toolkit offers a flexible and simple set of primitives for referencing components that is symmetrically implemented in all of the supported programming languages.


### [Component lifecycle!](component_lifecycle)

**Note: this recipe is not implemented yet**

A microservice is a set of loosely coupled components, each of which serves a specific purpose, such as logging events, reading records from a database, or connecting to a 3rd party service.
One of the roles of the microservice’s container is to correctly initialize all internal components, each of which can have its own lifecycle. For example, loading its own configuration, running certain functional processes, and even waiting for results from other components.


### [Memory Persistence](memory_persistence)

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!


### [MongoDB Persistence!](mongodb_persistence)

**Note: this recipe is not implemented yet**

Another frequent choice of persistence is Pip.Service’s MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database. The most basic implementation of this component is the MongoDbPersistence class defined in the MongoDb module. It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations.


### [Background Execution!](background_execution)

**Note: this recipe is not implemented yet**

Sometimes you may need to use your microservices as background tasks. From an architectural point of view, we call this type of tasks Background Execution, as they don’t need any external event to prompt them but a background task logic only. There are several ways to design this task. One approach consists of adding a timer to the microservice’s controller and distributed locks. Another method would be using a message queue to manage the execution process. Lastly, we can use a microservice, such as the Pip.Services’ Job microservice, which keeps a list of jobs performed by other microservices and manages their execution. This article explains how to tackle those three approaches through the use of a practical example.

