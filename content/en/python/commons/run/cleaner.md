---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that allows you to clear the state of a component.
---

### Description

The Cleaner class allows you to clear the state of a component.

### Static methods

#### clear
Clears state of multiple components.

To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `static` clear(correlation_id: str, components: List[Any])

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **components**: List[Any] - the list of components that are to be cleaned.

#### clear_one
Clears state of specific component.
To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `static` clearOne(correlation_id: str, component: Any)

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **component**: Any - the component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)
