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

### Introduction

This tutorial will help you understand how to create a commandable gRPC client and service. First, we will learn the basics of these components. Then, we will create an example where a commandable gRPC client communicates with a commandable gRPC service. After the example, we will summarize the concepts learned.

### Commandable gRPC basics

gRPC is an open-source RPC framework based on  HTTP/2 and originally created by Google. Pip.Services implements it in the gRPC module. The two main components in this module are CommandableGrpcService and CommandableGrprcClient. 

The CommandableGrpcService class describes a service that receives commands via the gRPC protocol. These commands are then linked to commands defined in a CommandSet component.     

The CommandableGrpcClient class is used to create clients that call a CommandbleGrpcService.
Additionally, when using these two components, we need to define a set of commands. For this, we use the CommandSet class.     

### Commandable pattern

The example in this tutorial is structured according to the Commandable pattern. This pattern considers a CommandSet component, where all commands are registered. It also considers a controller that links to this command set and defines the specific aspects of each command.

The main advantage that this pattern offers is allowing the use of a defined command set by commandable components using different communication methods – such as gRPC, HTTP, Azure, etc. - where the specifics for each case are declared in the controller and the common aspects in the CommandSet class.

### Example

To learn how to create a commandable gRPC client and service, we will build an example where a service uses a commandable set containing CRUD operations that are applied to data objects.

#### Project structure

#### Pre-requisites

#### Data structure

#### Command set

#### Controller

#### Service

#### Container

#### Configuration

#### Proto files

#### Client

#### Running the application


### Wrapping up

In this tutorial, we have learned how to create a simple system that includes a command set, together with a service and a client that communicate via the gRPC protocol. In order to do this, we created a system that contains a CommandSet, a CommandableGrpcService and a CommandableGrpcClient. Then, we encapsulated our service in a container and created a program that calls the different CRUD methods available from the command set.
