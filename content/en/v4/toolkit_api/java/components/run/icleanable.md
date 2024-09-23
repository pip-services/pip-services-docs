---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### clear
Clears a component's state.

> void clear([IContext](../../context/context) context)

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.

### Examples
```java
class MyObjectWithState implements ICleanable {
    private Object state = new Object();
    ...
    public void clear(IContext context) {
        this.state =  Object();
    }
}

```

### See also
- #### [Cleaner](../cleaner)
