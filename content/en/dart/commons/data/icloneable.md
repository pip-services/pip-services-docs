---
type: docs
title: "ICloneable"
linkTitle: "ICloneable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Interface to create objects with binary clones.
---

### Description

The ICloneable interface allows you to create objects with binary clones. 

### Instance methods

#### clone
Creates a binary clone of this object.

> dynamic clone()

- **returns**: dynamic - clone of this object.

### Examples

```dart
class MyClass implements IMyClass, ICloneable {
  MyClass() { };
  clone() {
      var cloneObj =  (this.<any constructor>());
      // Copy every attribute from this to cloneObj here.
      ...
      return cloneObj;
  }
}
```
