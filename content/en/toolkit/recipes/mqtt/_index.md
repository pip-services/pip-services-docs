---
type: docs
no_list: true
title: "MQTT"
linkTitle: "MQTT"
weight: 10
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

#### Component implementation

#### Connecting to our app

#### Creating and sending a message

#### Receiving a message

#### Auxiliary methods

#### Other configuration parameters
##### _qos

MQTT accepts three different levels, which are:
•	At most once (0)
•	At least once (1)
•	Exactly once (2)

Based on the above, we can specify our preferred level via the _qos field in our configuration by stating its integer value (See the example in the next section). 

##### _auto_subscribe

This is a Boolean field. By declaring it as true, our component will automatically subscribe to the specified topic. This field can be specified in our configuration.

The following example shows how to specify the above-mentioned fields.

#### Example

### Wrapping up

In this tutorial, we have learned how to create and manage a message queue to communicate with an MQTT-based app using the MqttMessageQueue component.
We saw that this class can define the topic when an instance of it is created via the constructor. Alternatively, we can define it as a configuration parameter via the configure() method, which is used to set the values of the component’s parameters.  Then, we learned several methods used to send and receive messages. 
We also understood how to obtain the number of messages in the queue and how to set up the quality of service level.  Finally, we summarized the usage of the main methods with a comprehensive example.
