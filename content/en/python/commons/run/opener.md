---
type: docs
title: "Opener"
linkTitle: "Opener"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that can be used to check whether all components are opened or not, a component is opened or not, and to open one or more components.
---

### Description

The Opener class can be used to check whether all components are opened or not, a component is opened or not, and to open one or more components.

### Static methods

#### is_open
Checks if all components are opened.

To be checked components must implement [IOpenable](../iopenable) interface.
If they don't the call to this method returns true.

> `static` is_open(components: List[Any]): bool

- **components**: List[Any] - a list of components that are to be checked.
- **returns**: bool - true if all components are opened and false if at least one component is closed.

#### is_open_one
Checks if specified component is opened.
To be checked components must implement [IOpenable](../iopenable) interface.
If they don't the call to this method returns true.

> `static` is_open_one(component: Any): bool

- **component**: Any - the component that is to be checked.
- **returns**: bool - true if component is opened and false otherwise.


#### open
Opens multiple components.
To be opened components must implement [IOpenable](../iopenable) interface.
If they don't the call to this method has no effect.

> `static` open(correlation_id: Optional[str], components: List[Any])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **components**: List[Any] - the list of components that are to be closed.


#### open_one
Opens specific component.
To be opened components must implement [IOpenable](../iopenable) interface.
If they don't the call to this method has no effect.

> `static` open_one(correlation_id: Optional[str], component: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: Any - the component that is to be opened.



### See also
- #### [IOpenable](../iopenable)
