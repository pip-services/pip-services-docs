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

The Pip.Services Toolkit offers a simple but very flexible mechanism for component configuration. Configurations can be loaded from various sources - configuration files, command line parameters, environment variables, configuration services, etc. Once loaded, they are passed to the specific component, which configures itself accordingly. In this recipe, we"ll be taking a look at this mechanism"s capabilities and how it can be utilized.


### [Component References](component_references)

Developing systems out of loosely-coupled components significantly reduces complexity, improves testing, and increases developer productivity. The Pip.Services Toolkit offers a flexible and simple set of primitives for referencing components that is symmetrically implemented in all of the supported programming languages.


### [Component lifecycle](component_lifecycle)

A microservice is a set of loosely coupled components, each of which serves a specific purpose, such as logging events, reading records from a database, or connecting to a 3rd party service.
One of the roles of the microservice’s container is to correctly initialize all internal components, each of which can have its own lifecycle. For example, loading its own configuration, running certain functional processes, and even waiting for results from other components.


### [Memory Persistence](memory_persistence)

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!


### [MongoDB Persistence](mongodb_persistence)

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!


### [Active Logic](background_execution)

Microservices are capable of successfully solving a wide variety of business tasks. However, where they really shine (and are especially effective) is when it comes to scaling. Scaling is the process of creating a number of identical instances of a microservice for performing large and resource-hungry tasks. Thanks to scaling, many tasks can now be completed in adequate time and with optimal use of resources. Archiving a database, batch processing, and 3D video rendering are all examples of tasks that benefit from scaling, and many others exist as well!

