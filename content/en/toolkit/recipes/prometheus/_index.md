---
type: docs
no_list: true
title: "Prometheus"
linkTitle: "Prometheus"
weight: 10
description: >-
     How to send metrics to Prometheus.
---

### Key takeaways

### Introduction

In this tutorial, you will learn how to send different metrics to Prometheus. First, we will see how to do this via the Pushgateway. Then, we will understand how to show our metrics on a /metrics page. Finally, we will go through a set of different methods, which are useful to create different counters.

### Sending metrics to the Pushgateway

One of the options presented by Prometheus is to send metrics directly to its Pushgateway interface. For this, Pip.Services has the PrometheusCounters component, which allows us to define different types of counters and send their values to it. The following sections explain how to do this.

#### Pre-requisites

In order to send our counters to Prometheus, we need to import the PrometheusCounters component. The following command shows how to do this.

#### Adding the counter to our component

Once we have imported our component, we can create a class containing one or more counters. In our example, we create a class named “MyComponent”, which contains a method called “mymethod”. Within this method, we include two metrics. One is a counter that measures the number of calls to this method, and the other is a variable that measures execution time.

#### Defining and connecting the counter



#### Calling the method 

#### Results on console

#### Obtaining and analyzing the results

#### Pushgateway results

#### Closing the counter

### Sending metrics to /metrics

### Main counter methods

### Wrapping up

In this tutorial, we have learned how to send metric values to Prometheus. First, we saw how to send them to Prometheus’ Pushgateway and analyze the results. Then, we learned how to present our metrics on a page under /metrics. Finally, we explored the main methods available for counters.
