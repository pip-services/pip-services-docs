---
type: docs
title: "Opener"
linkTitle: "Opener"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
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

> `static` bool isOpen(List? components)

- **components**: List? - list of components that are to be checked.
- **returns**: bool - true if all components are opened and false if at least one component is closed.

#### isOpenOne
Checks if a specified component is opened.
To be checked, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method returns true.

> `static` bool isOpenOne(component)

- **component**: dynamic - component that is to be checked.
- **returns**: bool - true if the component is opened and false otherwise.


#### open
Opens multiple components.
To be opened, components must implement [IOpenable](../iopenable) interface.
If they don't, the call to this method has no effect.

> `static` Future open(IContext? context, List? components)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: List? - list of components that are to be closed.


#### openOne
Opens a specific component.
To be opened, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method has no effect.

> `static` Future openOne(IContext? context, component)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: dynamic - component that is to be opened.



### See also
- #### [IOpenable](../iopenable)
