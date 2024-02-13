---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Helper class that allows you to clear the state of components.
---

### Description

The Cleaner class allows you to clear the state of components.

### Static methods

#### clear
Clears the state of multiple components.

To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `static` clear(context: Optional[IContext], components: List[Any])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: List[Any] - the list of components that are to be cleaned.

#### clear_one
Clears the state of a specific component.
To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `static` clearOne(context: Optional[IContext], component: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: Any - the component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)
