---
type: docs
no_list: true
title: "Discovery services"
linkTitle: "Discovery services"
weight: 10
description: >-
     How to create and manage a discovery service.
---

### Key takeaways

### Introduction

In this tutorial, you will learn how to create and operate a discovery service that stores connection parameters in memory. We will begin by explaining the necessary pre-requisites. Then, we will continue by showing how to create the service and add and extract connection parameters from it. We will finish with a comprehensive example that illustrates all the learned concepts.

### Pre-requisites

To create a discovery service, we can use the MemoryDiscovery class, which models a discovery service that stores connections in memory. To import this class, we can use the following code:

### Creating a discovery service

In order to create our discovery service, we need to create an instance of the MemoryDiscovery  class. Here, we have two options: we add one or more sets of connection parameters to the constructor through a config object

or we add them after instantiation via the configure() method.

### Adding connections

Once we have created our component, we can use the register() method to add connections to our discovery service. This method takes the correlationId, a key, and the connection parameters to be registered as inputs. The following example shows how to use this method.

### Resolving connections

We can obtain a connection with the resolveOne() method, which asks for the correlationId and the key identifying the connection parameters we are looking for.

Alternatively, we can use the resolveAll() method, which asks for the same inputs, but returns a list containing all the sets of connection parameters identified by a common key.

In this section, we have an example that illustrates the use of a memory discovery service, from creation to addition of parameters to resolving a connection. The code is as follows:

### Complete example

### Wrapping up

In this tutorial, we learned how to create a discovery service that stores connection parameters in memory. We also saw how to add a set of connection parameters and extract them from the component. We ended with a complete example that illustrated all the operations that can be performed on this component. 
