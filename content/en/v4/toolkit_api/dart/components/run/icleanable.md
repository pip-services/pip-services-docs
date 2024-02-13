---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### clear
Clears a component's state.

> Future clear(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples
```dart
class MyObjectWithState implements ICleanable {
    dynamic _state = {};
    ...
    Future clear(IContext? context) {
       _state = {};
       return  Future();
    }
}
```

### See also
- #### [Cleaner](../cleaner)
