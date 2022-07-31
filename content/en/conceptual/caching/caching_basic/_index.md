---
type: docs
no_list: true
title: "Caching basic"
linkTitle: "Caching basic"
weight: 80
description: >-
     How to cache in memory.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>ICache</td>
    <td>Interface that defines caching methods.</td>
  </tr>
  <tr>
    <td>MemoryCache </td>
    <td>Stores values in the process memory.</td>
  </tr>
  <tr>
    <td>NullCache</td>
    <td>Dummy cache implementation that simulates caching without any actual action.</td>
  </tr>
</table>

### Introduction

Pip.Services offers several basic components for caching. One of the most important ones is the ICache interface, which must be implemented by all cache components and defines the basic caching methods that all caches must contain. Other two basic components are the MemoryCache and NullCache classes. The first stores values in memory, and the second is a dummy cache that can be used to simulate caching. In the following sections, this tutorial explains how to use these components in detail. Other caching tools, such as Redis and Memcached, are explained in separate tutorials.

### ICache

This interface contains three important methods for caching namely, store(), retrieve() and remove(). As their names indicate, they can be used to store, retrieve and remove values from memory. Both components, MemoryCache and NullCache, implement this interface. The following diagram explains their relations:

### MemoryCache

The MemoryCache component provides a way to create and manage a cache that stores values in the process memory.

#### Pre-requisites

In order to use the MemoryCache component, we need to import it. This can be done with the following command:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Create

We can create a memory cache by creating an instance of the MemoryCache class. The code below shows how to do it.

{{< tabsection >}}
   {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Store

We can cache a value by using the store() method. This method has four input parameters. First, the correlation_id, which is a value that can be used to track execution through the call chain. Second, a key that can be used to uniquely identify the stored value. Third, the value to be stored. Lastly, the number of milliseconds that this value will be stored in memory. The code below shows how to use this method.

{{< tabsection >}}
   {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Retrieve

To retrieve a cached value from memory, we can use the retrieve() method, which takes the correlation_id and the cached value's key as input parameters. The code below shows how to use it.

{{< tabsection >}}
   {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Remove

To remove a cached value from memory, we can use the remove() method. This method takes the correlation_id and the key of the value to be removed as input parameters. The example below shows how to use this method.

{{< tabsection >}}
   {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### NullCache

The NullCache component is a dummy cache implementation. As such, it only simulates caching without any actual results. 

#### Pre-requisites

In order to use the NullCache class, we need to import it. The following command shows how to do this.

{{< tabsection >}}
   {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Create

In order to create a dummy cache, we need to create an instance of the NullCache class. The code below shows how to do this.

{{< tabsection >}}
   {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Store

To cache a value, we can use the store() method. This method takes four input parameters. First, the correlation_id, which is a value that can be used to track execution through the call chain. Second, a key that uniquely identifies the cached value. Third, the value to be cached. Lastly, the number of milliseconds that this value is going to be stored in memory. The following code provides an example of this method's usage.

{{< tabsection >}}
   {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Retrieve

To retrieve a cached value, we use the retrieve() method. This method takes two input parameters namely, the correlation_id and the key of the cached value to be retrieved. The following example shows how to use this method.

{{< tabsection >}}
   {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Remove

To remove a cached value, we can use the remove() method. This method asks for two input parameters, namely the correlation_id and the cached value's key. The following example shows how to use it.

{{< tabsection >}}
   {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have seen how to cache a value for later use. First, we understood the ICache interface. Then, we learned how to use the MemoryCache class, which provides a set of methods to store, retrieve and remove a value from memory. Finally, we saw the NullCache class, which has the same methods as the MemoryCache class, but in practice doesn’t cache any value and only works as a dummy component.

