---
type: docs
title: "Cache"
linkTitle: "Cache"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    
    Abstract implementation of various distributed caches. We can save an object 
    to cache and retrieve it object by its key, using various implementations.  

---
---

<div class="module-body"> 

### Interfaces

#### [ICache](icache)
Interface for caches that are used to cache values to improve performance.

<br>

### Classes

#### [CacheEntry](cache_entry)
Data object to store cached values with their keys used by [MemoryCache](memory_cache)

#### [MemoryCache](memory_cache)
Cache that stores values in the process memory.

#### [NullCache](null_cache)
Dummy cache implementation that doesn't do anything.

It can be used in testing or in situations when cache is required
but shall be disabled.


</div>

