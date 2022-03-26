---
type: docs
no_list: true
title: "Communication between components"
linkTitle: "Component communication"
weight: 100
description: >-
     How we can use the References class to communicate between different components.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}
### Key takeaways

### Introduction
When using Pip.Services, a good programming practice is to use an external entity to handle the communication between different components. In this tutorial, you will learn how to do this by using the References class.
For this, we will first see the main characteristics and methods of the References component. Then, we will explain how this component is used in the example provided in the Prometheus tutorial and how it helps with the communication between different components. To conclude, we will summarize the learned concepts.

### The References component
The References component is available via the Commons module. It’s used to store information on registered components and to pass it to other components when requested.

#### Pre-requisites
To use this component, we must first import it. This can be done with the following command:

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

#### Creation
In order to create a References object, we need to create a component that can be added to it. Following the Prometheus example, we create a PrometheusMetricsService object. The code below shows how to do this:

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

There are three main ways to create a References component. The first is to use the fromTuples() method. This static method allows us to add one or more references to our component. In the e{{< tabsection >}}
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
{{< /tabsection >}}xample below, we create a References component and add the service object previously created.

The second way is to create an instance of the References class and later on add the necessary references to it. The following code shows how to do this:

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

Lastly, we can use the constructor with a tuple that includes a list of references, where odd elements are locators and even elements are component references. The following example shows how to create a References object that contains a reference to the previously created service object.

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

#### Main methods
The References class has several methods that allow us to store and retrieve data from an instance of it. They are:

##### find()
This method obtains all the component references that match a specific locator. In the example below, we ask for all those references that relate to our service object, and we obtain a reference to this component.

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

##### getAll()
This method retrieves all the stored component references in the form of a list. In our example, it returns a list with a reference to the service object.

##### getAllLocators()
This method obtains the locators corresponding to all the registered component references. In the example below, we get a Descriptor object containing information about the service object.

##### getOneOptional()
This method retrieves an optional component reference that matches a specified locator. In the example below, we obtain a reference to the stored service object.

##### getOneRequired()
This method gets a required component reference that matches a specified locator and throws a ReferenceException when no reference is found. In the following example, we request and obtain the service component.

##### getOptional()
This method obtains all component references that match a specified locator. In the example below, we ask for the service component and obtain a list with it.

##### getRequired()
This method gets all component references that match a specified locator. If no reference is found, it throws a ReferenceException. In our example, it returns a reference to the stored service component.

##### put()
This method adds a reference into the Reference component. In the example below, we add a reference to the service object defined earlier.

##### remove()
This method removes a previously added reference that matches a specified locator. If many references match the locator, it removes only the first one. In the example below, it removes the reference to the service object previously added.

##### removeAll()
This method removes all component references that match the specified locator. For example, the code below removes all references to the service component.

### Example
In order to explain how the References component can help us to create communication channels for different components, we will use the example created in the Prometheus tutorial. There, we created a custom component named MyComponentA, a PrometheusCounters component that was used to create different counters, and a PrometheusMetricsService object that was used to create a webpage containing the counters’ information under /metrics.

In the tutorial’s example, these three components are added to the References object via the setReferences() method. When needed, they are called via a get method. The figure below summarizes this structure. 

In that example, and in order to add the three components to the References object, we use the fromTuples() method, which accepts one or more Descriptor objects, each containing information about a component, and the respective referenced object. The following code shows how this is done:

Once we have our components in the References object, we can obtain them via any of the get methods available from this class. The code below shows how the MyComponentA class obtains the required counters:

Similarly, if we check the source code for the [PrometheusCounters](https://github.com/pip-services3-python/pip-services3-prometheus-python/blob/master/pip_services3_prometheus/count/PrometheusCounters.py) class, we can see that the class gets the context information via the getOneOptional() method. 

And the [PrometheusMetricsService](https://github.com/pip-services3-python/pip-services3-prometheus-python/blob/master/pip_services3_prometheus/services/PrometheusMetricsService.py) component obtains the context information via the getOneRequired() method:

### Wrapping up

In this tutorial, we have learned how to use the References component to allow communication between different components. First, we saw how to create an instance of this class and use its different methods. Then, we understood how this component is used in the example defined in the Prometheus tutorial, where it works as a broker that stores information on registered components and passes it to other components when requested.
