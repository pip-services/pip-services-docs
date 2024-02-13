---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-logic-java"
description: >
    Interface for caches that are used to cache values to improve performance.
    
---

### Description


The interface serves as a foundational structure and set of methods specifically tailored to manage caches, optimizing the performance of the system by efficiently storing and retrieving values, thereby reducing the need for repeated computations.

### Instance methods

#### retrieve
Adds a listener that will be notified when configuration is changed

> Object retrieve([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique value key.
- **returns**: Object - the cached value or <code>null</code> if value wasn't found.


#### store
Stores value in the cache with expiration time.

> Object store([IContext](../../../components/context/icontext) context, String key, Object value, long timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique value key.
- **value**: Object - a value to store.
- **timeout**: long - expiration timeout in milliseconds.
- **returns**: Object - The value that was stored in the cache.

#### remove
Reads configuration and parameterizes it with given values.

> void remove([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique value key. 

