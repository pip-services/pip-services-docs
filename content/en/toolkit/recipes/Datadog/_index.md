---
type: docs
no_list: true
title: "Datadog"
linkTitle: "Datadog"
weight: 10
description: >-
     How to send metrics and logs to Datadog.
---

### Key takeaways

### Introduction

### DataDogCounters

#### Pre-requisites

#### Creating a component with metrics

#### Creating a DataDogCounters object

#### Generating values for the metrics

#### Our metrics in Datadog

#### Final code

### DataDogLogger

#### Pre-requisites

#### Creating a component with logging

#### Creating a DataDogLogger object

#### Generating logs

#### Our logs in Datadog

#### Final code

Now we can re-arrange our code to create a component according to Pip.Services practices. For this, we add the IConfigurable and IOpenable interfaces, and the configure, open and close methods. We also define the DataDogLogger component within the class, and use the configure, open and close methods to perform these operations on our DataDogLogger component. The following code shows how this can be done:

### Wrapping up

In this tutorial, you have learned how to send metrics and logs to Datadog. First, we saw how to work with the DataDogCounters component. By using this class, we constructed two different counters: one that measures the number of times a method is executed, and another that measures execution time. Then, we executed this class and saw that the values were received by the Datadog application.

Next, we learned about the DataDogLogger class, which we used to send log information to the Datadog application by modifying our previous example. After executing the example’s method, we verified that the logs had been received by the Datadog application.

Finally, for both cases, we presented a final version of the code with some improvements that considered common aspects of Pip.Services programming.

