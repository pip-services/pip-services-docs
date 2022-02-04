---
type: docs
no_list: true
title: "Configuring connections"
linkTitle: "Configuring connections"
weight: 10
description: >-
     How to configure connections using Pip.Services.
---

### Key takeaways
### Introduction

### CRUD operations

#### Create

##### a)	Using the constructor

##### b)	Using a tuple

##### c)	Using a string

##### d)	Using a ConfigParams object



#### Read



#### Update

There are two main ways to update the value of a parameter previously defined. The first is to use the set methods available for the most common parameters with the new value.

The second is to use the put() method from the StringValueMap class with the updated value as its input.

#### Delete

We can remove a parameter and its value from the ConnectionParams object via the remove() method inherited from StringValueMap. The following example shows how to do this:

#### Wrapping up

In this tutorial, we have learned how to use the ConnectionParams component. We saw how to perform different CRUD operations using this class’ methods and the methods inherited from ConfigParams and StringValueMap. 
