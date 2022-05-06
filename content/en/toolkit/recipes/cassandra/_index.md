---
type: docs
no_list: true
title: "Cassandra persistence"
linkTitle: "Cassandra"
weight: 10
description: >-
     How to persist data using a Cassandra database.
---

### Key takeaways

### Introduction

In this tutorial, you will learn how to interact with Cassandra. First, we will see how to install the Cassandra module. Then, we will see how to perform CRUD operations with the CassandraPersistence and IdentifiableCassandraPersistence components. Finally, in the wrapping up section, we will review the concepts learned.

### Cassandra persistence

Pip.Services contains the Cassandra module, which has several components that can be used to interact with Cassandra. In the following sections, we will learn two of them namely, CassandraPersistence and IdentifiableCassandraPersistence. As the names suggest, the main difference between them is the type of data objects handled. While the first component can be used with any type of data object, the second requires that the data object is identifiable (contains an id field).

#### General pre-requisites

#### Data object

#### CassandraPersistence

##### Pre-requisites

##### Component implementation

##### Connection

##### CRUD operations

###### Create

###### Read
 
**getPageByFilter()**

**getOneRandom()**

**getCountByFilter()**

###### Update


###### Delete

##### Final code

#### IdentifiableCassandraPersistence

##### Pre-requisites

**getOneById()**

###### Update

**update()**

**updatePartially()**

**set()**

###### Delete

**deleteById()**

**deleteByIds()**

##### Final code 

### Wrapping up

In this tutorial, we saw how to use the CassandraPersistence and IdentifiableCassandraPersistence components. The first accepts any type of data object, whereas the second requires that the data object is identifiable. 

We learned how to perform CRUD operations with both components. We also saw that as IdentifiableCassandraPersistence is a subclass of CassandraPersistance, it inherits all the methods of the former and adds several methods based on ids. We understood that many of the methods in the CassandraPersistence class are private, and thus require to be redefined in our custom component.

Finally, and for both components, we created a program that combines all the learned methods into one piece of code. 
