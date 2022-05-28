---
type: docs
no_list: true
title: "Locks"
linkTitle: "Locks"
description: >-
     How to use the MemoryLock and NullLock components.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>MemoryLock</td>
    <td>Lock used to synchronize the execution of a process using shared memory.</td>
  </tr>
  <tr>
    <td>NullLock</td>
    <td>Dummy lock that produces no real effect.</td>
  </tr>
  <tr>
    <td>acquireLock()</td>
    <td>Method used to acquire a lock identified by its key.</td>
  </tr>
  <tr>
    <td>releaseLock()</td>
    <td>Method used to release a previously acquired lock identified by its key.</td>
  </tr>

</table>

### Introduction

This tutorial will help you understand how to use the MemoryLock and NullLock components. First, we will see the basic functionality of the MemoryLock class. Then, we will construct an example that will show how to use this type of lock. After this, we will learn what the NullLock is, how it differentiates from the MemoryLock and when to use it. At the end, we will summarize all the concepts learned.

### The MemoryLock component

This component provides us with a lock that can be used to synchronize the execution of a process that uses shared memory. In addition to its own methods, it inherits from the Lock class two important ones: acquireLock() and configure(). The following sections explain how to create, configure, acquire and release this type of lock. 

#### Pre-requisites
In order to use this component, we need to import it first. The following example shows how to do this:

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


#### Lock creation

To create a lock, we just need to instantiate the MemoryLock class. The following code shows how to do this:

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

#### Lock configuration

Once we have an instance of a lock, we can configure the timeout (milliseconds) to retry the lock acquisition. The default value is 100 milliseconds. In the following example, we reset it to 200 milliseconds:

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

#### Lock acquisition

Once created, a lock can be acquired through the acquireLock() method. This method accepts the correlationId, a key that identifies the lock, a lock timeout (milliseconds), and a lock acquisition timeout (milliseconds) as inputs. In the following example, we define the correlationId equal to “123”, a key with the value “mykey”, and we set both timeouts at 1000 milliseconds:

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

#### Lock release

Once used, we can release a lock via the releaseLock() method. This method accepts the correlationId and the key of a previously defined lock as inputs. In the following example, we use the same correlationId and key as in the previous example. In this manner, we can keep track of the process and identify the previously acquired lock.

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

#### Example

Now that we have learned how to use the different methods available in this class, we can create an example that shows how they are used in practice. 

In this example, we define a custom component with two methods. The first stores a value in memory. The second retrieves the stored value from memory and returns it. Both methods use a lock to manage their operations.

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

And, after running the above code, we obtain the following results:

![figure 1](./figure1.png)

### The NullLock component

This component represents a dummy lock that produces no real results. As such, it can be used in testing or in situations where a lock is required but needs to be disabled. It should be noted that this class doesn’t contain a configure() method. 


#### Pre-requisites

To create a NullLock, we need to instantiate it. The following command shows how to do this:

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

#### Lock creation

To create a NullLock, we need to instantiate it. The following command shows how to do this:

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

#### Lock acquisition and release

The Null lock has the acquireLock() and releaseLock() methods. These methods can be called in the same manner as they are called by the MemoryLock class. The only difference is that they actually don’t acquire or release any lock but only simulate these operations.

#### Example

The following example replaces the MemoryLock used in the previous example with a NullLock. Thus, the locking is only simulated and doesn’t affect any part of the program.

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

Which, after running, produces the following outcome:

![figure 1](./figure1.png)

### Wrapping up

In this tutorial, we have learned how to use the MemoryLock and NullLock components. First, we saw that the first component allows us to create a lock that can be used to synchronize the execution of a process using shared memory. Then, we saw how to create, acquire, and release this kind of lock and an example of how to apply this component.

Finally, we learned that the NullLock is a dummy component that only simulates the behavior of a lock. Thus, we replaced the MemoryLock in the previous example with a NullLock and saw that the main difference is that the latter doesn’t affect the execution of the program.

