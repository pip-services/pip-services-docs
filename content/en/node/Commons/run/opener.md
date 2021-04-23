---
type: docs
title: "Opener"
linkTitle: "Opener"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class that opens components.
---

See also [IOpenable](../iopenable)


### Methods

#### isOpen
Checks if all components are opened.

To be checked components must implement [IOpenable](../iopenable) interface.
If they don't the call to this method returns true.

> `public static` isOpen(components: any[]): boolean

- **components**: any[] - a list of components that are to be checked.
- **returns**: boolean - true if all components are opened and false if at least one component is closed.

#### isOpenOne
Checks if specified component is opened.
To be checked components must implement [IOpenable](../iopenable) interface.
If they don't the call to this method returns true.

> `public static` isOpenOne(component: any): boolean

- **component**: any - the component that is to be checked.
- **returns**: boolean - true if component is opened and false otherwise.


#### open
Opens multiple components.
To be opened components must implement [IOpenable](../iopenable) interface.
If they don't the call to this method has no effect.

> `public static` open(correlationId: string, components: any[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **components**: any[] - the list of components that are to be closed.


#### openOne
Opens specific component.
To be opened components must implement [IOpenable](../iopenable) interface.
If they don't the call to this method has no effect.

> `public static` openOne(correlationId: string, component: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: any - the component that is to be opened.



### See also
- #### [IOpenable](../iopenable)