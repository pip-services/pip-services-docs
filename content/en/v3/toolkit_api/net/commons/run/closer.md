---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to close one or multiple components at the same time.
---

### Description

The Closer class allows you to close one or multiple components at the same time.

### Static methods

#### CloseAsync
Closes multiple components.

To be closed, the components must implement the [IClosable](../iclosable) interface.
If they don't, the call to this method has no effect.

> `public static` Task CloseAsync(string correlationId, IEnumerable components)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: IEnumerable - list of components that are to be closed.

#### CloseOneAsync
Closes a specific component.
To be closed, components must implement the [IClosable](../iclosable) interface.
If they don't, the call to this method has no effect.

> `public static` Task CloseOneAsync(string correlationId, object component)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: object - component that is to be closed.

### See also
- #### [IClosable](../iclosable)
