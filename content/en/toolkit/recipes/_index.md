---
type: docs
title: "Recipes"
linkTitle: "Recipes" 
weight: 10
no_list: true
exclude_from_list: true
---
---

### [Command Sets](command_sets)

The CommandSet component allows us to group a set of commands and events, which can be called and executed at a later stage. 

In this tutorial, you will learn how to create a CommandSet component, add commands and events to it, and perform some operations, such as executing or finding a specific command from a command set.

### [Commandable Http Services](commandable_http_services)

In this tutorial, you will learn how to create and consume CommandableHttpServices. This type of service is characterized by containing a set of commands that can be called via the HTTP/REST protocol. 

In order to explain its functionality, this tutorial begins by explaining the necessary pre-requisites to work with this component. Then, it shows how to create a command set and a service that uses it. To complete the service, it describes how to include it in a ProcessContainer.

### [Component Lifecycle](component_lifecycle)

A microservice is a set of loosely coupled components, each of which serves a specific purpose, such as logging events, reading records from a database, or connecting to a 3rd party service.
One of the roles of the microservice’s container is to correctly initialize all internal components, each of which can have its own lifecycle. For example, loading its own configuration, running certain functional processes, and even waiting for results from other components.

### [Component References](component_references)

Developing systems out of loosely-coupled components significantly reduces complexity, improves testing, and increases developer productivity. The Pip.Services Toolkit offers a flexible and simple set of primitives for referencing components that is symmetrically implemented in all of the supported programming languages.

### [Config File Syntax](config_file_syntax)

Page description for heading and indexes.
In this tutorial you will learn how to create yml configuration files. First, we will see a general case. Then, we will show examples of the most common components in PIP.Services. These examples are valid for any of the six languages used by the toolkit.

### [Configuration](configuration)

The Pip.Services Toolkit offers a simple but very flexible mechanism for component configuration. Configurations can be loaded from various sources - configuration files, command line parameters, environment variables, configuration services, etc. Once loaded, they are passed to the specific component, which configures itself accordingly. In this recipe, we'll be taking a look at this mechanism's capabilities and how it can be utilized.

### [Configuring Connections](configuring_connections)

In this tutorial, you will learn how to configure connections with the ConnectionParams component and perform CRUD operations with them. First, we will see different ways to create connections, such as from a constructor, a tuple, a string, and a ConfigParams object. Then, we will see how to extract, modify and delete different fields in those connections.

### [Configuring Credentials](configuring_credentials)

In this tutorial, you will understand how to operate with the CredentialParams component by performing CRUD operations. We will begin by learning to create an instance of this component using its constructor, a tuple, a string, and the ConfigParam class. Then, we will understand how to extract and update the values of credential parameters stored in the component, and delete those parameters.

### [Component Creation](creating_a_component)

How to create a component and assemble a service from it.
In this tutorial, we will learn how to create a component and how to assemble a service from it. We will start with a short description of a component’s lifecycle and then we will create a component by defining step-by-step all the elements that compose its lifecycle. Finally, we will assemble a service from it through a container, run it, and see the results. 

### [Data Conversion](data_conversion)

This tutorial will help you to understand the different conversion components available in the Pip.Services toolkit, Commons module, convert library. The tutorial consists of a brief explanation of each class and its methods followed by a set of examples that show how to use each of them.

### [Deployment time configuration](deployment_configuration)

How to set up and change your configurations at deployment time.
In this tutorial, you will learn how to configure at deployment time an application based on Pip.Services components.

### [Designing persistence](designing_persistence)

In this tutorial, you will understand how to design your persistence in such a way that your code benefits from one of the main features of Pip.Services, which is symmetric code implementation.
In order to see this, we will create an example using two different databases (MySQL and PostgreSQL). Then, we will create a common set of instructions to manage CRUD operations and transfer data from one database into another.

### [Discovery Services](discovery_services)

In this tutorial, you will learn how to create and operate a discovery service that stores connection parameters in memory. We will begin by explaining the necessary pre-requisites. Then, we will continue by showing how to create the service and add and extract connection parameters from it. We will finish with a comprehensive example that illustrates all the learned concepts.

### [gRPC](grpc)

In this tutorial, you will learn how to create a gRPC client and server by using the Pip.Services’ gRPC module. We will start with an explanation of how to install this module and a brief description of the example used. Next, we will see how to create a gRPC server and client. Lastly, we will have a section containing the complete code for this project.

### [JSON Persistence](json_persistence)

This tutorial will help you understand how to create a JSON persistence component. It starts by explaining the pre-requisites. Then it continues with an explanation on how to create a JSON persistence object, save data to it, and extract stored data from it. In the end, it provides an example where all the explained methods are included.

### [Kafka](kafka)

This tutorial will help you understand how to use two components designed to communicate with Apache Kafka. They are KafkaConnection and KafkaMessageQueue.

### [Logging](logging)

Any and all nontrivial systems need logging, and microservices are no exception. Messages in logs  help us track running transactions and sort out any problems that may occur. The quality of the information that is stored in logs largely defines how simple or difficult it is to support a system.
The Pip.Services Toolkit contains logging components that can either output messages to the console, or hand them over to specialized services, such as ElasticSearch, AppInsights or CloudWatch.

### [Memcached](memcached)
In this tutorial, you will understand how to create and manage a cache and a distributed lock, both based on a Memcached store. 

First, we will look at the pre-requisites. Then, we will see how to create and perform relevant operations through examples. We will finalize the tutorial with a practical example of how to use distributed locks.

### [Memory Persistence](memory_persistence)

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!

### [MongoDB Persistence](mongodb_persistence)

Another frequent choice of persistence is Pip.Service’s MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database. The most basic implementation of this component is the MongoDbPersistence class defined in the MongoDb module. It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations.

### [MongoDB Persistence Basic](mongodb_persistence_basic)
This tutorial will help you understand how to create persistence components for MongoDB. In particular, you will learn how to use two components, namely MongoDbPersistence and IdentifiableMongoDbPersistence. The explanations will include practical examples.

### [MQTT](mqtt)

In this tutorial, we will see how to create a message queue with MqttMessageQueue, which is a component available in the mqtt module. First, we will see the necessary pre-requisites and how to create a basic message queue.

### [Mustache Templates](mustache_templates)

How to use Mustache templates with PIP.Services. 
PIP.Services offers an implementation of a Mustache engine available in its Expressions module. This implementation of Mustache is enhanced with the addition of some helpers. In this tutorial, you will learn how to use the MustacheTemplate component, which can be used to evaluate Mustache templates.

### [MySQL Persistence](mysql_persistence)

In this tutorial, we will see how to interact with a MySQL database in order to provide persistence to our code. First, we will see the main CRUD methods available in the three persistence components contained in the MySQL module.

### [PostgreSQL Persistence](postgre_persistence)

In this tutorial, you will understand how to create persistence components for PostgreSQL databases. First, we will see the necessary prerequisites. Then, we will move to each of the three components available in Pip.Services for this purpose. Finally, we will summarize all the explained concepts.

### [Randomness](randomness)

How to generate random values with the Commons’ Random package.
In this tutorial, we will learn how to use the Random package available in the Commons module. This package contains a set of classes and methods that can be used to generate different types of random values, such as Booleans, doubles, floats, and integers. It also offers methods to generate different types of texts such as names and surnames, and methods to randomly select an element from an array or text.

### [Redis](redis)

In this tutorial, you will see how to use two components related to the Redis database. The first is the RedisCache class, which can be used to create distributed caches that store values in Redis. The second is RedisLock, a component that allows us to create a distributed lock based on the Redis database.

### [Reflection](reflection)

How to allow a component to examine itself and manage its internal properties.  
This package provides different classes that will allow you to develop code with introspection capacity. We will start by briefly describing reflection. Then, we will learn how to use each of the different components provided in the package through the use of examples.

### [REST Service](rest_service)

This tutorial will help you understand how REST services can be created with Pip.Services. It begins by explaining the necessary pre-requisites. Then, it proceeds to explain how to create a simple REST service using the RestService component, how to configure it, and how to run it. It ends by showing the results on a browser.

### [SQL Server Persistence](sqlserver_persistence)

This tutorial will help you understand how to create SQL Server persistence components using Pip.Services. It begins by explaining how to install the sqlserver module and create the data structure used in the tutorial’s examples.

### [Swagger](swagger)

In this tutorial, you will learn how to generate Swagger documentation for a REST service. We will see three different cases. The first is a common REST service, which is documented via a YAML file containing a description of its methods. The second is a commandable REST service, which has a defined set of commands that is used to define the Swagger document. Finally, the last case considers a commandable REST component with a command set and a Swagger UI defined by a YAML file. 

### [Three tier architecture](three_tier_architecture)

In this tutorial, you will learn how to construct an application using Pip.Services components and having a three-tier structure. 
We will begin with a brief description of the example that we will be constructing and a list of the necessary pre-requisites.