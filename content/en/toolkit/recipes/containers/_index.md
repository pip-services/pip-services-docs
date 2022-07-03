---
type: docs
no_list: true
title: "Containers"
linkTitle: "Containers"
description: >-
     How to create a ProcessContainer.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

### Introduction

This tutorial will help you understand how to create a ProcessContainer that manages the life cycle of a custom component. First, we will see a brief description of the component and how to import it. Then, we will create a custom component, a factory to create it, and a process container. Finally, we will run the container and summarize all the learned concepts.

### The ProcessContainer container

[Docker](https://www.docker.com/resources/what-container/) defines a container as 

> “a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.”

Pip.Services offers the ProcessContainer, which allows us to run our contained code as a system process.

In this tutorial, we will create a ProcessContainer component that packages a custom component, run it, and check the results.


### Wrapping up

In this tutorial, we have learned how to create a ProcessContainer. This component allows us to run our code as a system process. 

First, we created a custom component that is openable and configurable. Then, we created a factory to create this component via the container and a configuration file used by the container to locate the different components. Finally, we created the container, run it, and obtained an output on our console showing the creation, configuration and opening of our component.

The example in this tutorial used a custom component. The same procedure applies to the containerization of any other component or set of components.

