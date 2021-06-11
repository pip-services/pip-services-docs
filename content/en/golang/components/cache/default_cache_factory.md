---
type: docs
title: "DefaultCacheFactory"
linkTitle: "DefaultCacheFactory"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Creates [ICache](../icache) components by their descriptors.
---

### Constructors

#### NewDefaultCacheFactory
Create a new instance of the factory.

> NewDefaultCacheFactory() [*build.Factory](../../build/factory)


### Fields

<span class="hide-title-link">

#### NullCacheDescriptor
A description for a null cache (dummy cache).
> **NullCacheDescriptor**: [Descriptor](../../../commons/refer/descriptor)


#### Descriptor
A descriptor for a factory cache.
> **Descriptor**: [Descriptor](../../../commons/refer/descriptor)

</span>


### See also
- #### [Factory](../../build/factory)
- #### [ICache](../icache)
- #### [MemoryCache](../memory_cache)
- #### [NullCache](../null_cache)
