---
type: docs
no_list: true
title: "Commandable HTTP"
linkTitle: "Commandable HTTP"
description: >-
     What are and how to use CommandableHttpControllers.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>CommandableHttpController</td>
    <td>Controller that receives remote calls via HTTP/REST protocol to execute commands defined in an ICommandable component.</td>
  </tr>
  <tr>
    <td>CommandSet</td>
    <td>Set of commands that can be called via HTTP.</td>
  </tr>
  <tr>
    <td>CommandableHttpClient</td>
    <td>Client used to consume a CommandableHttpController.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will learn how to create and consume CommandableHttpControllers. This type of service is characterized by containing a set of commands that can be called via the HTTP/REST protocol. 

In order to explain its functionality, this tutorial begins by explaining the necessary pre-requisites to work with this component. Then, it shows how to create a command set and a controller that uses it. To complete the controller, it describes how to include it in a ProcessContainer.

Once the controller has been constructed, the tutorial shows how to consume it via a CommandableHttpClient and from any other application.
Finally, it provides a full version of the controller and client and a summary of what was learned. 


### Creating a CommandableHttpController

To create a CommandableHttpController, we need to import this class, create a command set, and implement our version of the controller. Then, we build a process container to manage and run it. The following sections explain how to do this.

#### Pre-requisites

In order to create a CommandableHttpController, we need to import this component. This can be done with the following code:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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


#### Command set

The key aspect of a CommandableHttpController is its dependence on a set of predefined commands. Thus, in our example, we define a command set containing one command named greeting, which is used to create the phrase "Hello {name}" for a given name. The following code shows how to do this.

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

#### CommandableHttpController

Now that we have our command set, we can code our CommandableHttpController. For this, we create a subclass of this component and add the service as a dependency.

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}   
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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


#### Service

The next step is to define a service that contains the definition of our function.

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

#### Factory

Now, we create a factory that builds our service and controller. The code below shows how to do this.

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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


#### Container

After we have our service and factory, we create a process container to manage our controller's lifecycle.

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

And, then run it via the run() method.

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

Once our service is running, it is ready to receive requests.

### Consuming a CommandableHttpController

There are several ways to consume our controller. In this tutorial, we will consider two of them, namely using Pip.Services' CommandableHttpClient class and via code.

#### Using a CommandableHttpClient

Pip.Services offers the CommandableHttpClient component, which can be used to interact with a CommandableHttpController. In order to use it, we need to import it first.

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}   
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

Once imported, we can create our client by extending this class. The following example shows how to do this:

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}   
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

Which, we then instantiate, configure, and connect to our previously defined controller. 

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}   
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

And then, we request a greeting and get our response. 

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}   
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

#### Using code

We can also call our controller via code and obtain a similar result. For example:

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
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

### Final code

Below is the complete code for the service and client.

#### Controller

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code13_node.md" >}}  
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  Not available  
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code13_go.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  Not available  
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code13_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


#### Configuration file


{{< collapse isMarkdown="true">}}
```yml
---
---
---
# Container context
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "hello-friend"
  description: "HelloFriend microservice"
   
# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"
   
# Performance counter that post values to log
- descriptor: "pip-services:counters:log:default:1.0"
   
# Service
- descriptor: "hello-friend:service:default:default:1.0"
  default_name: "Friend"
   
# Shared HTTP Endpoint
- descriptor: "pip-services:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: 8080
   
# Commandable HTTP controller
- descriptor: "hello-friend:controller:commandable-http:default:1.0"
  swagger:
    enable: true
    auto: true
    route: swagger
    name: Friends service
    description: Commandable REST API
  
# Heartbeat controller
- descriptor: "pip-services:heartbeat-controller:http:default:1.0"
   
# Status controller
- descriptor: "pip-services:status-controller:http:default:1.0"

# Swagger controller
- descriptor: "pip-services:swagger-controller:http:default:1.0"


```
{{< /collapse >}}


#### Client

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code14_node.md" >}}   
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  Not available  
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code14_go.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  Not available  
  {{< /collapse >}}
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

In this tutorial, we have learned what is and how to create a CommandableHttpController, and how to consume it via a CommandableHttpClient and from any app via code.

