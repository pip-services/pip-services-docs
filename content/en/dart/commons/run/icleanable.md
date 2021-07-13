---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### clear
Clears a component's state.

> Future clear(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

### Examples
```dart
class MyObjectWithState implements ICleanable {
    dynamic _state = {};
    ...
    Future clear(String correlationId) {
       _state = {};
       return  Future();
    }
}
```

### See also
- #### [Cleaner](../cleaner)
