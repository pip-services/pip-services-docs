---
type: docs
no_list: true
title: "gRPC"
linkTitle: "gRPC"
description: >-
     How to create a server and a client, and communicate between them.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways
<table class="full-width-table">
  <tr>
    <td>GrpcService </td>
    <td>gRPC service component.</td>
  </tr>
  <tr>
    <td>GrpcClient</td>
    <td>gRPC client component.</td>
  </tr>
  <tr>
    <td>summator.proto</td>
    <td>Proto file containing messages and services.</td>
  </tr>
  <tr>
    <td>Protoc</td>
    <td>Proto file compiler.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will learn how to create a gRPC client and server by using the Pip.Services' gRPC module. We will start with an explanation of how to install this module and a brief description of the example used. Next, we will see how to create a gRPC server and client. Lastly, we will have a section containing the complete code for this project.

### Pre-requisites

In order to create a gRPC server and client, we need to install the grpc module first. The command to do this is:

{{< tabsection >}}
  {{< include "./__code0_node.md" >}}
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

### A brief overview of the example

Our example consists of two programs: a service and a client, which communicate between them via the gRPC protocol. The process is as follows

1.	The client creates a request to add two numbers that is translated into a proto request via the gRPC stub and sent to the service.
2.	The service receives these two numbers, translates the proto request via the gRPC server, and calls a function named sum. This function is available from the Summator program.
3.	Once the result is on the server, it is translated into a proto response and sent to the client.
4.	The client receives the result, and translates and prints it.

The figure below summarizes this procedure. 

![figure 1](./figure1.svg)

In order to communicate via the gRPC protocol, the client uses a gRPC stub and the service a gRPC server. Both are constructed based on the summator2.proto file, which contains descriptions of the input parameters, and the function used. These descriptions are transformed into two coded files via the protoc compiler. 

These coded files are written in the languages of the service and client respectively. Their names are: summator2_pb2 and summator_pb2_grpc. Together, they contain all the necessary elements to create the gRPC server and the gRPC client.

### Proto file

The proto file describes the communication contract between the client and the server. It is written in [proto3](https://developers.google.com/protocol-buffers/docs/proto3), a language created by Google to describe gRPC communications. 

#### Syntax

Our proto file will contain the following elements:

1.	Syntax: A command indicating that we are using proto3
2.	Number1: A message item describing the input to our function. In our case, we will define both values as floats.
3.	Number2: A message item describing the value returned by our method. In this example, we return the sum of the inputs as a float value.
4.	Summator: A service item describing our method.

The figure below summarizes this description.

![figure 2](./figure2.png)

#### Compilation

A proto file can be compiled into files in different languages, such as Python, C++, Ruby, C#, Go, and Java. This is done by running the protocol buffer compiler protoc on the .proto file. 

The compiler generates two files per language with the information on data types, stub and server. 

In our case, both client and service are written in the same language. Thus, we generate a common set of files. Our command is:

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
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
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}



{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
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
  {{< include "./__code22_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
  
### Server

We create a server that communicates to clients via the gRPC protocol and connects to a library of functions, which in this example is represented by the Summator file. 

The following sections explain these features in detail.

#### Summator file

In our example, we call a function named sum, which is available via the summator file. This function adds two given numbers and returns the result. Its code is as follows:

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
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

#### gRPC service

This is the component that communicates with the library of functions and sends the results to clients after receiving their requests.

##### Pre-requisites

###### GrpcService

First, we need to import the GrpcService class from the gRPC module. We can do this with the following command:

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
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

###### Proto compiler generated classes

We also need to import the two files previously generated by the protoc compiler.

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
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

###### Library of functions

And the library with the function available from the server.

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
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



{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
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


##### Component generation

Now that we have imported all the necessary elements, we can create our gRPC service, which is a subclass of the GrpcService class. In it, we need to define the method that we are using via the _register_method() method. The following code shows how to do this.

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
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

Next, we create an instance of the gRPC service and configure it with the connection parameters.

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
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


##### Running the service

Once we have our service ready, we launch it via the open() method. 

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
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

Our gRPC service is now listening from our computer (port 50051) and waiting for a client to send a request.

### Client

The next step is to create a client, which will be used to call the sum() method available from the service, and obtain the corresponding result.

#### Pre-requisites

##### GrpcClient

In order to use this component, we need to import it first. The following command shows how to do this:

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
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


##### Proto compiler generated classes

We also need to import the two files previously generated by the protoc compiler. 

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}
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


#### Component generation

Once we have imported all the necessary files, we create a subclass of GrpcClient. In it, we define the get_data method, which calls the Sum method and returns the received result. The code is as follows:

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
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


After defining our gRCP client, we create an instance of it and use the configure() method to define the connection parameters. In our example, we connect to a server using our machine via the default port 50051.

{{< tabsection >}}
  {{< include "./__code15_node.md" >}}
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

Finally, we connect to the server via the open() method.

{{< tabsection >}}
  {{< include "./__code16_node.md" >}}
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


#### Consuming the service

The next step is to call the get_data() method and obtain the result. The following example shows how to use it to add five and three, which returns eight.

{{< tabsection >}}
  {{< include "./__code17_node.md" >}}
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
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Final code

This section presents the complete code for the example, namely the server and client's code, the proto file, the two compiler-generated files, and the library file.

#### Server

The code for the server is:

{{< tabsection >}}
  {{< include "./__code18_node.md" >}}
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
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Client

The code for the client is:

{{< tabsection >}}
  {{< include "./__code19_node.md" >}}
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
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


#### Proto file

Our proto file looks like this:

```proto

syntax = "proto3";

option go_package = "./main";

message Number1 {
    float value1 = 1;
    float value2 = 2;
}

message Number2 {
    float value = 1;
}

service Summator {
    rpc sum(Number1) returns (Number2) {}
}

```

#### Proto compiler generated files

The files generated by the protoc compiler are:

{{< tabsection >}}
  {{< markdownify >}}##### summator_pb.js{{< /markdownify >}}

  {{< collapse >}}
    {{< include "./__code20_node.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< markdownify >}}##### Summator.cs{{< /markdownify >}}

  {{< collapse >}}
  Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< markdownify >}}##### summator.pb.go{{< /markdownify >}}

  {{< collapse >}}
  Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
{{< markdownify >}}##### summator.pb.dart{{< /markdownify >}}

    {{< collapse >}}
  Not available 
    {{< /collapse >}}

{{< markdownify >}}##### summator.pbenum.dart{{< /markdownify >}}
    {{< collapse >}}
  Not available 
    {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< markdownify >}}##### summator2_pb2.py{{< /markdownify >}}

  {{< collapse >}}
  {{< include "./__code18_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}




{{< tabsection >}}
  {{< markdownify >}}##### summator_grpc_pb.js{{< /markdownify >}}

  {{< collapse >}}
    {{< include "./__code21_node.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< markdownify >}}##### SummatorGrpc.cs{{< /markdownify >}}

  {{< collapse >}}
  Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< markdownify >}}##### summator_grpc.pb.go{{< /markdownify >}}

  {{< collapse >}}
  Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< markdownify >}}##### summator.pbgrpc.dart{{< /markdownify >}}
  {{< collapse >}}
  Not available 
  {{< /collapse >}}

  {{< markdownify >}}##### summator.pbjson.dart{{< /markdownify >}}
  {{< collapse >}}
    Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< markdownify >}}##### summator2_pb2_grpc.py{{< /markdownify >}}
  
  {{< collapse >}}
  {{< include "./__code19_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Library

In this tutorial's example, we used the summator file as a library of methods. This file is like this:

{{< tabsection >}}
  {{< include "./__code22_node.md" >}}
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
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have learned how to create a gRPC server and client. We also saw how to create a proto file and generate the two gRPC files via the protoc compiler. Finally, we understood how to run the server and the client and obtain a result from a call to the sum() method.
