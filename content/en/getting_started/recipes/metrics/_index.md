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



### Wrapping up
