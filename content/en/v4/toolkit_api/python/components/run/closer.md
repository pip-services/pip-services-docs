---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Helper class that allows you to close one or multiple components at the same time.
---

### Description

The Closer class allows you to close one or multiple components at the same time.

### Static methods

#### close
Closes multiple components.

To be closed components must implement [IClosable](../iclosable) interface.
If they don't, then a call to this method has no effect.

> `static` close(context: Optional[IContext], components: List[Any])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: List[Any] - the list of components that are to be closed.

#### close_one
Closes a specific component.
To be closed components must implement [IClosable](../iclosable) interface.
If they don't the call to this method has no effect.

> `static` close_one(context: Optional[IContext], component: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: Any - the component that is to be closed.

### See also
- #### [IClosable](../iclosable)
