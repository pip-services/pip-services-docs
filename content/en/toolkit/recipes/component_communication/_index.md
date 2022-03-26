---
type: docs
no_list: true
title: "Communication between components"
linkTitle: "Component communication"
weight: 100
description: >-
     How we can use the References class to communicate between different components.
---

### Key takeaways

### Introduction
When using Pip.Services, a good programming practice is to use an external entity to handle the communication between different components. In this tutorial, you will learn how to do this by using the References class.
For this, we will first see the main characteristics and methods of the References component. Then, we will explain how this component is used in the example provided in the Prometheus tutorial and how it helps with the communication between different components. To conclude, we will summarize the learned concepts.

### The References component
The References component is available via the Commons module. It’s used to store information on registered components and to pass it to other components when requested.

#### Pre-requisites
To use this component, we must first import it. This can be done with the following command:

#### Creation
In order to create a References object, we need to create a component that can be added to it. Following the Prometheus example, we create a PrometheusMetricsService object. The code below shows how to do this:

There are three main ways to create a References component. The first is to use the fromTuples() method. This static method allows us to add one or more references to our component. In the example below, we create a References component and add the service object previously created.

The second way is to create an instance of the References class and later on add the necessary references to it. The following code shows how to do this:


