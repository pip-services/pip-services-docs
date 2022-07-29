---
type: docs
title: "Persistences"
linkTitle: "Persistences" 
weight: 60
no_list: true
exclude_from_list: true
---
---

### [JSON persistence](json_persistence)

This tutorial will help you understand how to create a JSON persistence component. It starts by explaining the pre-requisites. Then it continues with an explanation on how to create a JSON persistence object, save data to it, and extract stored data from it. In the end, it provides an example where all the explained methods are included.

### [Memory persistence](memory_persistence)

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!

### [MongoDB Basic](mongodb_persistence)

Another frequent choice of persistence is Pip.Service's MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database. The most basic implementation of this component is the MongoDbPersistence class defined in the MongoDb module. It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations.

### [MySQL persistence](mysql_persistence)

In this tutorial, we will see how to interact with a MySQL database in order to provide persistence to our code. First, we will see the main CRUD methods available in the three persistence components contained in the MySQL module. Then, we will see how to run SQL queries with these components. We will conclude with a summary of all the learned concepts.

### [PostgreSQL persistence](postgre_persistence)

In this tutorial, you will understand how to create persistence components for PostgreSQL databases. First, we will see the necessary prerequisites. Then, we will move to each of the three components available in Pip.Services for this purpose. Finally, we will summarize all the explained concepts.

### [SQL Server persistence](sqlserver_persistence)

This tutorial will help you understand how to create SQL Server persistence components using Pip.Services. It begins by explaining how to install the sqlserver module and create the data structure used in the tutorial's examples.
