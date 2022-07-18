---
type: docs
title: "Opener"
linkTitle: "Opener"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that can be used to check whether all components are opened or not, a component is opened or not, and to open one or more components.
---

### Description

The Opener class can be used to check whether all components are opened or not, a component is opened or not, and to open one or more components.

### Static methods

#### IsOpen
Checks if all components are open.

To be checked, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method returns true.

> `public static` bool IsOpen(IEnumerable components)

- **components**: IEnumerable - list of components that are to be checked.
- **returns**: bool - true if all components are open and false if at least one component is closed.

#### IsOpenOne
Checks if a specified component is opened.
To be checked, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method returns true.

> `public static` bool IsOpenOne(object component)

- **component**: object - component that is to be checked.
- **returns**: bool - true if the component is opened and false otherwise.


#### OpenAsync
Opens multiple components.
To be opened, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method has no effect.

> `public static` Task OpenAsync(string correlationId, IEnumerable components)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: IEnumerable - list of components that are to be closed.


#### OpenOneAsync
Opens a specific component.
To be opened, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method has no effect.

> `public static` Task OpenOneAsync(string correlationId, object component)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: object - component that is to be opened.



### See also
- #### [IOpenable](../iopenable)
