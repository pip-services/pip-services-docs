---
type: docs
no_list: true
title: "Commandable gRPC"
linkTitle: "Commandable gRPC"
description: >-
     How to create a commandable gRPC client and service.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>CommandSet</td>
    <td>Component that contains a set of commands and events supported by a commandable object.</td>
  </tr>
  <tr>
    <td>CommandableGrpcService</td>
    <td>Service that receives commands via the gRPC protocol.</td>
  </tr>
  <tr>
    <td>CommandableGrpcClient</td>
    <td>Client that calls a commandable gRPC service.</td>
  </tr>
</table>

### Introduction

This tutorial will help you understand how to create a commandable gRPC client and service. First, we will learn the basics of these components. Then, we will create an example where a commandable gRPC client communicates with a commandable gRPC service. After the example, we will summarize the concepts learned.

### Commandable gRPC basics

gRPC is an open-source RPC framework based on  HTTP/2 and originally created by Google. Pip.Services implements it in the gRPC module. The two main components in this module are CommandableGrpcService and CommandableGrprcClient. 

The CommandableGrpcService class describes a service that receives commands via the gRPC protocol. These commands are then linked to commands defined in a CommandSet component.     

The CommandableGrpcClient class is used to create clients that call a CommandbleGrpcService.  

### Commandable pattern

The example in this tutorial is structured according to the Commandable pattern. This pattern considers a CommandSet component, where all commands are registered. It also uses a controller that links to this command set and defines the specific aspects of each command.

The main advantage that this pattern offers is allowing for the use of a defined command set by commandable components using different communication methods – such as gRPC, HTTP, Azure, etc. - where the specifics for each case are declared in the controller and the common aspects in the CommandSet class.

![figure 1](./figure1.svg)

### Example

To learn how to create a commandable gRPC client and service, we will build an example where a service uses a command set containing CRUD operations that are applied to data objects.

#### Project structure

To organize this example, we use the following directory structure: First, we have a directory named "clients" that contains all the files related to the client. 
Second, our service is organized into three layers namely, data, business logic and service layers. 

The data layer is represented in the "data" directory and contains the files that define the data structure used in this example. The business logic layer contains the controller and command set, and the corresponding files are stored in the "logic" directory. And, the "services" directory contains the commandable gRPC service. 

Three additional files in this project are the container used to wrap the application and stored in the "containers" directory; the "main" program, which is the application starter; and the client_creator, which is used to create an instance of the client and call the CRUD methods.  

![figure 2](./figure2.png)

#### Pre-requisites

In order to create the CommandableGrpcService, we need to import this class first. The following code shows how to do this:

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

Similarly, we need to import the CommandableGrpcClient:

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

#### Data structure

The next thing that we need to do is to create a class representing the data to be used in the example. The code below shows the MyData class, which defines the data structure of an identifiable data object containing a key and a content field. Additionally, we define a toString() method, which transforms the data object into a dictionary.

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

We also need to create a schema for this data class, which will be used by the CommandSet component:

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

And a factory, which will be used by the container:

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

#### Command set

Now, we need to create a command set component. We do this by extending the CommandSet class and defining our CRUD commands. 

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

#### Controller

Next, we create a controller to manage the logic of our example. This controller extends an interface where we declare the CRUD methods used. It also links to our command set from where it obtains the collection of commands used and to the gRPC service that receives data from the client. For each of the commands defined in the CommandSet, it defines a method with the operations that are particular to the considered commandable class. The code below shows the controller and its interface:

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

#### Service

Next, we define the service that provides an endpoint to our application. The following code shows what this service should look like:

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
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Container

To run our service, we define a container that calls the data factory previously defined and the DefaultGrpcFactory component. These classes will create our data objects and gRPC service respectively.

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
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Configuration

Our next step is to create a config file that contains information about our components and can be used by our container to find them. In this example, we don't specify the _config_path variable in the container but we use its default value ("./config/config.yml"). The code below shows the content of this file:

```yml
---
# Container descriptor
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "mydata"
  description: "MyData microservice"

# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

# Controller
- descriptor: "service-mydata:controller:default:default:1.0"

# Common GRPC endpoint
- descriptor: "pip-services:endpoint:grpc:default:1.0"
  connection:
    protocol: "http"
    host: "0.0.0.0"
    port: 8090

# Commandable GRPC endpoint version 1.0
- descriptor: "service-mydata:service:commandable-grpc:default:1.0"

```

#### Proto files

When using the commandable gRPC classes, we don't need to worry about the proto files. This is because these classes rely on a universal proto file defined in the gRPC module that is automatically called by them. 

#### Client

After defining our service, we need to create a client that calls its methods. For this, we create an interface that declares the used CRUD methods. Then, we construct a class that calls this interface and defines the inherited methods. The code below shows both programs:

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
  {{< include "./__code11_python.md" >}}
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
  Not available  
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

#### Running the application

Now, we start the service. To do this, we run the following code:

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
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which, after execution, produces the following output:

![figure 3](./figure3.png)

Once our service is running, we run a program that creates an instance of the client and instances of the MyData class, and calls the CRUD operations available from the service. The following code shows how to do this:

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
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which, after running will produce the following output from our service:

![figure 4](./figure4.png)

### Wrapping up

In this tutorial, we have learned how to create a simple system that includes a command set, together with a service and a client that communicate via the gRPC protocol. In order to do this, we created a system that contains a CommandSet, a CommandableGrpcService and a CommandableGrpcClient. Then, we encapsulated our service in a container and created a program that calls the different CRUD methods available from the command set.
