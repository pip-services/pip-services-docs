---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class that cleans stored object state.
---

See also [ICleanable](../icleanable)


### Methods

#### clear
Clears state of multiple components.

To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `public static` clear(correlationId: string, components: any[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **components**: any[] - the list of components that are to be cleaned.

#### clearOne
Clears state of specific component.
To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `public static` clearOne(correlationId: string, component: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: any - the component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)