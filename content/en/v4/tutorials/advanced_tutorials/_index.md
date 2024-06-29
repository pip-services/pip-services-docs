---
type: docs
title: "Advanced tutorials"
linkTitle: "Advanced tutorials" 
weight: 41
no_list: true
exclude_from_list: true
---
---


### [Data Microservice](data_microservice) 

In this tutorial, we'll be writing from scratch a fully-functional Data microservice, using the patterns and mechanisms available in the Pip.Services toolkit, as well as the programming language you have selected. The microservice that we are going to be using as an example in this tutorial is called The Beacons microservice, which is part of The IoT Microservices Collection.


### [Microservice Dockerization](microservice_dockerization)

Running microservices in Docker containers has become one of the most popular ways of deploying a system. Based on this, this tutorial explains how to create and run a dockerized microservice in five well-defined steps.

### [Client Library](client_library)

This tutorial explains how to create a client library in five easy-to-follow steps. In addition, it explains why client libraries are important and provides some advice for the development of client libraries.

### [Microservice Facade](microservice_facade)

A Facade is a microservice that serves as a point of entry to a system for external clients. The facade provides a stable external interface and hides the inner workings of a system. All requests made by external clients first arrive at the facade, which then forwards them to the appropriate microservices. The facade can also implement additional functionality, such as: authenticating and authorizing users, caching and aggregating requests, logging, etc. how to implement a simple facade that will provide a versioned external API for the microservice implemented in [the Data Microservice](data_microservice) tutorial.

### [MongoDB Persistence](mongodb_persistence)
A frequent choice of persistence is Pip.Services' MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database. The most basic implementation of this component is the MongoDbPersistence class defined in the MongoDb module. It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations. This tutorial explains the basics of working with MongoDB persistences.
