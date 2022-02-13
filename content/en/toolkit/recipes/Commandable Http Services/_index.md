---
type: docs
no_list: true
title: "Commandable Http Services"
linkTitle: "Commandable Http Services"
weight: 10
description: >-
     What are and how to use CommandableHttpServices.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>CommandableHttpService</td>
    <td>Service that receives remote calls via HTTP/REST protocol to execute commands defined in an ICommandable component.</td>
  </tr>
  <tr>
    <td>CommandSet</td>
    <td>Set of commands that can be called via HTTP.</td>
  </tr>
  <tr>
    <td>CommandableHttpClient</td>
    <td>Client used to consume a CommandableHttpService.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will learn how to create and consume CommandableHttpServices. This type of service is characterized by containing a set of commands that can be called via the HTTP/REST protocol. 

In order to explain its functionality, this tutorial begins by explaining the necessary pre-requisites to work with this component. Then, it shows how to create a command set and a service that uses it. To complete the service, it describes how to include it in a ProcessContainer.

Once the service has been constructed, the tutorial shows how to consume it via a CommandableHttpClient and from any other application.
Finally, it provides a full version of the service and client and a summary of what was learned. 


### Creating a CommandableHttpService

To create a CommandableHttpService, we need to import this class, create a command set, and implement our version of the service. Then, we build a process container to manage and run it. The following sections explain how to do this.

#### Pre-requisites

In order to create a CommandableHttpService, we need to import this component. This can be done with the following code:

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

#### Command set

The key aspect of a CommandableHttpService is its dependence on a set of predefined commands. Thus, in our example, we define a command set containing one command named greeting, which is used to create the phrase “Hello {name}” for a given name. The following code shows how to do this.

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

#### CommandableHttpService

Now that we have our command set, we can code our CommandableHttpService. For this, we create a subclass of this component and add the controller as a dependency.

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

#### Controller

The next step is to define a controller that contains the definition of our function.

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

#### Factory

Now, we create a factory that builds our service and controller. The code below shows how to do this.

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

#### Container

After we have our controller and factory, we create a process container to manage our service’s lifecycle.

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

And, then run it via the run() method.

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

Once our service is running, it is ready to receive requests.

### Consuming a CommandableHttpService

There are several ways to consume our service. In this tutorial, we will consider two of them, namely using Pip.Services’ CommandableHttpClient class and via code.

#### Using a CommandableHttpClient

Pip.Services offers the CommandableHttpClient component, which can be used to interact with a CommandableHttpService. In order to use it, we need to import it first.
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

Once imported, we can create our client by extending this class. The following example shows how to do this:

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

Which, we then instantiate, configure, and connect to our previously defined service. 

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

And then, we request a greeting and get our response. 

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

#### Using code

We can also call our service via code and obtain a similar result. For example:

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

### Final code

Below is the complete code for the service and client.

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
  {{< collapse >}}
    {{< include "./__code13_python.md" >}}
  {{< /collapse >}}
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
  {{< collapse >}}
    {{< include "./__code14_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
### Wrapping up

In this tutorial, we have learned what is and how to create a CommandableHttpService, and how to consume it via a CommandableHttpClient and from any app via code.
