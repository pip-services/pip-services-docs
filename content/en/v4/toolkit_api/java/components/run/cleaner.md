---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
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

> `public static void` clear([IContext](../../context/context) context, Iterable<Object> components) throws ApplicationException

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **components**: Iterable<Object> - list of components that are to be cleaned.

#### clearOne
Clears the state of a specific component.
To be cleaned, state components must implement [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> `public static void` clearOne([IContext](../../context/context) context, Object component) throws ApplicationException

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **component**: Object - component that is to be cleaned.

### See also
- #### [ICleanable](../icleanable)
