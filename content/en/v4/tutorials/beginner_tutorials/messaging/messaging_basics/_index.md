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
    <td>Interface that defines the main methods for a message receiver component.</td>
  </tr>
     <tr>
    <td>IMessageQueue</td>
    <td>Interface that defines the basic methods for a message queue.</td>
  </tr>  
  <tr>
    <td>MemoryMessageQueue</td>
    <td>In-memory implementation of a message queue that can be used to send and receive messages.</td>
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
    <td>Method used to open a component (e.g. MemoryMessageQueue) before use.</td>
  </tr>
  <tr>
    <td>close()</td>
    <td>Method used to close a component (e.g. MemoryMessageQueue) after use and free used resources.</td>
  </tr>
  <tr>
    <td>MessageEnvelope</td>
    <td>Component that is used to add information to a message.</td>
  </tr>
</table>


### Introduction

This tutorial will help you understand how and when to use the MemoryMessageQueue component. First, it explains two interfaces, namely, IMessageQueue and IMessageReceiver, which have to be implemented by message queues and message receivers, respectively. Next, it describes the basics of the MemoryMessageQueue component and its prerequisites. Following this, it explains how to create a message receiver and an instance of the MemoryMessageQueue, add a listener to the queue, send and receive a message, and close the component. It ends by grouping the various pieces into a single program and wrapping up the concepts seen in this tutorial.

### IMessageQueue and IMessageReceiver
The IMessageQueue interface defines the basic methods for a message queue and needs to be implemented by all components of this type. The MemoryMessageQueue class implements it via its parent class **MessageQueue**. 

The IMessageReceiver interface defines the receiveMessage() method, and must be implemented by all message receiver components. In the example presented in the following sections, we define a class named MyMessageReciever, which implements this interface.

The diagrams below show the main relations between these interfaces and the components covered in this tutorial.

![figure 1](./figure1.svg)

### MemoryMessageQueue

This component provides an in-memory implementation of a message queue that can be used to send and receive messages. It is usually used for testing purposes.

#### Pre-requisites

In order to use this component, we need to import it first. The following command shows how to do this:

{{< tabsection >}}
  Not available 
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

#### Message receiver

Following this, we create a message receiver that prints a customized message once a message is received.  

{{< tabsection >}}
   Not available 
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

#### Creating a MemoryMessageQueue component

The next step is to create an instance of the MemoryMessageQueue class and open it. The following code shows how to do this:

{{< tabsection >}}
  Not available 
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

#### Creating a listener

Now, we need to create a listener that waits for messages to arrive in the queue. In order for this process not to collide with the message sending, we create it in a separate thread. The following code does just that:

{{< tabsection >}}
  Not available 
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

#### Sending a message

After creating a listener, we send a message to the queue. For this, we use a MessageEnvelope component, which allows us to add extra information to the message, such as a message type. The following code explains how this can be done:

{{< tabsection >}}
  Not available 
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

#### Receiving a message

After sending the message, the listener receives it and the message receiver prints the following text:

![figure 1](./figure1.png)

#### Closing the MemoryMessageQueue

Once we’re done using the memory queue, we close it to free resources. The following code shows how to do this:

{{< tabsection >}}
  Not available 
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

#### Final code

Now, let’s put all of these concepts together into a single program. The code below shows what the end results looks like:

{{< tabsection >}}
  Not available 
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

#### Wrapping up
In this tutorial, we learned how to use the MemoryMessageQueue, which, as the name suggests, works by storing messages in memory. 

In order to understand the dynamics of this component, we first explored the IMessageQueueInterface and IMessageReceiver interfaces. Next, we created a message receiver, a memory message queue, and a listener for the queue. Then, we sent a message and saw that it was received by our queue. Finally, we combined all of these concepts together to create a simple program that works with a queue. 




