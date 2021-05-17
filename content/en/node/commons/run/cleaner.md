---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
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

> `static` clear(correlation_id: Optional[str], components: List[Any])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **components**: List[Any] - the list of components that are to be cleaned.

#### clear_one
Clears the state of a specific component.
To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> `static` clearOne(correlation_id: Optional[str], component: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: Any - the component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)
