---
type: docs
title: "Opener"
linkTitle: "Opener"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
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

> `public static boolean` isOpen(Iterable<Object> components)

- **components**: Iterable<Object> - list of components that are to be checked.
- **returns**: boolean - true if all components are opened and false if at least one component is closed.

#### isOpenOne
Checks if a specified component is opened.
To be checked, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method returns true.

> `public static boolean` isOpenOne(Object component)

- **component**: Object - component that is to be checked.
- **returns**: boolean - true if the component is opened and false otherwise.


#### open
Opens multiple components.
To be opened, components must implement [IOpenable](../iopenable) interface.
If they don't, the call to this method has no effect.

> `public static void` open([IContext](../../context/context) context, Iterable<Object> components) throws ApplicationException

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **components**: Iterable<Object> - list of components that are to be closed.


#### openOne
Opens a specific component.
To be opened, components must implement the [IOpenable](../iopenable) interface.
If they don't, the call to this method has no effect.

> `public static void` openOne([IContext](../../context/context) context, Object component) throws ApplicationException

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **component**: Object - component that is to be opened.



### See also
- #### [IOpenable](../iopenable)
