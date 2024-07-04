---
type: docs
no_list: true
title: "Concurrency"
linkTitle: "Concurrency"
weight: 50
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

In order to achieve scalability and resilience, microservices have to allow running multiple instances of the same microservice. In this way, infrastructure can distribute load across them, and switch traffic to surviving instances, when some instances fail. The easier way to achieve this is to implement microservices as completely stateless independent components. However, there are situations when microservices have to maintain their states or coordinate their work among their instances or with other microservices. To support these scenarios the Pip.Services toolkit offers a few abstractions. Let's look at them.

### State management

When a microservice is created to be stateful, it needs to save its state in a distributed storage, so other instances can also access it. The Pip.Services toolkit defines the IStateStore interface for state management components in the state package in the components module. It allows saving, loading, and deleting states using a unique transaction id as a key. Furthermore, since stores can be used by different microservices and different transactions, it is recommended to append the key with a microservice name or transaction type to ensure their global uniqueness.

The following is an example of state management in a stateful microservice:

{{< tabsection >}}
{{< include "./__code1_node.md" >}}
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

The Pip.Service toolkit provides many different implementations of the state stores. They are:

- NullStateStore: Dummy state store implementation that doesn't do anything.
- MemoryStateStore: State store that keeps states in the process memory.
- RedisStateStore
- MemcachedStateStore
- MongoDbStateStore
- PostgresStateStore
- MySqlStateStore
- And others

### Caching

Caching is a mechanism that is primarily used to optimize requests. When a microservice processes a time-consuming request, it can save the result in a cache. On subsequent requests, the microservice first tries to get the result from the cache, and on success, returns it without running the full logic.

Another scenario could be to save the transaction state in a cache, instead of in a persistent storage. However, even though in this way the state can be lost after some time, this behavior could be acceptable in many cases.

To provide for these scenarios, the cache package in the components module contains the ICache interface that allows storing, retrieving, and deleting cached values using their unique keys. The key is just a string. To prevent conflicts, it is recommended to combine the microservice or/and collection name in the object id.

There are a few implementations of caches in the toolkit:

- NullCache: Dummy cache implementation that doesn't do anything.
- MemoryCache: Cache that stores values in the process memory.
- RedisCache: Distributed cache that stores values in Redis in-memory database.
- MemcachedCache: Distributed cache that stores values in Memcached's caching service.

An example of using a cache is the following:

{{< tabsection >}}
{{< include "./__code2_node.md" >}}
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

### Locking

Locks provided by Pip.Services work similarly to traditional synchronization primitives available in many programming languages. The main difference is they support coordination across multiple microservices running on potentially different computing instances across the network.

In order to implement locks, the components have to implement the standard ILock interface defined in the lock package in the components module. There are two possible scenarios for this implementation.

The first scenario is to acquire a lock before running a transaction to prevent other instances to override changes or create conflicts in any other way. This is a dangerous path since distributed locks can significantly lower system throughput or/and cause deadlocks. The example below shows how this case is implemented.

{{< tabsection >}}
{{< include "./__code3_node.md" >}}
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

The second scenario can be used just to prevent double processing. Before executing a transaction, the component tries to acquire a lock. If a lock is not acquired, that means another instance is already processing the transaction and this instance cancels the execution. The following code provides an example of this scenario.

{{< tabsection >}}
{{< include "./__code4_node.md" >}}
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

There are several ready to use Lock components in the toolkit. They include:

- NullLock: Dummy lock implementation with no real effect.
- MemoryLock: Lock used to synchronize the execution of a process using shared memory.
- RedisLock: Distributed lock that is implemented based on the Redis in-memory database.
- MemcachedLock: Distributed lock that is implemented based on Memcached's caching service.

### References

For more information about connectivity see:

- #### [Memory locks](../../locks/memory_locks/)
- #### [Сaching basic](../../caching/caching_basic/)
