![image](https://github.com/pip-services/pip-services-docs/assets/68734409/76c7a43f-f372-45de-b422-436787f7e60f)---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
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

> `static` Future clear(IContext? context, List? components)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: List? - list of components that are to be cleaned.
- **returns**: Future - that returns error or null no errors occured.

#### clearOne
Clears the state of a specific component.
To be cleaned, state components must implement [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `static` Future clearOne(IContext? context, component)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: dynamic - component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)
