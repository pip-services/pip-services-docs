---
type: docs
no_list: true
title: "Basic MongoDB Persistence"
linkTitle: "Basic MongoDB Persistence"
weight: 30
description: >-
     How to persist data using a MongoDB database.
---

### Key takeaways

### Introduction

This tutorial will help you understand how to create persistence components for MongoDB. In particular, you will learn how to use two components, namely MongoDbPersistence and IdentifiableMongoDbPersistence. The explanations will include practical examples.

### Persisting data with MongoDB
The Pip.Services toolkit provides two different components for MongoDB persistence. They are the MongoDbPersistence and the IdentifiableMongoDbPersistence classes respectively. The first can be used to persist objects of any type. The second is aimed at data items with unique ids. Both classes are part of the MongoDB module, persistence 

#### General pre-requisites
In order to use any of these two components, we need to install the MongoDB module. This can be done with the following command:
#### Data object
Throughout the examples, we will use the data structure that appears below. It contains an id field, which can be used to identify each document. The next two fields (key and content) are generic and represent any type of content that we want to persist.

In addition, we create three instances of this class, which we will use in the examples for CRUD operations.
#### MongoDbPersistence
This component can be used with any type of data object. However, all documents stored in MongoDB are identifiable, that is, they have a unique id value. This means that even if we don’t assign a unique identifier to our object, MongoDB will assign one automatically. That is the reason behind having an id field in our data structure.
##### Pre-requisites
To use the MongoDbPersistence component we need to include it first. This can be done with the following command:
##### Component creation
To create our MongoDB persistence component, we create a class that extends the MongoDbPersistence class.  We also define an instance of this class and configure it using the configure method available from its parent class. As this method requires an input of type ConfigParams, we import this component and define the host, port, and database. Finally, we open the persistence component. Our code will look something like this:

Later on, once all operations have been completed, we can close our persistence component with the close() method.

##### CRUD operations
###### Create
###### Read
###### Update
###### Delete
###### Example
Now, we will see a simple example that puts most of the learned concepts together. It starts by importing the necessary libraries and creating a MongoDB persistence class that includes an update method. Then, it performs CRUD operations and prints the results. The code is:


#### IdentifiableMongoDbPersistence
This component is used to perform CRUD operations with identifiable data objects, that is, objects that can be identified via a unique id. 
##### Pre-requisites
To use the IdentifiableMongoDbPersistence component we need to import it first. This can be done with the following command:
##### Component creation
To create an identifiable MongoDB persistence component, we create a subclass of the IdentifiableMongoDbPersistence class. We also define an instance of it and, via the configure() method, we add the connection parameters. In the next example, we use a local database and we connect to it through the default port 27017. We also define a database named “mydb”.

And, after creating it, we open the connection. 

Later on, once we have finished using this persistence component, we can close it with the close() method.
##### CRUD operations
###### Create
###### Read
###### Update
###### Delete
###### Example
To summarize, we will put everything together in one comprehensive example. In it, we first create a data class with a field named id. Then, we create our persistence object, configure it and open the connection. Once we are connected to the database “mydb”, we perform the four CRUD operations and print the results. The code is:

### Wrapping up

In this tutorial, we have explored how to create MongoDB persistence components. We saw two different components, namely the MongoDbPersistence and the IdentifiableMongoDbPersistence classes, and how to perform CRUD operations with them. Finally, we saw a comprehensive example for each component.
