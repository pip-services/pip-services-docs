---
type: docs
title: "Communication"
linkTitle: "Communication" 
weight: 50
no_list: true
exclude_from_list: true
---
---

### [Command set](command_set)
The CommandSet component enables us to organize a collection of commands and events that can be invoked and executed at a later time.

In this tutorial, you will learn how to create a CommandSet component, add commands and events to it, and perform operations such as executing or locating a specific command within a command set.

### [Commandable gRPC](commandable_grpc)
This tutorial will guide you through creating a commandable gRPC client and controller. First, you will learn the basics of these components. Then, you will create an example demonstrating how a commandable gRPC client communicates with a commandable gRPC controller. Finally, you will summarize the key concepts learned.

### [Commandable HTTP](commandable_http)


In this tutorial, you will learn how to create and use CommandableHttpControllers. This type of controller is characterized by containing a set of commands that can be called via the HTTP/REST protocol.

To explain its functionality, the tutorial begins by outlining the necessary prerequisites for working with this component. Then, it demonstrates how to create a command set and a controller that uses it. Finally, it describes how to include the controller in a ProcessContainer to complete the setup.

### [Connection utils](connection_utils)

In this tutorial, you will learn how to use a set of utilities offered by Pip.Services to simplify the handling of connections. We will start by explaining how to import these components. Next, we will cover their syntax and how to use them. Finally, we will explore an example that illustrates the practical application of some of these utilities.

### [Direct client](direct_client)

A direct client is a component that calls a service directly within the same memory space. It is typically used when multiple microservices are deployed in a single container (monolith system), allowing communication between them through direct calls. In Pip.Services, the DirectClient component is used to create this direct client.

### [gRPC](grpc)

In this tutorial, you will learn how to create a gRPC client and server using the Pip.Services' gRPC module. We will start with an explanation of how to install this module and provide a brief description of the example used. Next, we will demonstrate how to create a gRPC server and client. Finally, we will include a section with the complete code for this project.


### [REST Client](rest_client)

A REST client is a program used to communicate with a controller via the HTTP/REST protocol. Within Pip.Services, the RestClient component serves as a base for building REST clients.

In this tutorial, you will be introduced to the RestClient component. First, we will see how to create a REST controller using the RestController class. Then, we will learn how to create a REST client with a class that extends the RestClient component. Following this, we will understand how to use different HTTP methods to facilitate communication between the client and the controller. Finally, we will review the concepts covered in the tutorial.

### [REST Controller](rest_controller)

This tutorial aims to help you understand how to create REST controllers with Pip.Services. It starts by outlining the necessary prerequisites. Next, it explains how to create a simple REST controller using the RestController component, including configuration and execution steps. Finally, it demonstrates how to view the results in a web browser.

### [Swagger](swagger)

In this tutorial, you will learn how to generate Swagger documentation for a REST service. We will see three different cases. The first is a common REST service, which is documented via a YAML file containing a description of its methods. The second is a commandable REST service, which has a defined set of commands that is used to define the Swagger document. Finally, the last case considers a commandable REST component with a command set and a Swagger UI defined by a YAML file.. 
