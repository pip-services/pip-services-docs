---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Helper class that allows you to close one or multiple components at the same time.
---

### Description

The Closer class allows you to close one or multiple components at the same time.

### Static methods

#### close
Closes multiple components.

To be closed, components must implement the [IClosable](../iclosable) interface.
If they don't, the call to this method has no effect.

> `public static void` close([IContext](../../context/context) context, Iterable<Object> components) throws ApplicationException

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **components**: Iterable<Object> - list of components that are to be closed.

#### closeOne
Closes a specific component.
To be closed, components must implement the [IClosable](../iclosable) interface.
If they don't, the call to this method has no effect.

> `public static void` closeOne([IContext](../../context/context) context, Object component) throws ApplicationException

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **component**: Object - component that is to be closed.

### See also
- #### [IClosable](../iclosable)
