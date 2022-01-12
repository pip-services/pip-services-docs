---
type: docs
no_list: true
title: "gRPC"
linkTitle: "gRPC"
weight: 10
description: >-
     How to create a server and a client, and communicate between them.
---

### Key takeaways

### Introduction

In this tutorial, you will learn how to create a gRPC client and server by using the Pip.Services’ gRPC module. We will start with an explanation of how to install this module and a brief description of the example used. Next, we will see how to create a gRPC server and client. Lastly, we will have a section containing the complete code for this project.

### Pre-requisites

In order to create a gRPC server and client, we need to install the module first. The command to do this is:

### A brief overview of the example

Our example consists of two programs: a service and a client, which communicate between them via the gRPC protocol. The process is as follows

1.	The client creates a request to add two numbers that is translated into a proto request via the gRPC stub and sent to the service.
2.	The service receives these two numbers, translates the proto request via the gRPC server, and calls a function named sum. This function is available from the Summator program.
3.	Once the result is on the server, it is translated into a proto response and sent to the client.
4.	The client receives the result, and translates and prints it.

The figure below summarizes this procedure. 


In order to communicate via the gRPC protocol, the client uses a gRPC stub and the server a gRPC server. Both are constructed based on the summator2.proto file, which contains descriptions of the input parameters, and the function used. These descriptions are transformed into two coded files via the protoc compiler. 

These coded files are written in the languages of the service and client respectively. Their names are: summator2_pb2 and summator_pb2_grpc. Together, they contain all the necessary elements to create the gRPC server and the gRPC client.

### Proto file

The proto file describes the communication contract between the client and the server. It is written in proto3, a language created by Google to describe gRPC communications. 

#### Syntax

#### Compilation

### Server

We create a server that communicates to clients via the gRPC protocol and connects to a library of functions, which in this example is represented by the Summator file. 

The following sections explain these features in detail.

#### Summator file

#### gRPC service

##### Pre-requisites

##### Component generation

##### Running the service

### Client

The next step is to create a client, which will be used to call the sum() method available from the service, and obtain the corresponding result.

#### Pre-requisites

##### GrpcClient

##### Proto compiler generated classes

#### Component generation

#### Adding two numbers

### Final code

This section presents the complete code for the example, namely the server and client’s code, the proto file, the two compiler-generated files, and the library file.

#### Server

#### Client

#### Proto file

#### Proto compiler generated files

##### summator2_pb2

##### summator2_pb2_grpc

#### Library

### Wrapping up

In this tutorial, we have learned how to create a gRPC server and client. We also saw how to create a proto file and generate the two gRPC files via the protoc compiler. Finally, we understood how to run the server and the client and obtain a result from a call to the sum() method.
