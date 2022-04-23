---
type: docs
no_list: true
title: "RabbitMQ"
linkTitle: "RabbitMQ"
weight: 10
description: >-
     How to send and receive messages via RabbitMQ.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

### Introduction

In this tutorial, you will learn how to send and receive messages via RabbitMQ. First, we will see the necessary pre-requisites. Then, we will learn how to implement this component, connect to RabbitMQ and send and receive messages from it. Finally, we will combine the different sections into a program and summarize all the learned concepts.

### The RabbitMQMessageQueue component

This component is part of the RabbitMQ module and represents a message queue that sends and receives messages via the RabbitMQ message broker. Furthermore, it is a subclass of MessageQueue. The following sections explain how to use it.

#### Pre-requisites

In order to use this component, we need to import it first. The following code shows how to do this:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
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


#### Implementing our component

After importing our component, we create an instance of it:

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
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Implementing our component

After importing our component, we create an instance of it:

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
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Configuring our component

An important point when configuring this component is to understand the different parameters involved in this operation. The following table summarizes them:

To configure our object, we use the configure() method, which accepts a ConfigParams object as input. In our example, we define the RabbitMQ exchange, the queue name, the host, and the port. We also assign the value true to auto_create. In this manner, if the queue doesn’t exist in RabbitMQ, it is created. Furthermore, for the example’s purpose, we consider the guest user. But, if we want to refer to another user, we also need to specify the necessary credentials (username and password). 

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
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


#### Connecting to RabbitMQ

To connect to RabbitMQ, we use the OpenAsync() method, which requires the correlation_id as an input parameter. The following example shows how to connect our previously defined queue:

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
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Creating and sending a message

Once connected, we can send a message to RabbitMQ. For this, we use the SendAsync() method, which accepts the correlation_id and a MessageEnvelope object as inputs. This last object contains the correlation_id, message type, and message content as inputs. The following code shows how to do this:

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
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Receiving a message

To receive a message, we use the RecevieAsync() method, which has the correlation_id and the waiting time in milliseconds as input parameters. The following example shows how to use it:

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
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Final code

Which, after running, produces the following output that confirms the message was received and sent by RabbitMQ:

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
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Wrapping up

In this tutorial, we have seen how to communicate with RabbitMQ by sending and receiving messages. First, we learned the basics of the RabbitMQMessageQueue component and how to import, implement and configure it. Then, we understood the different configuration parameters. Finally, we saw how to send and receive messages and created a program that combined all the learned concepts. 
