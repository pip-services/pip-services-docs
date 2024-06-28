---
type: docs
no_list: true
title: "JSON persistence"
linkTitle: "JSON persitence"
description: >-
     How to persist data using a JSON file.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>JsonFilePersister </td>
    <td>Component in the data module, persistence library used to persist data in JSON format.</td>
  </tr>
  <tr>
    <td>configure</td>
    <td>Method used to pass the path to a JSON file.</td>
  </tr>
  <tr>
    <td>save</td>
    <td>Method used to save data to a JSON file.</td>
  </tr>
  <tr>
    <td>load</td>
    <td>Method used to extract data from a JSON file.</td>
  </tr>
</table>
     
### Introduction

This tutorial will help you understand how to create a JSON persistence component. It starts by explaining the pre-requisites. Then it continues with an explanation on how to create a JSON persistence object, save data to it, and extract stored data from it. In the end, it provides an example where all the explained methods are included.

### Persisting data in a JSON file

#### Pre-requisites

In order to create a JSON persistence component, we need to import the JsonFilePersister class.  This class belongs to the persistence library in the data module. To include this class use the following command:

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

#### Creating the JSON persistence component
There are two ways to create a JSON persistence component. The first consists of declaring an instance of the JsonFilePersister class and passing the JSON file's path to the constructor. Our code will be as follows:

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

The second uses a config object to define the JSON file path. In this case, we need to define a ConfigParams object with the path and use the configure method to pass this object to the JSON persistence object.

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

#### Saving data on a JSON file

To store data in a JSON file we use the save method. The first parameter is the trace_id, which is used to trace execution through the call chain. The second one is the JSON value we want to save. The following example shows how to use it.

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

#### Loading data from a JSON file

To load data from a JSON file we use the load method, which returns the loaded items. This method has the trace_id   parameter as input. The code below explains its usage.

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

### Example
In the following example, we put everything together. First, we create a JSON persistence object, then we save some data to the JSON file, and lastly, we extract the stored data from the JSON file.

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

After running it, our output will be:

![figure 1](./figure1.png)

And, our data.json file will contain:

![figure 2](./figure2.png)

### Wrapping up

In this tutorial, we have learned how to persist data and how to extract persisted data from a JSON file. In the end, we saw an example that summarizes all JSON persistence operations.



