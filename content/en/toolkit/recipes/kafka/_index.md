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

