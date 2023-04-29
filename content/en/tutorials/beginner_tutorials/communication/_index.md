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

The CommandSet component allows us to group a set of commands and events, which can be called and executed at a later stage. 

In this tutorial, you will learn how to create a CommandSet component, add commands and events to it, and perform some operations, such as executing or finding a specific command from a command set.

### [Commandable gRPC](commandable_grpc)

This tutorial will help you understand how to create a commandable gRPC client and service. First, we will learn the basics of these components. Then, we will create an example where a commandable gRPC client communicates with a commandable gRPC service. After the example, we will summarize the concepts learned.

### [Commandable HTTP](commandable_http)

In this tutorial, you will learn how to create and consume CommandableHttpServices. This type of service is characterized by containing a set of commands that can be called via the HTTP/REST protocol. 

In order to explain its functionality, this tutorial begins by explaining the necessary pre-requisites to work with this component. Then, it shows how to create a command set and a service that uses it. To complete the service, it describes how to include it in a ProcessContainer.

### [Communication utils](connection_utils)

In this tutorial, you will learn how to use a set of utilities offered by Pip.Services that can be used to simplify the handling of connections. We will start by explaining how to import these components. Then, we will see their syntax and how to use them. Finally, we will explore an example that illustrates the practical application of some of these utilities.

### [Direct client](direct_client)

A direct client is a component that calls a controller directly in the same memory space. In general, it is used when multiple microservices are deployed in a single container (monolith system) and communication between them can be done by direct calls. Within Pip.Services, the DirectClient component is used to create it. 

### [gRPC](grpc)

In this tutorial, you will learn how to create a gRPC client and server by using the Pip.Services' gRPC module. We will start with an explanation of how to install this module and a brief description of the example used. Next, we will see how to create a gRPC server and client. Lastly, we will have a section containing the complete code for this project.


### [REST Client](rest_client)

A REST client is a program used to communicate with a service via the HTTP/REST protocol. Within Pip.Services, the RestClient component can be used as a base to build REST clients.

In this tutorial, you will be introduced to the RestClient component. First, we will see how to create a REST service by using the RestService class. Then, we will learn how to create a REST client with a class that extends the RestClient component. Following this, we will understand how to use the different HTML methods to communicate between the client and the service. We will end by reviewing what we learned in the different sections.

### [REST Service](rest_service)

This tutorial will help you understand how REST services can be created with Pip.Services. It begins by explaining the necessary pre-requisites. Then, it proceeds to explain how to create a simple REST service using the RestService component, and how to configure and run it. It ends by showing the results on a browser.

### [Swagger](swagger)

In this tutorial, you will learn how to generate Swagger documentation for a REST service. We will see three different cases. The first is a common REST service, which is documented via a YAML file containing a description of its methods. The second is a commandable REST service, which has a defined set of commands that is used to define the Swagger document. Finally, the last case considers a commandable REST component with a command set and a Swagger UI defined by a YAML file. 