---
type: docs
no_list: true
title: "Direct client"
linkTitle: "Direct client"
description: >-
     How to use the DirectClient component.
---

### Key takeaways

### Introduction

A direct client is a component that calls a controller directly in the same memory space. In general, it is used when multiple microservices are deployed in a single container (monolith system) and communication between them can be done by direct calls. Within Pip.Services, the DirectClient component is used to create it. 

This tutorial will help you understand how this class works. First, we will see how to create a simple controller that contains a method that prints “Hello world”. Then, we will learn how to create a direct client that connects to this controller and allows us to use the method previously defined in our controller. Finally, we will run our program and see the results.

### The controller

Our controller class is very simple and, for the purpose of this example, has a function named “my_method”, which prints “Hello world”. The following code shows how this class is defined and how to create an instance of it.

### The direct client

Now that we have our controller, we can construct a direct client that communicates with it and calls “my_method”.

To achieve this, we do the following process. First, we create a reference to the controller via two components: References and DependencyResolver. This last class is used to give a name to our controller’s reference and is added in the _init_() method. Then, in the setReferences() method, we receive a References object, which is used to associate the client to the controller. Lastly, we create a method that invokes “my_method” from the controller. Once our class is defined, we create an instance of it. The following code shows how to do this.


### Reference setting

### Calling "my_method"

### Final code

### Wrapping up
