---
type: docs
no_list: true
title: "Metrics"
linkTitle: "Metrics"
description: >-
     How to create and manage performance metrics with Pip.Services.
---

### Introduction

This tutorial will teach you how to create and manage performance metrics with Pip.Services components. First, we will learn how counters are defined in the toolkit and how to add them to a component. Then, we will see several options to manage the obtained performance metrics, such as storing them in memory, showing them on a console, sending them to external tools, and grouping them in composite counters. We will also study a dummy component used to simulate counters.

### Counters

Pip.Services has the Count package within the Components module, which contains several interfaces and classes used to create performance metrics. 

Within these interfaces, ICounters defines methods for measuring execution performance. One of them is increment(), which increases by a defined value each time it is called. Other important methods are beginTiming() and stats(), which are used to calculate time intervals and common statistics (minimum, maximum, and average) respectively.

This interface is implemented by several classes. The figure below shows a simplified class diagram displaying the relationships between it and the main classes used to build different counters. These classes will be explained in more detail in the following sections.




The toolkit has several pre-defined counters, which are specified in the CounterType class. They are:

When working with counters, a best practice is to name them according to the following convention:

<div align="center"> <service_or_component_name>.<method_name>.<counter_name> </div>


### Managing counters

In the next sections, we will construct examples that show how to define counters and store them in memory, a logger, and external tools. We will also learn how to create a dummy component that has no real effect and a composite component that groups one or more different counters.
     
#### Monitored component

#### Counters
     
##### CachedCounters
     
##### LogCounters
     
##### NullCounters
     
##### Other counters
     
##### CompositeCounters
     
Pip.Services offers the CompositeCounters component, which can be used to group a set of counters that collect the same performance metrics. Once collected, the metrics can be sent to different destinations, such as a console, a logger, or a tool like Prometheus or Datadog.

An important method in this class is setReferences(), which registers all components that will receive the measurements. When using a container, this method finds all registered counters and connects to them.

In the example below, we have a monitored class similar to the one from the previous section, except for the fact that considers a CompositeCounters component and adds a setReferences() method.

We can use this component to store metrics that can be used by, for example, a CachedLogger and a Prometheus component.

To achieve this, we define two counters, one that stores values in a CachedLogger and another that connects to Prometheus. Then, we instantiate our monitored class and add references to both counters. 
     
After running myMethod(), we obtain the performance metrics for CachedLogger and PrometheusCounters. 

The following code shows how this can be done:

     
     
Which, after running produces the following output:
     
     
### Wrapping up

In this tutorial, we have seen how to create, calculate, store and use performance metrics. We built an example where we created a call-counter and an execution time metric for a method, and saved the obtained values in memory, a logger, and a component that connects to Prometheus. We also learned how to create a NullCounters, which is a dummy component with no real effect that is useful for testing and modeling purposes. Finally, we understood how to group several counters via the CompositeCounters class and obtain the stored values via different tools for future use.     
     
