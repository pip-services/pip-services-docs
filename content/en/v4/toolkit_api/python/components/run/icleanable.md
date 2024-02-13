---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### clear
Clears component state.

> clear(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples
```python
class MyObjectWithState(ICleanable):
    _state = {}
    ...

    def clear(self, context):
        self._state = {}  
```

### See also
- #### [Cleaner](../cleaner)
