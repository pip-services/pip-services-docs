---
title: "Configuring credentials"
linkTitle: "Configuring credentials"
weight: 10
description: >-
     How to configure credentials using Pip.Services.
---

### Key takeaways

### Introduction

### Pre-requisites

### CRUD operations
Once the component has been imported, we can do different CRUD operations by using the methods of the class and those inherited from the parent classes (ConfigParams and StringValueMap).
#### Create
Pip.Services offers several ways to create a CredentialParams object. Each of them is explained in the following sections.
##### a) Using the constructor
One method used to create a CredentialParams object is via its constructor. This can be done in two different manners. The first is by inputting a ConfigParams object containing the credential parameters and their values. The second consists of creating a CredentialParams object and using the set methods available for the most common credentials such as username and password, or the put() method from its parent class. The following examples show how to do this.
##### b) Using tuples
We can also define our credential parameters in the form of a tuple. For example:
##### c) Using a string
Similar to the previous option, we can also use a string to define our credential parameters. The syntax is: 

**parameter_name : parameter_value**

An example of this approach is:

##### d) Using a ConfigParams object
##### e) Using the manyFromConfig() method
##### Adding a section
We can add a section by using the addSection() method inherited from the ConfigParams class. This method accepts the name of the section and a ConfigParams object containing the fields of the section and their values as inputs.  The following example shows how to do this:
#### Read

To extract the values of the different credential parameters, we can use the get methods available for the most common credential parameters such as username, password, and access key. The following examples show how to use them:

Additionally, we can use the get method, which takes the name of the credential parameter as its input. 
#### Update

There are several ways to update a parameter’s value. One of them is to use the set method for the parameter with the new value as input. For example:

will reset the value of the password to ‘password2’.
Another way is to use the put() method, which asks for the name of the parameter and its new value as inputs:

Or, to use the setAsObject() method, which also takes the name of the credential parameter and its value as inputs.

Finally, we can use the override() method, which returns a new instance of CredentialParams with the old and updated values. The following example explains how to use it:

#### Delete

To delete a credential parameter from a CredentialParams object, we can use the remove() method, which takes the parameter’s name as input. This example explains how to use it:

### Wrapping up

In this tutorial, we have learned how to create CredentialParams components and manage them by extracting and updating the stored values of the credentials, and deleting their parameters.
