---
type: docs
no_list: true
title: "Microservice configuration"
linkTitle: "Microservice configuration"
description: >-
     How microservices manage configurations.
---

### Key takeaways

### Introduction

This tutorial will explore the microservice configuration process. For this, we will first see an example that contains the main configuration aspects that most microservices have. Then, we will analyze how this process triggers and works. Finally, we will summarize what was learned.

### Example

The code below will be used to analyze how configurations work. It has two parts. The first contains three components: ComponentA1, ComponentA2, and ComponentB. The first two classes are basically the same except for their names. Both have ComponentB as a dependency. 

The second part contains the code used to package part 1 into a process container. This type of container acts as a system process and is based on the inversion of control pattern. Included in this part is a factory used by the container to create the components defined in part 1. 

Each of these features will be explained in detail in the analysis section.

#### Part 1: Components


#### Part 2: Container

### Analysis

#### Environment variables

#### Configuration file

#### Factory

#### References

### Wrapping up

In this tutorial, we have explored a basic microservice configuration process. We started with an example containing two code parts. The first presents three classes, one of them acting as a component dependency for the other two. The second part of the code creates a factory and a container, which is then run. 

Then, in the following section, we analyzed each of the steps included in the configuration process. We saw how the container selects variables from the environment, obtains information about the components to be created from a configuration file, and creates them via the use of factories. 

Finally, we learned that the program obtains information about dependent components from the setReferences() method and creates the components defined there.

The final result is a microservice, running inside a container, that uses environment variables to create certain components at runtime and references to create additional components as dependencies.

