---
type: docs
no_list: true
title: "Google Cloud Platform"
linkTitle: "Google Cloud Platform"
description: >-
  How to use the toolkit's GCP containers and services.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>CloudFunctionService</td>
    <td>Abstract service that receives remote calls via RPC or REST protocols in the Google Function.</td>
  </tr>
  <tr>
    <td>CommandableCloudFunctionService</td>
    <td>Abstract service that receives remote calls via RPC or REST protocols in the Google Function and connects them to automatically generated actions for commands defined in ICommandable components.</td>
  </tr>
  <tr>
    <td>CloudFunction</td>
    <td>Abstract Google Function that acts as a container. Instantiates and runs components, and exposes them via an external entry point.</td>
  </tr>
  <tr>
    <td>CommandableCloudFunction</td>
    <td>Abstract Google Function that acts as a container. Instantiates and runs components, and exposes them via an external entry point. This container is a subclass of the CloudFunction class with added functionality that automatically generates actions for commands defined in ICommandable components.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will learn how to create a microservice and package it in a Google Cloud Platform (GCP) container. The content is divided into five sections:

1. GCP containers and services: A basic explanation of the different containers and services available in the GCP module.
2. Basic microservices: An explanation of how to build basic microservices using GCP containers and services.
3. Combining basic microservices: An explanation of how to further expand the basic microservice examples, providing solutions for complex business scenarios.
4. Testing: An explanation of how to test GCP-based microservices.
5. Wrapping up: A summary of the learned concepts.

Upon completion of this tutorial, you will gain an understanding of the various possibilities that the containers and services available in the GCP module offer for microservice design.

### GCP containers and services

The GCP module includes containers and services that conform to Google Cloud's REST protocol. They are:

#### Containers

Containers are used to run microservices within a specific environment. They contain all the files, libraries and configuration files necessary for the microservice's execution.


One such environment is Google Cloud Functions, which is a serverless execution environment for building and connecting cloud services.


The Pip.Services toolkit offers two types of containers for this environment, namely, CloudFunction and CommandableCloudFunction. The second is a subclass of the first and provides additional functionality that automatically generates actions for commands defined in ICommandable components.
The following diagram shows the relations between these components:

![figure 1](./figure1.svg)

#### Services

Additionally, the toolkit offers two types of services: the CloudFunctionService and the CommandableCloudFunctionService. Both are used to connect microservices to external resources. The second service is a subclass of the first and adds additional functionality that automatically generates actions for commands defined in ICommandable components. The following diagram shows their relation:

![figure 2](./figure2.svg)

### Basic microservices

A basic GCP microservice contains a controller, which can expose commands directly or be made to include a service layer. Additionally, actions can be registered in the container/service itself or, alternatively, a CommandSet component can be added to the microservice. This part of the tutorial explains these four basic cases.

#### Microservice doesn’t require a service layer

The following sections explain how to create microservices that expose commands directly, without using a service layer, and how to package them into a container. For this, the toolkit offers two options: either registering the actions in the container, or using a CommandSet component. In the examples below, actions are represented by the greetings() method, which, given a name, returns "Hello, \<name\>!".

#### Registering actions in the container

In this case, the microservice basically consists of a controller packaged in a container. The microservice has the following characteristics:

1. It registers the actions in the container via the register() method.
2. The business logic of the actions is defined in the controller. 
3. The container uses a factory to create the controller.

There are two ways to create an instance of the controller. The first is by adding its descriptor to the configuration file so that the container can build it automatically via the factory:

![figure 3](./figure3.svg)

And the second is by registering the controller as a dependency for the container:

![figure 4](./figure4.svg)

When using a configuration file, the container looks like this:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
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

And the configuration file includes the controller’s descriptor:

```yml
# Controller 
- descriptor: "mygroup:controller:default:controller:1.0"
```

When adding the controller as a dependency, the container looks like this:

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}}
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

In both cases, implementation of the logic required from the actions will be stored in the controller:

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}}
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

Which is then registered in the factory:

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}}
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

Finally, after grouping everything together, the resulting code is as follows:

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_go.md" >}}
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

#### Using a CommandSet component

Similar to the previous case, the microservice will still contain just a controller packaged in a container, but will use a CommandSet component to define the actions instead. The main characteristics of this approach are:

1. The actions are defined in the command set.
2. The controller links to the CommandSet via the getCommandSet() method.
3. The business logic of the actions is still defined in the controller.
4. The container uses a factory to create the controller.

As in the previous case, the container can create the controller via a configuration file: 

![figure 5](./figure5.svg)

or by adding it as a dependency:

![figure 6](./figure6.svg)

In both cases, the container is of the CommandableCloudFunction type, which allows it to utilize the Commandable pattern.

When using a configuration file to create the controller, the container looks like this:


{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_go.md" >}}
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

And, when adding the controller as a dependency, it looks like this:

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
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

In both cases, the controller is registered in the factory:

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}}
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

Since we’re going to use the Commandable pattern, the controller needs to implement the ICommandable interface, which declares the getCommandSet method. Additionally, the controller must include the implementation of the actions’ business logic. Such a controller’s code will look like this:

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

The CommandSet in this case would be:

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

After combining everything, the final code is:

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


#### Microservice requires a service layer

This section expands on the previous two cases by adding a service layer to expose the actions contained in the microservice. As a result, actions can now be registered in the service (instead of the container) or defined in a CommandSet component. As in the previous examples, actions are represented by the `greetings()` method.

#### Registering actions in the service

In this case, the microservice has a service and a controller, both of which get packaged into the container. As such, it has the following characteristics:

1. Actions are registered in the service.
2. The business logic of the actions is defined in the controller.
3. The container uses a factory to create the controller and the service.

Similar to the previous examples, the service and the controller can be instantiated by the container via a factory that obtains information from a configuration file:

![figure 7](./figure7.svg)

or by defining them as the container’s dependencies:

![figure 8](./figure8.svg)

In the first case, the container looks like this:

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

with the configuration file containing the descriptors of the service and controller:

```yml
# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"  
# Controller
- descriptor: "mygroup:controller:default:controller:1.0"
# Service 
- descriptor: "mygroup:service:gcp-function:function:1.0"
```

And, in the second case, the container adds the dependencies via the dependency resolver:

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

In either case, both components must be registered in the factory:

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

The actions are registered in the service, which also adds the controller as a dependency:

{{{< tabsection >}}
  {{< include "./__code15_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And the actions’ business logic is defined in the controller:

{{< tabsection >}}
  {{< include "./__code16_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

After grouping everything together, the final code is:

{{< tabsection >}}
  {{< include "./__code17_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Using a CommandSet component

In this case, a CommandSet component containing the definitions of the actions is added to the structure of the microservice from the previous example. The characteristics of such a microservice are:

1. The service is of the CommandableCloudService type, which has the added functionality of automatically generating the necessary operations for commands defined in ICommandable components. 
2. The controller links to the CommandSet via the getCommandSet() method.
3. The required business logic of the actions is still defined in the controller.
4. The container uses a factory to create the service and the controller. 

As in the previous cases, the controller and the service can be instantiated by the container via a factory that obtains the necessary information from a configuration file:

![figure 9](./figure9.svg)

or by defining them as container dependencies:

![figure 10](./figure10.svg)

In the first case, the container looks like this:

{{< tabsection >}}
  {{< include "./__code18_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And loads a configuration file that includes the descriptors of the service and the controller:

```yml
# Controller
- descriptor: "mygroup:controller:default:controller:1.0"
# Service 
- descriptor: "mygroup:service:commandable-gcp-function:function:1.0"
```

When considering the service and controller as dependencies of the container, the code is:

{{< tabsection >}}
  {{< include "./__code19_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

In both cases, the command set is:

{{< tabsection >}}
  {{< include "./__code20_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which connects to the controller via the `getCommandSet()` method. Thus, the controller, which contains the business logic of the actions, looks like this:

{{< tabsection >}}
  {{< include "./__code21_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

In this case, the service is of the CommandableCloudService type, because this class contains the necessary functionality to work with the command set. 

{{< tabsection >}}
  {{< include "./__code22_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


And the factory registers both the controller and the service:

{{< tabsection >}}
  {{< include "./__code23_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Finally, after grouping everything together, we obtain the following microservice:

{{< tabsection >}}
  {{< include "./__code24_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Combining the basic examples

The former four cases can be combined and expanded in many different ways, providing solutions for complex business scenarios.

The next sections will examine two of such examples. The first considers a microservice with two controllers and actions registered in the container. The second adds a service, links it to one of the controllers, registers some of the actions in the service, and then registers the rest in the container.

#### Example 1

This example extends the first of the previously explained cases by adding a second controller. Its main characteristics are:

1. The container registers two different actions, namely, greetings1() and greetings2().
2. Each controller contains the business logic for only one of these actions.
3. The controllers are added as dependencies of the container.

The following diagram and code show what this example looks like:


![figure 11](./figure11.svg)


{{< tabsection >}}
  {{< include "./__code25_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Example 2

This example extends the previous one by adding a service layer linked to one of the controllers. As such, it combines two basic cases: a microservice without a service layer and a microservice with a service layer. It has the following characteristics:

1. Actions linked to the first controller are registered in the service.
2. Actions linked to the second controller are registered in the container.
3. The controllers and the service are created via the factory using information stored in the configuration file.

The following class diagram and code show what this example looks like:

![figure 12](./figure12.svg)

{{< tabsection >}}
  {{< include "./__code26_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Where the configuration file is:

```yml
# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

# Service
- descriptor: "mygroup:service:gcp-function:*:1.0"

# Controller 1
- descriptor: "mygroup:controller:default:controller1:1.0"

# Controller 2
- descriptor: "mygroup:controller:default:controller2:1.0"
```

### Testing

After running an application with the help of a tool for example like [Functions Framework for Python](https://github.com/GoogleCloudPlatform/functions-framework-python), the results can be seen by sending a test request to the container via HTTP. The following steps explain how this can be done:

#### Step 1: Create an instance of the container

`function_service = MyCloudFunction()`

#### Step 2: Create an instance of the handler

`handler = function_service.get_handler()`

#### Step 3: Run the tool

To see the results on a local machine run:

```bash
functions-framework --target handler --signature-type http --port 8080 --source program_name.py
```

where program_name.py is the name of the file containing the GCP function service.


#### Step 4: Call an action.

A specific action, such as ‘greetings’ in our previous examples, can be called by running a command similar to the following one:

```bash
curl -d '{"cmd": ""myservice.greetings1", "name": "Bob"}' -H "Content-Type: application/json" -X POST http://localhost:8080
```

After running the previous cURL command, the result will be displayed as part of the response that is received. 

![figure 13](./figure13.png)

Alternatively, a REST Client can be used to achieve the same result:

![figure 14](./figure14.png)

### Wrapping up

In this tutorial, we learned how to create a microservice, packaged in a Google Cloud Platform container. We saw four different scenarios with code examples. The following table summarizes these cases:

<table class="full-width-table">
  <tr>
    <th></th>
    <th>Without a service layer</th>
    <th>With a service layer</th>
  </tr>
  <tr>
    <td>Manually registering the action</td>
    <td>
      <ul>
        <li>Actions are registered in the container.</li>
        <li>The controller is created via a factory using information from a configuration file or by defining it as the container’s dependency.</li>
      </ul>
    </td>
    <td>
    <ul>
      <li>Actions are registered in the service.</li>
      <li>The controller and service are created via a factory using information from a configuration file or by defining them as the container’s dependencies.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Using a CommandSet component</td>
    <td>
      <ul>
        <li>A CommandSet component defines the actions.</li>
        <li>The controller adds the <code>getCommandSet()</code> method and implements the ICommandable interface.</li>
        <li>The business logic is added to the actions in the controller.</li>
        <li>A commandable version of the container is used.</li>
        <li>The controller is created via a factory using information from a configuration file or by defining it as the container’s dependency.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>A CommandSet component defines the actions.</li>
        <li>The controller adds the <code>getCommandSet()</code> method and implements the ICommandable interface.</li>
        <li>The business logic is added to the actions in the controller.</li>
        <li>A commandable version of the service is used.</li>
        <li>The controller and service are created via a factory using information from a configuration file or by defining them as the container’s dependencies.</li>
      </ul>
    </td>
  </tr>
</table>
