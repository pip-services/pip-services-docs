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

### Example

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

