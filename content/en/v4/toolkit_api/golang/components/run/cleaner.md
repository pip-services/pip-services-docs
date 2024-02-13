---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
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

> `public static` clear(context: [IContext](../../context/context), components: any[]): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **components**: any[] - list of components that are to be cleaned.

#### clearOne
Clears the state of a specific component.
To be cleaned, state components must implement [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `public static` clearOne(context: [IContext](../../context/context), component: any): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **component**: any - component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)

