---
type: docs
no_list: true
title: "Prometheus"
linkTitle: "Prometheus"
weight: 10
description: >-
     How to send metrics to Prometheus.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}
### Key takeaways

### Introduction

In this tutorial, you will learn how to send different metrics to Prometheus. First, we will see how to do this via the Pushgateway. Then, we will understand how to show our metrics on a /metrics page. Finally, we will go through a set of different methods, which are useful to create different counters.

### Sending metrics to Pushgateway

One of the options presented by Prometheus is to send metrics directly to its Pushgateway interface. For this, Pip.Services has the PrometheusCounters component, which allows us to define different types of counters and send their values to it. The following sections explain how to do this.

#### Pre-requisites

In order to send our counters to Prometheus, we need to import the PrometheusCounters component. The following command shows how to do this.

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

#### Adding the counter to our component

Once we have imported our component, we can create a class containing one or more counters. In our example, we create a class named “MyComponent”, which contains a method called “mymethod”. Within this method, we include two metrics. One is a counter that measures the number of calls to this method, and the other is a variable that measures execution time.

#### Defining and connecting the counter

Once we have our component with the necessary counters, we create an instance of it and connect this object to Prometheus. To do this, we use the configure() method to provide the connection information and the open() method to connect it.

#### Calling the method 

Now that we are connected, we can call “mymethod” one or more times. In the example below, we call it twice. 

#### Results on console

And, after running our code we get the following messages on our console:

#### Obtaining and analyzing the results

We can get the counters with the getAll() method, which returns a list containing all the counters used.

Once we have our list of counters, we can obtain some information from them via the count, min, max, average, time, name and type methods. The following example shows how to obtain these values 

Which after running presents the following values for the previously defined metrics:

#### Pushgateway results

If we are connected to the Prometheus’ Pushgateway, we will find our metrics reflected in its interface. Thus, for example, in the image below, we can see the counter value of two, which indicates that the method was called twice, as we did before in our code.

#### Closing the counter

Finally, to finish our code, we close the counter to free resources.

### Sending metrics to /metrics

Another option presented by Prometheus is to store the metric values on a page located at /metrics. For this purpose, Pip.Services offers the PrometheusMetricsService. Its use is explained in the following sections.

#### Pre-requisites

In order to use the PrometheusMetricsService component, we need to import it first. This can be done with the following command:

#### Creating the component and counter
As we did in the previous example, to send metrics to Prometheus, we need to create a component that generates these metrics first. We also need to create and configure a PrometheusCounters object. The following code shows how to do this:



### Main counter methods


### Wrapping up

In this tutorial, we have learned how to send metric values to Prometheus. First, we saw how to send them to Prometheus’ Pushgateway and analyze the results. Then, we learned how to present our metrics on a page under /metrics. Finally, we explored the main methods available for counters.
