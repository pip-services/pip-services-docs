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

#### Pre-requisites

In order to use the ProcessContainer component, we need to import it first. This can be done with the following command:

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Creating a component

Now, we create a component that will operate in a ProcessContainer. In our example, this is a mock component, that only prints a message once an operation is called. Moreover, to see how the container manages the lifecycle of this component, we want this class to be openable and configurable. An example of what this class looks like is:

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Creating a factory

The next step is to create a factory for our component. For this, we create a class that extends the Factory class and registers our previously defined custom component. The following code shows how to do this:

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Configuration file

Once our container and factory are ready, we create a configuration file that will be used by the ProcessContainer to locate the component. As the ProcessContainer class offers the possibility of using a logger, we also add a reference to it. In this manner, we will be able to see the logs on our console. The following code explains how to do this:

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Creating a ProcessContainer

The final step is to create the ProcessContainer. To do this, we create a class that extends the ProcessContainer component. In it, we add our previously created factory and specify the path to our configuration file (The default path is ./config/config.yml). The following code shows how to do this:

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Running the container

Now that our code is ready, we can run our container. This is done via its run() method. For example, in the code below, we create an instance of our container and call this method.

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

As a result, we get the following output on our console:

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Final code

Finally, we merge the code from the previous sections into one program:

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have learned how to create a ProcessContainer. This component allows us to run our code as a system process. 

First, we created a custom component that is openable and configurable. Then, we created a factory to create this component via the container and a configuration file used by the container to locate the different components. Finally, we created the container, run it, and obtained an output on our console showing the creation, configuration and opening of our component.

The example in this tutorial used a custom component. The same procedure applies to the containerization of any other component or set of components.

