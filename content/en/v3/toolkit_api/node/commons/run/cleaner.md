---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class that allows you to clear the state of components.
---

### Description

The Cleaner class allows you to clear the state of components.

### Static methods

#### clear
Clears state of multiple components.

To be cleaned, state components must implement the [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `public static` clear(correlationId: string, components: any[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: any[] - list of components that are to be cleaned.

#### clearOne
Clears the state of a specific component.
To be cleaned, state components must implement [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `public static` clearOne(correlationId: string, component: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: any - component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)
