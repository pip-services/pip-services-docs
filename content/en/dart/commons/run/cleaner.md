---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that allows you to clear the state of components.
---

### Description

The Cleaner class allows you to clear the state of components.

### Static methods

#### clear
Clears state of multiple components.

To be cleaned, state components must implement the [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `static` Future clear(String correlationId, List components)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **components**: List - list of components that are to be cleaned.

#### clearOne
Clears the state of a specific component.
To be cleaned, state components must implement [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `static` Future clearOne(String correlationId, component)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **component**: dynamic - component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)
