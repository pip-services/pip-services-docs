---
type: docs
title: "DefaultCacheFactory"
linkTitle: "DefaultCacheFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Creates [ICache](../icache) components by their descriptors.
---

**Implements**: [Factory](../../../components/build/factory)


### Constructors
Create a new instance of the factory.

> DefaultCacheFactory()


### Fields

<span class="hide-title-link">

#### NullCacheDescriptor
A description for a null cache (dummy cache).
> **NullCacheDescriptor**: [Descriptor](../../../components/refer/descriptor)

#### MemoryCacheDescriptor
A descriptor for a memory cache.
> **MemoryCacheDescriptor**: [Descriptor](../../../components/refer/descriptor)

#### Descriptor
A descriptor for a factory cache.
> **descriptor**: [Descriptor](../../../components/refer/descriptor)

</span>


### See also
- #### [Factory](../../../components/build/factory)
- #### [ICache](../icache)
- #### [MemoryCache](../memory_cache)
- #### [NullCache](../null_cache)
