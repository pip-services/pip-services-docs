---
type: docs
title: "DefaultCacheFactory"
linkTitle: "DefaultCacheFactory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Creates [ICache](../icache) components by their descriptors.
---

**Extends**: [Factory](../../build/factory)


### Constructors
Create a new instance of the factory.

> `public` constructor()


### Fields

<span class="hide-title-link">

#### NullCacheDescriptor
A description for a null cache (dummy cache).
> `public static` **NullCacheDescriptor**: [Descriptor](../../../commons/refer/descriptor)

#### MemoryCacheDescriptor
A descriptor for a memory cache.
> `public static` **MemoryCacheDescriptor**: [Descriptor](../../../commons/refer/descriptor)

#### Descriptor
A descriptor for a factory cache.
> `public static` **Descriptor**: [Descriptor](../../../commons/refer/descriptor)

</span>


### See also
- #### [Factory](../../build/factory)
- #### [ICache](../icache)
- #### [MemoryCache](../memory_cache)
- #### [NullCache](../null_cache)
