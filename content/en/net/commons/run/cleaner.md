---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to clear the state of components.
---

### Description

The Cleaner class allows you to clear the state of components.

### Static methods

#### ClearAsync
Clears state of multiple components.

To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `public static` Task ClearAsync(string correlationId, IEnumerable components)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **components**: IEnumerable - the list of components that are to be cleaned.

#### ClearOneAsync
Clears state of specific component.
To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `public static` Task ClearOneAsync(string correlationId, object component)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: any - the component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)
