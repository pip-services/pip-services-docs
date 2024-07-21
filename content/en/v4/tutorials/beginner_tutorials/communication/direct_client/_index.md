---
type: docs
no_list: true
title: "Direct client"
linkTitle: "Direct client"
description: >-
     How to use the DirectClient component.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>Direct client</td>
    <td>A component that calls a service directly in the same memory space.</td>
  </tr>
  <tr>
    <td>Service</td>
    <td>Custom component used to define a method that is called by the direct client.</td>
  </tr>
  <tr>
    <td>References</td>
    <td>Component used to store and locate component references.</td>
  </tr>
  <tr>
    <td>DependencyResolver</td>
    <td>Component used to resolve component references.</td>
  </tr>   
</table>

### Introduction

A direct client is a component that calls a service directly in the same memory space. In general, it is used when multiple microservices are deployed in a single container (monolith system) and communication between them can be done by direct calls. Within Pip.Services, the DirectClient component is used to create it. 

This tutorial will help you understand how this class works. First, we will see how to create a simple service that contains a method that prints "Hello world". Then, we will learn how to create a direct client that connects to this service and allows us to use the method previously defined in our service. Finally, we will run our program and see the results.

### The service

Our service class is very simple and, for the purpose of this example, has a function named "my_method", which prints "Hello world". The following code shows how this class is defined and how to create an instance of it.

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

### The direct client

Now that we have our service, we can construct a direct client that communicates with it and calls "my_method".

To achieve this, we do the following process. First, we create a reference to the service via two components: References and DependencyResolver. This last class is used to give a name to our service's reference and is added in the _init_() method. Then, in the setReferences() method, we receive a References object, which is used to associate the client to the service. Lastly, we create a method that invokes "my_method" from the service. Once our class is defined, we create an instance of it. The following code shows how to do this.

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

### Reference setting

The next step is to define the association between our reference in the client and the service. The following code shows how to do it.

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

### Calling "my_method"

Our aim is to call "my_method" from the client. We have made this possible by connecting the service and the client. Thus, our final step is to call this method from the client with the following command:

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

Which after execution produces the following result:

![figure 1](./figure1.png)

### Final code

The following code summarizes all the previous steps:

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

Which, after running, produces the following outcome:

![figure 1](./figure1.png)

### Wrapping up

In this tutorial, we have seen how to create a direct client by using the DirectClient component. To understand this class, we created a service with a method that prints "Hello world". Then, we created a client with the service as a dependency and connected both components. Finally, we ran the created method from the client and saw the results.

