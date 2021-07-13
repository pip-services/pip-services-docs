---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

> `static` Future close(String correlationId, List components)

- **correlationId**: String - (optional) transaction id  used to trace execution through the call chain.
- **components**: any[] - list of components that are to be closed.

#### closeOne
Closes a specific component.
To be closed, components must implement the [IClosable](../iclosable) interface.
If they don't, the call to this method has no effect.

> `static` Future closeOne(String correlationId, component)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **component**: dynamic - component that is to be closed.

### See also
- #### [IClosable](../iclosable)
