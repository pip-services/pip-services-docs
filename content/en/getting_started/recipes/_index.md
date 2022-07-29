---
type: docs
title: "Recipes"
linkTitle: "Recipes" 
weight: 30
no_list: true
exclude_from_list: true
---
---

### [Configuring connections](configuring_connections)

In this tutorial, you will learn how to configure connections with the ConnectionParams component and perform CRUD operations with them. First, we will see different ways to create connections, such as from a constructor, a tuple, a string, and a ConfigParams object. Then, we will see how to extract, modify and delete different fields in those connections.

### [Configuring credentials](configuring_credentials)

In this tutorial, you will understand how to operate with the CredentialParams component by performing CRUD operations. We will begin by learning to create an instance of this component using its constructor, a tuple, a string, and the ConfigParam class. Then, we will understand how to extract and update the values of credential parameters stored in the component, and delete those parameters.

### [Connection utils](connection_utils)

In this tutorial, you will learn how to use a set of utilities offered by Pip.Services that can be used to simplify the handling of connections. We will start by explaining how to import these components. Then, we will see their syntax and how to use them. Finally, we will explore an example that illustrates the practical application of some of these utilities.

### [Data conversion](data_conversion)

This tutorial will help you to understand the different conversion components available in the Pip.Services toolkit, Commons module, convert library. The tutorial consists of a brief explanation of each class and its methods followed by a set of examples that show how to use each of them.

### [Datadog](datadog)

How to send metrics and logs to Datadog.
In this tutorial, you will learn how to send different metrics and logs to Datadog. For this, we will first create a class with a method that, once executed, sends metrics to Datadog via the DataDogCounters component. Then, we will modify this class and use it to send log information to Datadog via the DataDogLogger class.

### [Deployment time configuration](deployment_configuration)

How to set up and change your configurations at deployment time.
In this tutorial, you will learn how to configure at deployment time an application based on Pip.Services components.

### [Designing persistence](designing_persistence)

In this tutorial, you will understand how to design your persistence in such a way that your code benefits from one of the main features of Pip.Services, which is symmetric code implementation.
In order to see this, we will create an example using two different databases (MySQL and PostgreSQL). Then, we will create a common set of instructions to manage CRUD operations and transfer data from one database into another.

### [Discovery services](discovery_services)

In this tutorial, you will learn how to create and operate a discovery service that stores connection parameters in memory. We will begin by explaining the necessary pre-requisites. Then, we will continue by showing how to create the service and add and extract connection parameters from it. We will finish with a comprehensive example that illustrates all the learned concepts.

### [Elasticsearch](elasticsearch)

In this tutorial you will learn how to work with the ElasticSearchLogger component, which is used to send logs to Elasticsearch. First, we will see the necessary pre-requisites. Then, we will continue by creating a custom component with an example method, running it and generating the logs. After this, we will verify that the messages reached Elasticsearch by using the Elasticvue online tool. Finally, we will improve our custom component by including several Pip.Services best practices.

### [Fluentd](fluentd)

In this tutorial, you will learn how to use the FluentdLogger component to send log messages to Fluentd. First, we will describe this component and understand its pre-requisites. Then, we will create a custom component with methods that generate log messages every time they are called, run it and see the messages received by Fluentd. Finally, we will combine the different code sections into one program and summarize what we have learned.

### [Logging](logging)

In this tutorial, you will learn how to add logging capacity to a microservice. First, we will understand what logging consists of. Then, we will use the microservice we created in the "Creating a component" tutorial, replace the printed messages with logger messages and create an exception in our business process (my_task). After running the code, we will see the tagged messages from the logger.

### [Metrics](metrics)

This tutorial will teach you how to create and manage performance metrics with Pip.Services components. First, we will learn how counters are defined in the toolkit and how to add them to a component. Then, we will see several options to manage the obtained performance metrics, such as storing them in memory, showing them on a console, sending them to external tools, and grouping them in composite counters. We will also study a dummy component used to simulate counters.

### [MongoDB persistence](mongodb_persistence)

Another frequent choice of persistence is Pip.Service's MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database. The most basic implementation of this component is the MongoDbPersistence class defined in the MongoDb module. It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations.

### [Mustache Templates](mustache_templates)

How to use Mustache templates with PIP.Services. 
PIP.Services offers an implementation of a Mustache engine available in its Expressions module. This implementation of Mustache is enhanced with the addition of some helpers. In this tutorial, you will learn how to use the MustacheTemplate component, which can be used to evaluate Mustache templates.

### [Prometheus](prometheus)

In this tutorial, you will learn how to send different metrics to Prometheus. First, we will see how to do this via the Pushgateway. Then, we will understand how to show our metrics on a /metrics page. Finally, we will go through a set of different methods, which are useful to create different counters.

### [Randomness](randomness)

How to generate random values with the Commons' Random package.
In this tutorial, we will learn how to use the Random package available in the Commons module. This package contains a set of classes and methods that can be used to generate different types of random values, such as Booleans, doubles, floats, and integers. It also offers methods to generate different types of texts such as names and surnames, and methods to randomly select an element from an array or text.