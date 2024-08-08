---
type: docs
no_list: true
title: "NATS"
linkTitle: "NATS"
description: >-
  How to send and receive messages via a NATS server.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>NatsMessageQueue</td>
    <td>Component used to send and receive messages via a NATS server.</td>
  </tr>
  <tr>
    <td>configure()</td>
    <td>Method used to set the values of configuration parameters.</td>
  </tr>
  <tr>
    <td>send()</td>
    <td>Method used to send messages to a NATS server.</td>
  </tr>
  <tr>
    <td>receive()</td>
    <td>Method used to receive messages from a NATS server.</td>
  </tr>
</table>

### Introduction

This tutorial will help you understand how the NatsMessageQueue component is used. First, we will see a brief description of this class and how to import it. Then, we will implement this component, connect it, and create and send a message to a NATS server from it. Finally, we will combine the code into a complete program and summarize what we have learned.

### The NatsMessageQueue component

This component can be used to send and receive messages via a NATS server. In order to show how to use it, in the following sections, we will see in a stepwise manner how to create a custom component that sends messages to a NATS server located on our machine.

#### Pre-requisites

In order to use this component, we need to import it first. The following code shows how to do this:


{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
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

Once imported, we can create an instance of this class and configure it. In the example below, we consider a NATS server on our machine and port 4222. In addition, we declare autosubscribe as true, which, as the name suggests, creates a subscription to our topic automatically.

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}}
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

#### Connecting to NATS

Now that we have defined our component, we connect to the NATS server via the open() method, which takes the context as an input parameter. The following code shows how to perform this operation:

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}}
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

Once connected, we send a message to our NATS server via the send() method. This method accepts a context and a MessageEnvelope objects as inputs. And, this last object requires a context, a message type, and the data being sent as inputs. The code below exemplifies how to perform this task:

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}}
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

We can receive messages from our subscribed topic via the receive() method, which accepts a context and a timeout in milliseconds as input parameters. The code below gives an example of its usage:

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_go.md" >}}
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

#### Closing the connection

After the task is concluded, we close the connection to free resources. The following command shows how to do this:

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_go.md" >}}
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

Now, we can combine the code from the previous sections into a program that creates an instance of this class, configures and connects it to our NATS server, and sends and receives a message from it. The code below shows the result of this operation:

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
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

Which, after running, will produce the following output 

![figure 1](./figure1.png)

Thus, proving that the message was correctly received by the NATS server.

### Wrapping up

In this tutorial, we have learned how to use the NatsMessageQueue component. First, we saw the necessary pre-requisites and how to create a configured instance of it. Then, we understood how to send and receive messages from our NATS server.  And lastly, we combined the different sections into one comprehensive program.
