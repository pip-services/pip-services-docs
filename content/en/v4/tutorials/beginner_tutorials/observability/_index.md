---
type: docs
title: "Observability"
linkTitle: "Observability" 
weight: 130
no_list: true
exclude_from_list: true
---
---

### [Datadog](datadog)
 In this tutorial, you will learn how to send different metrics and logs to Datadog. For this, we will first create a class with a method that, once executed, sends metrics to Datadog via the DataDogCounters component. Then, we will modify this class and use it to send log information to Datadog via the DataDogLogger class.

### [ElasticSearch](elasticsearch)
In this tutorial you will learn how to work with the ElasticSearchLogger component, which is used to send logs to Elasticsearch. First, we will see the necessary pre-requisites. Then, we will continue by creating a custom component with an example method, running it and generating the logs. After this, we will verify that the messages reached Elasticsearch by using the Elasticvue online tool. Finally, we will improve our custom component by including several Pip.Services best practices.

### [Fluentd](fluentd)
In this tutorial, you will learn how to use the FluentdLogger component to send log messages to Fluentd. First, we will describe this component and understand its pre-requisites. Then, we will create a custom component with methods that generate log messages every time they are called, run it and see the messages received by Fluentd. Finally, we will combine the different code sections into one program and summarize what we have learned

### [Logging](logging)
In this tutorial, you will learn how to add logging capacity to a microservice. First, we will understand what logging consists of. Then, we will use the microservice we created in the “Creating a component” tutorial, replace the printed messages with logger messages and create an exception in our business process (my_task). After running the code, we will see the tagged messages from the logger.

### [Metrics](metrics)
This tutorial will teach you how to create and manage performance metrics with Pip.Services components. First, we will learn how counters are defined in the toolkit and how to add them to a component. Then, we will see several options to manage the obtained performance metrics, such as storing them in memory, showing them on a console, sending them to external tools, and grouping them in composite counters. We will also study a dummy component used to simulate counters

### [Prometheus](prometheus)
In this tutorial, you will learn how to send different metrics to Prometheus. First, we will see how to do this via the Pushgateway. Then, we will understand how to show our metrics on a **/metrics** page. Finally, we will go through a set of different methods, which are useful to create different counters.
