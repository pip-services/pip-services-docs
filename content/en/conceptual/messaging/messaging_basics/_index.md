---
type: docs
no_list: true
title: "Messaging basics"
linkTitle: "Messaging basics"
description: >-
     How to use the MemoryMessageQueue component.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>IMessageReceiver</td>
    <td>Interface that defines the main method for a message receiver component.</td>
  </tr>
     <tr>
    <td>IMessageQueue</td>
    <td>Interface that defines the basic methods for a message queue.</td>
  </tr>  
  <tr>
    <td>MemoryMessageQueue</td>
    <td>Message queue that sends and receives messages within the same process by using shared memory.</td>
  </tr>
  <tr>
    <td>listen()</td>
    <td>Method used to listen for incoming messages.</td>
  </tr>
  <tr>
    <td>send()</td>
    <td>Method used to send a message into a queue.</td>
  </tr>
  <tr>
    <td>open()</td>
    <td>Method used to open the component.</td>
  </tr>
  <tr>
    <td>close()</td>
    <td>Method used to close a MemoryMessageQueue and free used resources.</td>
  </tr>
  <tr>
    <td>MessageEnvelope</td>
    <td>Component used to add information to a message.</td>
  </tr>
</table>


### Introduction

This tutorial will help you understand how and when to use the MemoryMessageQueue component. First, it explains two interfaces namely, IMessageQueue and IMessageReceiver, which have to be implemented by message queues and message receivers respectively. Next, it describes the basics of the MemoryMessageQueue component and its pre-requisites. Following this, it explains how to create a message receiver and an instance of the MemoryMessageQueue, add a listener to the queue, send and receive a message, and close the component. It ends by grouping the learned points in a single program and wrapping up the concepts seen in this tutorial.

### IMessageQueue and IMessageReceiver

The IMessageQueue interface defines the basic methods for a message queue and needs to be implemented by all components of this type. The MemoryMessageQueue class implements it via its parent class MessageQueue. 

The IMessageReceiver interface defines the receiveMessage() method, and must be implemented by all message receiver components. In the example presented in the following sections, we define a class named MyMessageReciever, which implements this interface.

The diagrams below show the main relations between these interfaces and the components studied in this tutorial.


![figure 1](./figure1.svg)


### MemoryMessageQueue

This component provides a message queue that can be used within a process to send and receive messages. It is usually used for testing purposes.

#### Pre-requisites

In order to use this component, we need to import it first. The following command shows how to do this:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Message receiver

Following this, we create a message receiver that prints a customized message once a message is received. 

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Creating a MemoryMessageQueue component

The next step is to create an instance of the MemoryMessageQueue class and open it. The following code shows how to do this:

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Creating a listener

Now, we need to create a listener that waits for messages arriving at the queue. In order for this process not to collide with the message sending, we create it in a separate thread. The following code explains how this is done:

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Sending a message

After creating a listener, we send a message to the queue. For this, we use a MessageEnvelope component, which allows us to add extra information to the message such as a correlationId and a message type. The following code explains how this can be done:

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Receiving a message

After sending the message, the listener receives it and the message receiver prints the following text:

![figure 1](./figure1.png)

#### Closing the MemoryMessageQueue

After using the memory queue, we close it to free resources. The following code shows how to do this:

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Final code

Now, we can summarize the learned points in a single program. The code below shows the result of this review:

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Wrapping up
In this tutorial, we learned how to use the MemoryMessageQueue, which, as the name suggests, works by using shared memory. 

In order to understand the dynamics of this component, we first explored the IMessageQueueInterface and IMessageReceiver interfaces. Next, we created a message receiver, a memory message queue, and a listener for the queue. Then, we sent a message and saw that it was received by our queue. Finally, we summarized all the concepts in a single program. 



