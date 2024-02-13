---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-logic-node"
description: >
    Interface for caches that are used to cache values to improve performance.
    
---

### Description


The interface serves as a foundational structure and set of methods specifically tailored to manage caches, optimizing the performance of the system by efficiently storing and retrieving values, thereby reducing the need for repeated computations.

### Instance methods

#### retrieve
Adds a listener that will be notified when configuration is changed

> addChangeListener(context: [IContext](../../../components/context/icontext), key: string): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: Promise\<any\> - the cached value or <code>null</code> if value wasn't found.


#### store
Stores value in the cache with expiration time.

> store(context: [IContext](../../../components/context/icontext), key: string, value: any, timeout: number): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - The value that was stored in the cache.

#### remove
Reads configuration and parameterizes it with given values.

> remove(context: [IContext](../../../components/context/icontext), key: string): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key. 

