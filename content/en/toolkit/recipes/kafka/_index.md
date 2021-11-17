---
type: docs
no_list: true
title: "Kafka"
linkTitle: "Kafka"
weight: 1
description: >-
     How to communicate with Apache Kafka.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

### Introduction

This tutorial will help you understand how to use two components designed to communicate with Apache Kafka. They are KafkaConnection and KafkaMessageQueue. The first can be used to connect to Apache Kafka and create a publish/subscribe communication mechanism. The second allows for the creation of a queue that can send and receive messages to and from Kafka. The main methods available in both classes are described and explained with examples.

### Communicating with Kafka

Pip.Services offers several components to connect, send and receive messages from Kafka. In this section, we will see the main ones and their most important methods.

#### KafkaConnection

The KafkaConnection class allows us to define a connection to Kafka. The main advantage of using this class is that it allows us to define a connection that can be shared by multiple message queues, thus reducing the number of used connections. The following is an explanation of the main operations offered by this class.

##### Connect to Kafka
To connect to Kafka, we first need to configure our connection. For this, we can use the ConfigParams class, which allows us to specify our connection parameters, such as host and port. Once the parameters are defined, we can use the configure() method to define a connection and the open() method to start it.

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

##### Check if a connection is open

To check if a connection is open, we can use the is_open() method, which returns true if the component is open and false otherwise. The example below illustrates its usage.

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

This class also provides the _check_open() method, which returns None if the connection is open and raises an error if it is closed. The example below shows how to use it.

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

##### Create a queue

To create a queue, this class offers the create_queue() method. This method accepts the queue’s name as input parameter. The following example shows how to use it.

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

##### Delete a queue

To delete a queue, this class offers the delete_queue() method, which requires the queue name as input parameter. The example below shows how to use it.

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

##### List all available queues

To obtain a list of all available queues, this class has the read_queue_names() method. Once run, it returns a list with the queue names. If the connection doesn’t support this function, it returns an empty list. The following example shows how to use it.

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

##### Set the offset

The seek method sets the offset to a specified value. It requires five input parameters namely, the topic name, group id, partition, specified offset, and listener. The example below shows how to use it.

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

##### Publish

To publish messages on a queue, this class has the publish() method, which accepts the name of the queue and a list of messages as inputs. The following example explains its usage.

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

##### Subscribe

To subscribe to a topic, this class offers the subscribe() method, which accepts three parameters namely, the name of a topic,  a group id, a dictionary containing options such as timeout and compression, and a listener. 

The listener must implement the IkafkaMessageListener interface, which contains the on_message() method. The on_message() method requires three parameters: topic, partition and message object. The example below shows how to use it.

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

##### Unsubscribe

To unsubscribe, this class offers the unsubscribe() method. This method has the topic name, group id and listener as input parameters. The following example shows how to use it.

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

##### Close the connection
To close an open connection, we can use the close() method, which is used as follows:

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
##### Example

The following example shows how to use this class to create a connection, a set of queues, to publish them on Kafka, and to subscribe to a topic containing the published messages.

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

After running it, we get an output similar to

![figure 1](./figure1.png)

#### KafkaMessageQueue

The KafkaMessageQueue component allows us to create message queues that send and receive messages via the Kafka message broker. This class has several methods that allow us to create a queue, send and receive messages, remove a message from a queue, close the queue and more. Below is an explanation with examples of its main methods.

##### Create a Kafka message queue

To create a queue, we need to configure it first. We can use the ConfigParams component to define the queue’s parameters, such as the topic. Additionally, we can add the connection parameters. 

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
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Send a message to Kafka

To send a message to Kafka, we can use the send() method. This method has a MessageEnvelope as a message parameter. With a message envelope, the message is stored as a buffer, and a string is converted using an utf8 transformation.

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
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Receive a message from Kafka

To receive an incoming message, we can use the receive() command, which deletes the message from the queue after it has been received.

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

Alternatively, we can use the peek() method, which retrieves a single incoming message from the queue without removing it. If there is no message available in the queue, it returns null. 

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

##### Remove a message

To remove a message from a queue, we can use the complete() method. The code is as follows

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

##### Close the connection

To close a queue and free used resources, we can use the close() method, which is used in this way.

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

##### Example

We can now assemble everything in one example. First, we create a custom message receiver, which will manage the reception of messages according to our needs. This class will inherit from the MessageReceiver class and will expand it. It will also inherit the ICleanable interface, which will help us to define our clean() method.

Then, we define our connection and create an instance of our message receiver. We use the method begin_listen() inherited from the IMessagQueue interface to start our listener and send a message.

Once we received our message, we capture it, close our listener and unlock the thread with the stop_listen() method, and print a message verifying if the received message equals the sent message.

Our final code will look like this:

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

If successfully run, we will get the following output.

![figure 2](./figure2.png)

### Wrapping up

In this tutorial, we have seen how to use two components that present two different alternatives to communicate with Kafka. The first is KafkaConnection. This class presents the advantage of allowing to use one connection with multiple queues, and work through the publish/subscribe mechanism. The second is KafkaMessageQueue, which permits to create a queue, and send/receive messages to/from Kafka. 
