---
type: docs
no_list: true
title: "gRPC"
linkTitle: "gRPC"
weight: 10
description: >-
     How to create a server and a client, and communicate between them.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

### Introduction

In this tutorial, you will learn how to create a gRPC client and server by using the Pip.Services’ gRPC module. We will start with an explanation of how to install this module and a brief description of the example used. Next, we will see how to create a gRPC server and client. Lastly, we will have a section containing the complete code for this project.

### Pre-requisites

In order to create a gRPC server and client, we need to install the module first. The command to do this is:

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

Our proto file will contain the following elements:

1.	Syntax: A command indicating that we are using proto3
2.	Number1: A message item describing the input to our function. In our case, we will define both values as floats.
3.	Number2: A message item describing the value returned by our method. In this example, we return the sum of the inputs as a float value.
4.	Summator: A service item describing our method.

The figure below summarizes this description.


#### Compilation

A proto file can be compiled into files in different languages, such as Python, C++, Ruby, C#, Go, and Java. This is done by running the protocol buffer compiler protoc on the .proto file. 

The compiler generates two files per language with the information on data types, stub and server. 

In our case, both client and service are written in the same language. Thus, we generate a common set of files. Our command is:
python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. summator.proto

And the generated files are:

1.	summator2_pb2: contains message classes
     a.	Number1: describes the types of the input paramters
     b.	Number2: describes the result’s type.
2.	summator2_pb2_grpc: contains server and client classes:
     a.	SummatorServicer
     b.	SummatorStub



### Server

We create a server that communicates to clients via the gRPC protocol and connects to a library of functions, which in this example is represented by the Summator file. 

The following sections explain these features in detail.

#### Summator file

In our example, we call a function named sum, which is available via the summator file. This function adds two given numbers and returns the result. Its code is as follows:

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

#### gRPC service

##### Pre-requisites

##### Component generation

##### Running the service

### Client

The next step is to create a client, which will be used to call the sum() method available from the service, and obtain the corresponding result.

#### Pre-requisites

##### GrpcClient

##### Proto compiler generated classes

We also need to import the two files previously generated by the protoc compiler. 

#### Component generation

Once we have imported all the necessary files, we create a subclass of GrpcClient. In it, we define the get_data method, which calls the Sum method and returns the received result. The code is as follows:

After defining our gRCP client, we create an instance of it and use the configure() method to define the connection parameters. In our example, we connect to a server using our machine via the default port 50051.

Finally, we connect to the server via the open() method.

#### Adding two numbers

The next step is to call the get_data() method and obtain the result. The following example shows how to use it to add five and three, which returns eight.

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
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Final code

This section presents the complete code for the example, namely the server and client’s code, the proto file, the two compiler-generated files, and the library file.

#### Server

The code for the server is:

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
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Client

The code for the client is:

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
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


#### Proto file

Our proto file looks like this:

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
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Proto compiler generated files

The two files generated by the protoc compiler are:

##### summator2_pb2

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
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### summator2_pb2_grpc

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
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Library

In this tutorial’s example, we used the summator file as a library of methods. This file is like this:

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
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have learned how to create a gRPC server and client. We also saw how to create a proto file and generate the two gRPC files via the protoc compiler. Finally, we understood how to run the server and the client and obtain a result from a call to the sum() method.
