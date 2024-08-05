---
type: docs
no_list: true
title: "MQTT"
linkTitle: "MQTT"
description: >-
     How to send and receive messages via an MQTT broker.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways
<table class="full-width-table">
  <tr>
    <td>MqttMessageQueue</td>
    <td>This component provides a message queue that can send and receive messages via an MQTT message broker.</td>
  </tr>
</table>

### Introduction

In this tutorial, we will see how to create a message queue with MqttMessageQueue, which is a component available in the mqtt module. First, we will see the necessary pre-requisites and how to create a basic message queue. Then, we will learn how to create a message and send it to an MQTT app, such as Eclipse Mosquitto, and read messages from such an app. Finally, we will have a summary of all the learned concepts.

### The MqttMessageQueue component

This component provides a message queue that can send and receive messages via an MQTT message broker such as Mosquitto. It contains a set of methods used to manage the communication between the queue and the message broker. The main ones are explained in the sections below.

#### Pre-requisites

In order to use this component, we must first import it with the following command:

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
  {{< include "./__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Implementing our component

Once we have imported our component, we can create an instance of it and configure our queue. There are two ways to define the topic: we can either define it in the constructor when we create the queue

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
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Or, we can create our object as 

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
  {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

and then, define the topic as a configuration parameter

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
  {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Connecting to our app

Now that our component has been defined, we can connect it to our MQTT app through the open()/openAsync() method, which takes the context as its input parameter. The following example illustrates how to use it.

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
  {{< include "./__code5_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Once the queue has been used, we can close it to free resources with the close()/closeAsync() method, which takes the context as its input parameter. The example below shows its usage.

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
  {{< include "./__code6_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


#### Creating and sending a message

After our connection is ready, we can create a message and send it to our app. To create a message, we use the MessageEnvelope component from the messaging module. This class takes the context, the message type, and the message as input parameters. 

Once we have our message envelope, we can use the send()/sendAsync() to send a message to our app. This method has the context and the message envelope as input parameters. The example below shows how to send a message of type "mymessage" containing the text "ABC123".

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
  {{< include "./__code7_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


#### Receiving a message

This component contains several methods that can be used to read a message from an MQTT app. They are explained in the following sections.

##### receive()

This method receives an incoming message and removes it from the queue. It takes the context and a waiting timeout in milliseconds as input parameters. It returns a message envelope containing the received message. 

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Now, to obtain the text of the received message, we can use the getMessageAsString() method. The following example shows how to do this.


{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### peek()

This method gets a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null. The received message is contained in a message envelope. The following example illustrates its usage.


{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Where

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### peekBatch()

This method peeks multiple incoming messages from the queue in the form of a list and without removing them. If there are no messages available in the queue, it returns an empty list. As input parameters, it takes the context and the maximum number of messages to peek. The following example peeks up to three messages. As we had sent only one message, it retrieves it and then stores its content in a message envelope contained in a list. 

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Where

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Auxiliary methods

Additionally, this class has some auxiliary methods. 

##### readMessageCount()

This method allows us to obtain the number of messages in a queue that need to be delivered.

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Other configuration parameters

##### qos

MQTT accepts three different levels, which are:

- At most once (0)
- At least once (1)
- Exactly once (2)

Based on the above, we can specify our preferred level via the _qos field in our configuration by stating its integer value (See the example in the next section). 

##### autoыubscribe

This is a Boolean field. By declaring it as true, our component will automatically subscribe to the specified topic. This field can be specified in our configuration.

The following example shows how to specify the above-mentioned fields.
{{< tabsection >}}
  {{< include "./__code15_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
#### Example

We can now put together a simple example that shows how to use the learned methods. In it, we will first create a message queue and connect it to Mosquitto, and send a message, receive it and print its content. Finally, we will close our connection to free the used resources. The code is:

{{< tabsection >}}
  {{< include "./__code16_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have learned how to create and manage a message queue to communicate with an MQTT-based app using the MqttMessageQueue component.    

We saw that this class can define the topic when an instance of it is created via the constructor. Alternatively, we can define it as a configuration parameter via the configure() method, which is used to set the values of the component's parameters.  Then, we learned several methods used to send and receive messages.     

We also understood how to obtain the number of messages in the queue and how to set up the quality of service level.  Finally, we summarized the usage of the main methods with a comprehensive example.
