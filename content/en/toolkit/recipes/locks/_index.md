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

### Introduction

This tutorial will help you understand how to use the MemoryLock and NullLock components. First, we will see the basic functionality of the MemoryLock class. Then, we will construct an example that will show how to use this type of lock. After this, we will learn what the NullLock is, how it differentiates from the MemoryLock and when to use it. At the end, we will summarize all the concepts learned.

### The MemoryLock component

This component provides us with a lock that can be used to synchronize the execution of a process that uses shared memory. It inherits from the Lock class two important methods: acquireLock() and configure(). This last method allows us to define a re-try time for lock acquisition. The following sections explain how to create, configure, acquire and release this type of lock. 



### The NullLock component

This component represents a dummy lock that produces no real results. As such, it can be used in testing or in situations where a lock is required but needs to be disabled. It should be noted that this class doesn’t contain a configure() method. 

### Wrapping up

In this tutorial, we have learned how to use the MemoryLock and NullLock components. First, we saw that the first component allows us to create a lock that can be used to synchronize the execution of a process using shared memory. Then, we saw how to create, acquire, and release this kind of lock and an example of how to apply this component.

Finally, we learned that the NullLock is a dummy component that only simulates the behavior of a lock. Thus, we replaced the MemoryLock in the previous example with a NullLock and saw that the main difference is that the latter doesn’t affect the execution of the program.

