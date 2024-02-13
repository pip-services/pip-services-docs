---
type: docs
title: "Opener"
linkTitle: "Opener"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class that can be used to check whether all components are opened or not, a component is opened or not, and to open one or more components.
---

### Description

The Opener class can be used to check whether all components are opened or not, a component is opened or not, and to open one or more components.

### Static methods

#### isOpen
Checks if all components are opened.

To be checked, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method returns true.

> `public static` isOpen(components: any[]): boolean

- **components**: any[] - list of components that are to be checked.
- **returns**: boolean - true if all components are opened and false if at least one component is closed.

#### isOpenOne
Checks if a specified component is opened.
To be checked, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method returns true.

> `public static` isOpenOne(component: any): boolean

- **component**: any - component that is to be checked.
- **returns**: boolean - true if the component is opened and false otherwise.


#### open
Opens multiple components.
To be opened, components must implement [IOpenable](../iopenable) interface.
If they don't, the call to this method has no effect.

> `public static` open(correlationId: string, components: any[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: any[] - list of components that are to be closed.


#### openOne
Opens a specific component.
To be opened, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method has no effect.

> `public static` openOne(correlationId: string, component: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: any - component that is to be opened.



### See also
- #### [IOpenable](../iopenable)
