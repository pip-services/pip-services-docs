---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: >
    Helper class that allows you to clear the states of components.
---

### Description

The Cleaner class allows you to clear the state of components.

### Static methods

#### ClearAsync
Clears the state of multiple components.

To be cleaned state components must implement the [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `public static` Task ClearAsync(IContext context, IEnumerable components)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: IEnumerable - list of components that are to be cleaned.

#### ClearOneAsync
Clears the state of a specific component.
To be cleaned. state components must implement the [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `public static` Task ClearOneAsync(IContext context, object component)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: object - component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)

