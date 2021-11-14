---
type: docs
no_list: true
title: "Caching"
linkTitle: "Caching"
weight: 60
description: >-
     How to cache in memory.
---

### Key takeaways

### Introduction

Pip.Services offers two components for caching a value. The first is MemoryCache, which stores values in memory. The second is the NullCache class, which is a dummy cache that can be used to simulate caching. The next two sections explain how to use both components.

### MemoryCache

The MemoryCache component provides a way to create and manage a cache that stores values in the process memory.

#### Pre-requisites

In order to use the MemoryCache component, we need to import it. This can be done with the following command:

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

#### Create

We can create a memory cache by creating an instance of the MemoryCache class. The code below shows how to do it.

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

#### Store

We can cache a value by using the store() method. This method has four input parameters. First, the correlation_id, which is a value that can be used to track execution through the call chain. Second, a key that can be used to uniquely identify the stored value. Third, the value to be stored. Lastly, the number of milliseconds that this value will be stored in memory. The code below shows how to use this method.

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
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Retrieve

To retrieve a cached value from memory, we can use the retrieve() method, which takes the correlation_id and the cached value’s key as input parameters. The code below shows how to use it.

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

#### Remove

To remove a cached value from memory, we can use the remove() method. This method takes the correlation_id and the key of the value to be removed as input parameters. The example below shows how to use this method.

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

### NullCache

The NullCache component is a dummy cache implementation. As such, it only simulates caching without any actual results. 

#### Pre-requisites

In order to use the NullCache class, we need to import it. The following command shows how to do this.

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

#### Create

In order to create a dummy cache, we need to create an instance of the NullCache class. The code below shows how to do this.

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
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Store

To cache a value, we can use the store() method. This method takes four input parameters. First, the correlation_id, which is a value that can be used to track execution through the call chain. Second, a key that uniquely identifies the cached value. Third, the value to be cached. Lastly, the number of milliseconds that this value is going to be stored in memory. The following code provides an example of this method's usage.

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
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Retrieve

To retrieve a cached value, we use the retrieve() method. This method takes two input parameters namely, the correlation_id and the key of the cached value to be retrieved. The following example shows how to use this method.

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
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Remove

To remove a cached value, we can use the remove() method. This method asks for two input parameters, namely the correlation_id and the cached value’s key. The following example shows how to use it.

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
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have seen how to cache a value for later use. First, we saw how to use the MemoryCache class, which provides a set of methods to store, retrieve and remove a value from memory. Then, we saw the NullCache class, which has the same methods as the MemoryCache class, but in practice doesn’t cache any value and only works as a dummy instrument.

