---
type: docs
no_list: true
title: "Configuring connections"
linkTitle: "Configuring connections"
weight: 10
description: >-
     How to configure connections using Pip.Services.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways


### Introduction

In this tutorial, you will learn how to configure connections with the ConnectionParams component and perform CRUD operations with them. First, we will see different ways to create connections, such as from a constructor, a tuple, a string, and a ConfigParams object. Then, we will see how to extract, modify and delete different fields in those connections.

### Pre-requisites

In order to use the ConnectionParams component, we must first import it. This can be done with the following command:

### CRUD operations

The functionality of a ConnectionParams component can be described as CRUD operations. The following sections explain each of them.

#### Create

There are several ways to create a ConnectionParams object, such as using a constructor, a tuple, a string and a ConfigParams object.

##### a)	Using the constructor

A ConnectionParams object can be created via its constructor in two different ways. The first is by creating an instance of the ConnectionParams class using a ConfigParams object containing the connection parameters and their values as input. The following example explains how to do this:

In the second approach, we instantiate this class and then we set the values of the most common parameters via their respective set methods. For example:

Or, we can add new parameters and their values using the put() method from the StringValueMap class.

##### b)	Using a tuple

In this case, we declare our parameters and their values in a tuple and use the fromTuples() method. The following example shows how to do this:

##### c)	Using a string

Similar to the previous one, here we use a string to define the parameters and their values and use the fromString() method. The syntax is of the string is: 

**parameterName = parameterValue**

where different parameters are separated by commas.

An example is:


##### d)	Using a ConfigParams object

In this case, we use a ConfigParams object to define the different parameters and their values. One important point to consider is that we need to use a connection section.

The syntax is 

**connection.parameterName**

And, an example of its usage is: 

Similar to the above, the manyFromConfig() method allows us to manage more than one set of connection parameters. To allow this, we define the different connection sets in a section named connections. The syntax is:

**connections.connectionName.parameterName**

As we can see in the next example, the ConfigParam object can also include other types of parameters, such as credentials. Once, instantiated, the ConnectionParams object only takes the parameters under the connections section and creates a list containing them and their values.


##### Adding sections

We can add different sections to our ConnectionParamter object by using the addSection() method, which takes the name of the new section and its components as inputs.

#### Read

Once our connection parameters have been defined, we can read them via the get methods. Pip.Services offers specific get methods for the most common parameters such as host and port. The examples below show how to use them:

As the ConnectionParams object has the form of a StringValueMap, we can also use the get(‘paramterName’) method, which can be used with any parameter.

Furthermore, we can get all the parameters and their values from a section by using the getSeccion() method. The following example illustrates how to obtain the values from  “sectionA”.

And, to get all the section names, we have the getSectionNames() method:

#### Update

There are two main ways to update the value of a parameter previously defined. The first is to use the set methods available for the most common parameters with the new value.

The second is to use the put() method from the StringValueMap class with the updated value as its input.

#### Delete

We can remove a parameter and its value from the ConnectionParams object via the remove() method inherited from StringValueMap. The following example shows how to do this:

#### Wrapping up

In this tutorial, we have learned how to use the ConnectionParams component. We saw how to perform different CRUD operations using this class’ methods and the methods inherited from ConfigParams and StringValueMap. 
