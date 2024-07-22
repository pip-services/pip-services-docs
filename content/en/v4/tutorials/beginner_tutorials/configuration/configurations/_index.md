---
type: docs
no_list: true
title: "Configurations"
linkTitle: "Configurations"
description: >-
     How to create and read configuration information.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>ConfigParams</td>
    <td>A container for configuration parameters in the form of a dictionary.</td>
  </tr>
  <tr>
    <td>NameResovler</td>
    <td>Helper class that can be used to extract the value related to a parameter called "name" or "id".</td>
  </tr>
  <tr>
    <td>OptionsResolver</td>
    <td>Helper class that can be used to obtain all the names of the parameters under the "options" section of a ConfigParams object.</td>
  </tr>
</table>

### Introduction

In this tutorial, we will see how to create configurations using the ConfigParams class, and how to read those configurations when they contain a parameter called "name" or "id", and when they have an "options" section.

### ConfigParams

This class provides a container for configuration parameters in the form of a dictionary. The configuration parameters can be broken into sections and subsections using dot notation, such as section1.subsection1.param1". 

#### Pre-requisites

To use the ConfigParams class we need to import it with the following command.

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

#### Create

There are several ways to create a ConfigParams object such as from the class' constructor, a tuple, a string, or an object containing key:value pairs. The examples below show how to do this.

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

#### Add a new section

Once we have created a ConfigParams object, we can add a new section with the add_section() method. This method takes two parameters: the name of the new section and a ConfigParams object containing the key:value pairs for the added section. The example below shows how to use this method.

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

As a result, the config object will now contain the following items:

![figure 1](./figure1.png)

#### Get a section's parameters

We can get a section's parameters with the get_section() method, which requires the section's name as input parameter. The following example shows how to use it.

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

#### List all sections

To list the names of all the sections contained in a ConfigParams object, we can use the get_section_names() method. The following example shows how to use it.

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

#### Merge configurations

We can also merge different configuration sets via the mergeConfigs() method, which accepts two or more ConfigParams objects as input, and merges them into one ConfigParams object. In the following example, we merge three different ConfigParams objects into one containing the configuration sets stored in the three merged objects.

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

![figure 2](./figure2.png)

### Resolvers

Pip.Services offers two helper classes that can be used to extract the value associated with the "name" and "id" parameters, and the key:value pairs of an "options" section. These classes are NameResolver and OptionsResolvers. This section explains their usage.

#### Name resolver

This is a helper class that can be used to extract the value related to a parameter called "name" or "id".

##### Pre-requisites

In order to use this class, we must first import it. The following command shows how to do this.

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

##### Resolve

This class has only one method named resolve(), which returns the value of a parameter called "named" or "id" from a ConfigParams object. If both parameters exist in the same object, it returns the value of the "name" parameter. In addition, given a parameter named "descriptor" containing a string with a Descriptor form, it returns the value of the "name" parameter of such descriptor. Examples of its usage are:

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

#### Options resolver

This is a helper class that can be used to obtain all the names of the parameters under a section called "options" of a CongifParams object.

##### Pre-requisites

In order to use this class, we must first import it. The following command shows how to do this.

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

##### Resolve

This class has only one method named resolve. This method returns the names of the parameters belonging to the "options" section. If the ConfigParams object doesn't contain an options section and the config_as_defaul parameter is set to False (default value), it returns an empty ConfigParams object. And, if the config_as_default parameter is set to True, it returns the entire parameter set. The examples below show how to use it.

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

### Wrapping up

In this tutorial, we have seen how to define configuration parameters by using the ConfigParams class. We have also seen how to use two helper classes namely, NameResolver and OptionsResolver, which can be used to obtain the value related to a parameter called "name" or "id" and the parameters under an "options" section respectively.

