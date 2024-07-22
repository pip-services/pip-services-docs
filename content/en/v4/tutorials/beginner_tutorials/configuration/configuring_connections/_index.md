---
type: docs
no_list: true
title: "Configuring connections"
linkTitle: "Configuring connections"
description: >-
     How to configure connections using Pip.Services.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>ConnectionParams</td>
    <td>Component used to store connection parameters and their values.</td>
  </tr>
  <tr>
    <td>ConfigParams</td>
    <td>Parent class of ConnectionParams, which provides several useful methods.</td>
  </tr>
  <tr>
    <td>StringValueMap</td>
    <td>Class that defines the output format of the ConnectionParams class.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will learn how to configure connections with the ConnectionParams component and perform CRUD operations with them. First, we will see different ways to create connections, such as from a constructor, a tuple, a string, and a ConfigParams object. Then, we will see how to extract, modify and delete different fields in those connections.

### Pre-requisites

In order to use the ConnectionParams component, we must first import it. This can be done with the following command:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}  
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

### CRUD operations

The functionality of a ConnectionParams component can be described as CRUD operations. The following sections explain each of them.

#### Create

There are several ways to create a ConnectionParams object, such as using a constructor, a tuple, a string and a ConfigParams object.

##### a)	Using the constructor

A ConnectionParams object can be created via its constructor in two different ways. The first is by creating an instance of the ConnectionParams class using as input a ConfigParams object that has the connection parameters and their values. The following example explains how to do this:

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}  
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

In the second approach, we instantiate this class without any input and then we set the values of the most common parameters via their respective set methods. For example:

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}   
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

Or, we can add new parameters and their values using the put() method from the StringValueMap class.

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}   
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

##### b)	Using a tuple

In this case, we declare our parameters and their values in a tuple and use the fromTuples() method. The following example shows how to do this:

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}  
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

##### c)	Using a string

Similar to the previous one, here we define the parameters and their values with a string and use the fromString() method. 

The syntax of the string is: 

**parameterName = parameterValue**

where different parameters are separated by commas.

An example is:

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}   
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

##### d)	Using a ConfigParams object

In this case, we use a ConfigParams object to define the different parameters and their values. Besides, to differentiate the connection parameters from others, we need to use a connection section.

The syntax is 

**connection.parameterName**

And, an example of its usage is: 

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}  
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

Similar to the above, the manyFromConfig() method allows us to manage more than one set of connection parameters. To do this, we define the different connection sets in a section named connections. The syntax is:

**connections.connectionName.parameterName**

As we can see in the next example, the ConfigParam object can also include other types of parameters, such as credentials. Once, instantiated, the ConnectionParams object only takes the parameters under the connections section and creates a list containing them and their values.

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}  
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

##### Adding sections

We can add different sections to our ConnectionParamter object by using the addSection() method, which takes the name of the new section and its components as inputs.

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}   
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

#### Read

Once our connection parameters have been defined, we can read them via the get methods. Pip.Services offers specific get methods for the most common parameters such as host and port. The examples below show how to use them:

{{< tabsection >}}
  {{< include "./__code10_node.md" >}} 
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

As the ConnectionParams object has the form of a StringValueMap, we can also use the get('paramterName') method, which can be used with any parameter.

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}  
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

Furthermore, we can get all the parameters from a section and their values by using the getSeccion() method. The following example illustrates how to obtain the values from  "sectionA".

{{< tabsection >}}
  {{< include "./__code12_node.md" >}} 
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

And, to get all the section names, we have the getSectionNames() method:

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}  
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

#### Update

There are three main ways to update the value of a parameter previously defined. The first is to use any of the set methods available for the most common parameters with the new value as its input. For example, for the host, we could do:

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}  
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

The second is to use the put() method from the StringValueMap class with the updated value as its input.

{{< tabsection >}}
  {{< include "./__code15_node.md" >}}   
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

Finally, we can use the override() method, which returns a new instance of ConnectionParams with the old and updated values. The following example explains how to use it:


{{< tabsection >}}
  {{< include "./__code16_node.md" >}} 
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
#### Delete

We can remove a parameter and its value from the ConnectionParams object via the remove() method inherited from StringValueMap. The following example shows how to do this:

{{< tabsection >}}
  {{< include "./__code17_node.md" >}}   
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

### Wrapping up

In this tutorial, we have learned how to use the ConnectionParams component. We saw how to perform different CRUD operations using this class' methods and the methods inherited from ConfigParams and StringValueMap. 
