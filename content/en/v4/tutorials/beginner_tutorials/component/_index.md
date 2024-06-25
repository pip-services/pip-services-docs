---
type: docs
title: "Components"
linkTitle: "Components" 
weight: 40
no_list: true
exclude_from_list: true
---
---

### [Communication between components](component_communication)

When using Pip.Services, a good programming practice is to use an external entity to handle the communication between different components. In this tutorial, you will learn how to do this by using the References class.

### [Component Lifecycle](component_lifecycle)

A microservice is a set of loosely coupled components, each of which serves a specific purpose, such as logging events, reading records from a database, or connecting to a 3rd party service.
One of the roles of the microservice's container is to correctly initialize all internal components, each of which can have its own lifecycle. For example, loading its own configuration, running certain functional processes, and even waiting for results from other components.

### [Component References](component_references)

Developing systems out of loosely-coupled components significantly reduces complexity, improves testing, and increases developer productivity. The Pip.Services Toolkit offers a flexible and simple set of primitives for referencing components that is symmetrically implemented in all of the supported programming languages.

### [Creating a component](creating_a_component)

In this tutorial, we will learn how to create a component and how to assemble a service from it. We will start with a short description of a component's lifecycle and then we will create a component by defining step-by-step all the elements that compose its lifecycle. Finally, we will assemble a service from it through a container, run it, and see the results.  

### [Descriptors](descriptors)

This tutorial will help you understand what a descriptor is, how to create one, how to get its properties, how to check its completeness, how to convert it to a string, and how to compare it to other descriptors. Finally, it provides an example of its usage.

### [Factories](factories)
This tutorial will teach you how to create factories for custom components, and how to use Pip.Service’s default factories to create instances of components already included in the toolkit.

### [Reflection](reflection)
In this tutorial, you will learn how to use the Reflect package, which provides different classes that will allow you to develop code with introspection capacity.
