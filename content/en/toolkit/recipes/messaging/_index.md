---
type: docs
no_list: true
title: "Messaging"
linkTitle: "Messaging"
description: >-
     How to use the MemoryMessageQueue component.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

### Introduction

This tutorial will help you understand how and when to use the MemoryMessageQueue component. First, it explains the basics of this component and the necessary pre-requisites. Then, it explains how to create a message receiver and an instance of the MemoryMessageQueue, add a listener to it, send and receive a message, and close the component. It ends by summarizing the learned points in a single program and wrapping up the concepts seen in this tutorial.

### The MemoryMessageQueue component

This component provides a message queue that can be used within a process to send and receive messages. It is usually used for testing purposes.

#### Pre-requisites

In order to use this component, we need to import it first. The following command shows how to do this:

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

#### Message receiver

Following this, we create a message receiver that prints a customized message once a message is received. 

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

#### Creating a MemoryMessageQueue component

The next step is to create an instance of the MemoryMessageQueue class and open it. The following code shows how to do this:

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

#### Creating a listener

Now, we need to create a listener that waits for messages arriving at the queue. In order for this process not to collide with the message sending, we create it in a separate thread. The following code explains how this is done:

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

#### Sending a message

After creating a listener, we send a message to the queue. For this, we use a MessageEnvelope component, which allows us to add extra information to the message such as a correlationId and a message type. The following code explains how this can be done:

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

#### Receiving a message

After sending the message, the listener receives it and the message receiver prints out the following text:

![figure 1](./figure1.png)

#### Closing the MemoryMessageQueue

After using the memory queue, we close it to free resources. The following code shows how to do this:

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

#### Final code

Now, we can summarize the learned points in a single program. The code below shows the result of this review:

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

#### Wrapping up

In this tutorial, we learned how to use the MemoryMessageQueue, which, as the name suggests, works on memory and can be used within a process. 
In order to understand the dynamics of this component, we created a message receiver and a listener for the queue. Then, we sent a message and saw that it was received by our queue. Finally, we summarized all the concepts into a single program. 


