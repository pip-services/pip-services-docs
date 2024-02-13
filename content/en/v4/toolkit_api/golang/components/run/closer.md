---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
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

> `public static` close(context: [IContext](../../context/context), components: any[]): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **components**: any[] - list of components that are to be closed.

#### closeOne
Closes a specific component.
To be closed, components must implement the [IClosable](../iclosable) interface.
If they don't, the call to this method has no effect.

> `public static` closeOne(context: [IContext](../../context/context), component: any): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **component**: any - component that is to be closed.

### See also
- #### [IClosable](../iclosable)

