---
type: docs
no_list: true
title: "Communication between components"
linkTitle: "Component Communication"
description: >-
     How we can use the References class to communicate between different components.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}
### Key takeaways
<table class="full-width-table">
  <tr>
    <td>References</td>
    <td>Component used to store and retrieve component references.</td>
  </tr>
  <tr>
    <td>Get methods</td>
    <td>Collection of several methods contained in the References class and used to retrieve stored component references. E.g. getOneRequired().</td>
  </tr>
  <tr>
    <td>setReferences()</td>
    <td>Method available from the PrometheusCounters and PrometheusMetricsService classes and used to store component references in a References object.</td>
  </tr>
</table>

### Introduction
When using Pip.Services, a good programming practice is to use an external entity to handle the communication between different components. In this tutorial, you will learn how to do this by using the References class.

For this, we will first see the main characteristics and methods of the References component. Then, we will explain how this component is used in the example provided in the Prometheus tutorial and how it helps with the communication between different components. To conclude, we will summarize the learned concepts.

### The References component
The References component is available via the Commons module. It's used to store information on registered components and to pass this information to other components when requested.

#### Pre-requisites
To use this component, we must first import it. This can be done with the following command:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
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
  {{< include "./__code2_go.md" >}}
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

There are three main ways to create a References component. The first is to use the fromTuples() method. This static method allows us to add one or more references to our component. In the example below, we create a References component and add the service object previously created.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}}
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

The second way is to create an instance of the References class and later on add the necessary references to it. The following code shows how to do this:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}}
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
  {{< include "./__code5_go.md" >}}
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
  {{< include "./__code6_go.md" >}}
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

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### getAllLocators()
This method obtains the locators corresponding to all the registered component references. In the example below, we get a Descriptor object containing information about the service object.

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### getOneOptional()
This method retrieves an optional component reference that matches a specified locator. In the example below, we obtain a reference to the stored service object.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### getOneRequired()
This method gets a required component reference that matches a specified locator and throws a ReferenceException when no reference is found. In the following example, we request and obtain the service component.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### getOptional()
This method obtains all component references that match a specified locator. In the example below, we ask for the service component and obtain a list with it.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### getRequired()
This method gets all component references that match a specified locator. If no reference is found, it throws a ReferenceException. In our example, it returns a reference to the stored service component.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### put()
This method adds a reference to the Reference component. In the example below, we add a reference to the service object defined earlier.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


##### remove()
This method removes a previously added reference that matches a specified locator. If many references match the locator, it removes only the first one. In the example below, it removes the reference to the service object previously added.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


##### removeAll()
This method removes all component references that match a specified locator. For example, the code below removes all references to the service component.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


### Example 1
In order to explain how the References component can help us to create communication channels for different components, we will use the example created in the Prometheus tutorial. There, we created a custom component named MyComponentA, a PrometheusCounters component that was used to create different counters, and a PrometheusMetricsService object that was used to create a webpage containing the counters' information under /metrics.

In the tutorial's example, these three components are added to the References object via the setReferences() method. When needed, they are called via a get method. The figure below summarizes this structure. 

![figure 1](./figure1.svg)

In that example, and in order to add the three components to the References object, we use the fromTuples() method. This method accepts one or more Descriptor objects, each containing information about a component, and the respective referenced object. The following code shows how this is done:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


Once we have our components in the References object, we can obtain them via any of the get methods available from this class. The code below shows how the MyComponentA class obtains the required counters:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Similarly, if we check the source code for the **PrometheusCounters** class, we can see that the class gets the context information via the getOneOptional() method. 

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And the **PrometheusMetricsService** component obtains the context information via the getOneRequired() method:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Example 2
An important advantage of Pip.Services is that once we have a set of references, we can define from general to specific queries. 

For example, let's assume that we have created the following References object:


{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Then, we can generate different types of queries, such as:

#### a.	Get all service objects

If we want to obtain all objects of a specific type, such as all our service objects, we can create this query by specifying the name of the type and considering all other fields generic. Generic fields are specified by using a star to indicate "any". For example, to obtain the two services, we can do the following query:


{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### b.	Get a specific service object
The Reference object also allows us to work with several versions of a component. For example, in our Reference object, we have defined two versions of the service. Therefore, if we want to choose version 2.0, we just need to create a reference to it. The example below shows how to do this.


{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### c.	Get all components in a group
If we need to obtain all the components in a group, we can specify the group's name and consider all the other fields generic. Thus, if we want to obtain the five objects stored in the "pip-services" group, we can do:


{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### d.	Get a specific component
To get a specific component outside the references object, we just need to specify its name. The following example shows how to obtain the service component defined earlier.


{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


### Wrapping up

In this tutorial, we have learned how to use the References class to allow communication between different components. First, we saw how to create an instance of this class and use its different methods. Then, we understood how this component is used in the example defined in the Prometheus tutorial, where it works as a broker that stores information on registered components and passes it to other components when requested. Finally, we learned how to create different types of queries, from generic to specific ones.
