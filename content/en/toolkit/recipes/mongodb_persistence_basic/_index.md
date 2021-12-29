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

#### Data object

#### MongoDbPersistence
##### Pre-requisites
##### Component creation
##### CRUD operations
###### Create
###### Read
###### Update
###### Delete
###### Example
Now, we will see a simple example that puts most of the learned concepts together. It starts by importing the necessary libraries and creating a MongoDB persistence class that includes an update method. Then, it performs CRUD operations and prints the results. The code is:
#### IdentifiableMongoDbPersistence
##### Pre-requisites
##### Component creation
##### CRUD operations
###### Create
###### Read
###### Update
###### Delete
###### Example
To summarize, we will put everything together in one comprehensive example. In it, we first create a data class with a field named id. Then, we create our persistence object, configure it and open the connection. Once we are connected to the database “mydb”, we perform the four CRUD operations and print the results. The code is:

### Wrapping up

In this tutorial, we have explored how to create MongoDB persistence components. We saw two different components, namely the MongoDbPersistence and the IdentifiableMongoDbPersistence classes, and how to perform CRUD operations with them. Finally, we saw a comprehensive example for each component.
