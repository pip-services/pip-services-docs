---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that allows you to close one or multiple components at the same time.
---

### Description

The Closer class allows you to close one or multiple components at the same time.

### Static methods

#### close
Closes multiple components.

To be closed components must implement [IClosable](../iclosable) interface.
If they don't the call to this method has no effect.

> `static` close(correlation_id: str, components: List[Any])

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **components**: List[Any] - the list of components that are to be closed.

#### close_one
Closes specific component.
To be closed components must implement [IClosable](../iclosable) interface.
If they don't the call to this method has no effect.

> `static` close_one(correlation_id: str, component: Any)

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **component**: Any - the component that is to be closed.

### See also
- #### [IClosable](../iclosable)
