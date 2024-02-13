---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
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

> `static` Future close(IContext? context, List? components)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: List? - list of components that are to be closed.
- **returns**: Future - that receives error or null no errors occured.

#### closeOne
Closes a specific component.
To be closed, components must implement the [IClosable](../iclosable) interface.
If they don't, the call to this method has no effect.

> `static` Future closeOne(IContext? context, component)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: dynamic - component that is to be closed.

### See also
- #### [IClosable](../iclosable)
