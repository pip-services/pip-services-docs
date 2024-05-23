---
type: docs
no_list: true
title: "Memcached"
linkTitle: "Memcached"
description: >-
     How to create a cache and a lock using Memcached.
---
{{< tabselector "Node" ".NET" "Golang" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>MemcachedCache</td>
    <td>Distributed cache that stores values in a Memcached store.</td>
  </tr>
  <tr>
    <td>MemcachedLock</td>
    <td>Distributed lock that is implemented based on a Memcached store.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will understand how to create and manage a cache and a distributed lock, both based on a Memcached store. 

First, we will look at the pre-requisites. Then, we will see how to create and perform relevant operations through examples. We will finalize the tutorial with a practical example of how to use distributed locks.

### Pre-requisites

In order to use these components, we need to install the Memcached module first. The following command shows how to do this:

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
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


### MemcachedCache

This component provides a way to create a distributed cache based on the Memcached database. In this section, we will learn how to install and perform CRUD operations with it.

#### Pre-requisites

To use this component, we need to import it first. This can be done with the following command:

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
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Component creation

Once we have imported our base class, we instantiate and configure it. Our main configuration parameters are the connection host and the port. In our case, we use our machine and the default port for Memcached. The following code explains how to do this:

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
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Once we have our component, we can connect it to our Memcached store through the open() method. This method requires a correlationId as input parameter only.

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
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### CRUD operations

The MemcachedCache class offers several methods to perform CRUD operations. They are:

##### Create and update

The store() method can be used to create a record or update its values if the record already exists. This method accepts the correlationId, the key and value, and the timeout as input parameters. It returns True if the operation was successful, and False otherwise. The following example explains its syntax:

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
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Read

The retrieve() method can be used to obtain a stored record according to a given key. The following example describes its usage.

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
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Delete

We can use the remove() method to delete a record, which asks for a correlationId and a key as input parameters. An example of its syntax is:

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
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### MemcachedLock

This component allows us to create distributed locks based on Memcached caching and contains several functions for managing them. The next sections explain how to use it.

#### Pre-requisites

Before using it, we need to import this class. The following command shows how to do this:

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
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Component creation

To create a lock, we need to create an instance of this class and configure it with our database's connection parameters. The following example connects to a Memcached store located in our machine and through the default port 11211.

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
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

After defining our lock, we connect it to our Memcached store via the open() command. 

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
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Managing the lock

Now, we can use our lock. For this, we have two primary operations: acquire and release, which can be managed with a set of methods available in this class. 

##### Acquire

To acquire a lock, we have two methods. They are:

###### tryAcquireLock()

This method makes a single attempt at acquiring a lock. It asks for a correlationId, a key, and a timeout value in milliseconds as input parameters. It returns True if the operation was successful, and False otherwise.

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### acquireLock()

This method makes multiple attempts at acquiring a log. It accepts a correlationId, a key, a timeout, and a lock acquisition timeout in milliseconds as input parameters. The following example shows how to use it.

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Release

Once used, we can release the lock with the releaseLock() method, which takes a correlationId and a key as input parameters. Its usage is as follows:

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Example

Now that we understand how to create and manage a MemcachedLock, we can summarize all the operations in one example. In it, we create an instance of the component, configure it and connect to Memcached. We use a local store and the default port. 

Then, we acquire the lock and perform some operations. Once the processing is done, we release the lock. Our code looks something like this:

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

This tutorial taught us how to create distributed caches and locks using a Memcached store. First, we learned how to define our cache and perform CRUD operations on records stored in our cache. Then, we created a distributed lock and saw how to manage it. We finished the explanations with an example that showed how to practically use a MemcachedLock with a processing task.
