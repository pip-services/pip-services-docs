---
type: docs
no_list: true
title: "RabbitMQ"
linkTitle: "RabbitMQ"
weight: 10
description: >-
     How to send and receive messages via RabbitMQ.
---

### Key takeaways

### Introduction

In this tutorial, you will learn how to send and receive messages via RabbitMQ. First, we will see the necessary pre-requisites. Then, we will learn how to implement this component, connect to RabbitMQ and send and receive messages from it. Finally, we will combine the different sections into a program and summarize all the learned concepts.

### The RabbitMQMessageQueue component

This component is part of the RabbitMQ module and represents a message queue that sends and receives messages via the RabbitMQ message broker. Furthermore, it is a subclass of MessageQueue. The following sections explain how to use it.

#### Pre-requisites

In order to use this component, we need to import it first. The following code shows how to do this:

#### Implementing our component

After importing our component, we create an instance of it:

#### Implementing our component

#### Connecting to RabbitMQ

#### Creating and sending a message

#### Receiving a message



#### Final code

Which, after running, produces the following output that confirms the message was received and sent by RabbitMQ:

#### Wrapping up

In this tutorial, we have seen how to communicate with RabbitMQ by sending and receiving messages. First, we learned the basics of the RabbitMQMessageQueue component and how to import, implement and configure it. Then, we understood the different configuration parameters. Finally, we saw how to send and receive messages and created a program that combined all the learned concepts. 
