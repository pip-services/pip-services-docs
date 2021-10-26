---
type: docs
no_list: true
title: "Concurrency"
linkTitle: "Concurrency"
weight: 1
description: >-
     
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

In order to achieve scalability and resilience, microservices have to allow running multiple instances of the same microservice. In this way, infrastructure can distribute load across them, and switch traffic to surviving instances, when some instances fail. The easier way to achieve this is to implement microservices as completely stateless independent components. However, there are situations when microservices have to maintain their states or coordinate their work among their instances or with other microservices. To support these scenarios the Pip.Services toolkit offers a few abstractions. Let’s look at them.

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
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

The Pip.Service toolkit provides many different implementations of the state stores. They are:

- NullStateStore: Dummy state store implementation that doesn’t do anything.
- MemoryStateStore: State store that keeps states in the process memory.
- RedisStateStore
- MemcachedStateStore
- MongoDbStateStore
- PostgresStateStore
- MySqlStateStore
- And others
