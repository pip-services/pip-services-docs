---
type: docs
no_list: true
title: "Caching basics"
linkTitle: "Caching basics"
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
    <td>Cache that stores values in-memory.</td>
  </tr>
  <tr>
    <td>NullCache</td>
    <td>Dummy cache implementation that simulates caching without performing any actual actions.</td>
  </tr>
</table>

### Introduction

Pip.Services offers several basic components for caching. One of the most important ones is the ICache interface, which must be implemented by all cache components and defines a basic set of  methods that all caches must contain. Two other basic components that are worth mentioning are the MemoryCache and NullCache classes. The first stores key-value pairs in-memory, and the second is a dummy cache that can be used to simulate caching. In the following sections, this tutorial explains how to use these components in detail. Other caching tools, such as [Redis](../../tutorials/beginner_tutorials/caching/redis/) and [Memcached](../../tutorials/beginner_tutorials/caching/memcached/), are explained in separate tutorials.

### ICache

This interface contains three important methods for caching, namely, store(), retrieve(), and remove(). As their names indicate, they can be used to store, retrieve, and remove key-value pairs from the cache. Both MemoryCache and NullCache components implement this interface. The following diagram explains their relations:

![figure 1](./figure1.svg)

### Using a cache component

The two basic cache components offered by the toolkit are the MemoryCache and the NullCache. The first provides the ability to create and manage a cache that stores key-value pairs in memory. The second is a dummy cache implementation that only simulates caching, without producing any actual results.


#### Pre-requisites

In order to use the MemoryCache component, we need to import it. This can be done with the following import statement:

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

Similarly, for the NullCache:

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


#### Create

We can create a memory cache by creating an instance of the cache class. The following code shows how this can be done for the Memory Cache:

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

And, for the NullCache:

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

#### Store

We can cache a value by using the store() method. This method accepts four parameters. First, the context (trace_id), which is a value that can be used to track executions throughout the call chain. Second, a key that can be used to uniquely identify the stored value. Third, the value to be stored. Lastly, the duration (in milliseconds) for which this value should be kept in the cache. The code below shows how to use this method for both components.

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

#### Retrieve

To retrieve a cached value from memory, we can use the retrieve() method, which takes the context (trace_id) and the cached value’s key as parameters. The code below shows how this method can be used.

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

#### Remove

To remove a value from a cache, we can use the remove() method, which takes the context (trace_id) and the key of the value to be removed as input parameters. The example below shows how to use this method.

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

Moreover, if we want to retrieve the removed value:


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

We get the following result, which verifies that the key-value pair doesn’t exist any more”

![figure 2](./figure2b.png)

### Wrapping up

In this tutorial, we have seen how to cache a value for later use. First, we understood the ICache interface. Then, we learned how to use the MemoryCache class, which provides a set of methods to store, retrieve and remove a value from memory. Finally, we saw the NullCache class, which has the same methods as the MemoryCache class, but in practice doesn’t cache any value and only works as a dummy component.

