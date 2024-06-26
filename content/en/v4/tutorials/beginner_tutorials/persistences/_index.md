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

This tutorial will guide you through creating a JSON persistence component. It begins by outlining the prerequisites. Then, it explains how to create a JSON persistence object, store data in it, and retrieve stored data. Finally, it includes an example that demonstrates the use of these methods.

### [Memory persistence](memory_persistence)

The Pip.Services Toolkit provides abstract implementations for developing persistent components, including MemoryPersistence. This component stores all data in memory, making it particularly useful for unit tests where cutting dependencies on external persistent storage is crucial. Although limited in production use, MemoryPersistence facilitates quick setup and efficient testing.

### [MySQL persistence](mysql_persistence)

In this tutorial, you will learn how to integrate a MySQL database using Pip.Services to introduce persistence into your code. Initially, you'll delve into the fundamental CRUD methods offered by the three persistence components within the MySQL module. Following this, you'll learn how to effectively execute SQL queries using these components. To conclude, the tutorial provides a summary of the main concepts.

### [PostgreSQL persistence](postgre_persistence)

In this tutorial, you will learn how to create persistence components for PostgreSQL databases using Pip.Services. You will begin by covering the necessary prerequisites. Then, you will explore each of the three components available in Pip.Services for this purpose. To wrap up, the tutorial offers a summary of the key concepts covered. 

### [SQL Server persistence](sqlserver_persistence)

This tutorial will guide you through creating SQL Server persistence components using Pip.Services. It starts with instructions on installing the sqlserver module and setting up the data structure for the tutorial examples. Next, it explains each of the three persistence classes available in the module: SqlServerPersistence, IdentifiableSqlServerPersistence, and IdentifiableJsonSqlServerPersistence. Finally, it concludes with a summary of the main concepts learned throughout the tutorial.

### [MongoDB Basic](mongodb_persistence)

This tutorial will guide you through creating persistence components for MongoDB. Specifically, you will learn how to use two key components: MongoDbPersistence and IdentifiableMongoDbPersistence. Each explanation will include practical examples to illustrate their usage effectively.

### [Cassandra](cassandra)
In this tutorial, you will learn how to interact with Cassandra, a NoSQL database, using the CassandraPersistence and IdentifiableCassandraPersistence components.
