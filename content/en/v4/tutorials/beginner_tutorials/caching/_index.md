---
type: docs
title: "Caching"
linkTitle: "Caching" 
weight: 120
no_list: true
exclude_from_list: true
---
---

### [Caching basics](caching_basic)
Pip.Services offers two components for caching a value. The first is MemoryCache, which stores values in memory. The second is the NullCache class, which is a dummy cache that can be used to simulate caching. The next two sections explain how to use both components.

### [Memcached](memcached)
In this tutorial, you will understand how to create and manage a cache and a distributed lock, both based on a Memcached store. 

First, we will look at the pre-requisites. Then, we will see how to create and perform relevant operations through examples. We will conclude the tutorial with a practical example demonstrating how to use distributed locks.
### [Redis](redis)

In this tutorial, you will see how to use two components related to the Redis database. The first is the RedisCache class, which can be used to create distributed caches that store values in Redis. The second is RedisLock, a component that allows us to create a distributed lock based on the Redis database.
