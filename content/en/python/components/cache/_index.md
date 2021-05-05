---
type: docs
title: "Cache"
linkTitle: "Cache"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Todo: Rewrite the description.


    Abstract implementation of various distributed caches. We can save an object 
    to cache and retrieve it object by its key, using various implementations.  
---
---

<div class="module-body"> 

### Interfaces

#### [ICache](icache)
Interface for caches that are used to cache values to improve performance.

### Classes

#### [CacheEntry](cache_entry)
Data object to store cached values with their keys used by [MemoryCache](../memory_cache)

#### [DefaultCacheFactory](default_cache_factory)
Creates [ICache](icache) components by their descriptors.

#### [MemoryCache](memory_cache)
Cache that stores values in the process memory.
Remember: This implementation is not suitable for synchronization of distributed processes.

#### [NullCache](null_cache)
Dummy cache implementation that doesn't do anything.

It can be used in testing or in situations when cache is required
but shall be disabled.


</div>
