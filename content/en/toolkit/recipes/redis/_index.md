---
type: docs
no_list: true
title: "Redis"
linkTitle: "Redis"
weight: 10
description: >-
     How to create a cache and a lock using Redis.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways
<table class="full-width-table">
  <tr>
    <td>RedisCache</td>
    <td>Distributed cache that stores values in a Redis in-memory database.</td>
  </tr>
  <tr>
    <td>RedisLock</td>
    <td>Distributed lock that is implemented based on the Redis in-memory database.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will see how to use two components related to the Redis database. The first is the RedisCache class, which can be used to create distributed caches that store values in Redis. The second is RedisLock, a component that allows us to create a distributed lock based on the Redis database.

### Pre-requisites

Before using this library, we need to install the Redis module. This can be done with the following command:

### RedisCache

This component provides a way to create a distributed cache that stores values in a Redis database. The sections below explain how to create this cache and perform basic CRUD operations with it.

#### Pre-requisites

In order to use the RedisCache component, we need to import it first. The command to do this is:

#### Component creation

#### CRUD operations

##### Create and update

##### Read

##### Delete

### RedisLock

#### Pre-requisites

#### Component creation

#### Managing the lock

##### Acquire

###### tryAcquireLock()

###### acquireLock()

##### Release

#### Example

### Wrapping up
In this tutorial, we have learned how to use the RedisCache and RedisLock components. The first is used to create a distributed cache that stores values in Redis. The second helps us create distributed locks based on the Redis database.

For the RedisCache, we saw how to perform the different CRUD operations and, for the RedisLock, we understood how to manage it in practical situations. 

