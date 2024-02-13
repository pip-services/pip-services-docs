---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### clear
Clears component state.

> clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

### Examples
```python
class MyObjectWithState(ICleanable):
    _state = {}
    ...

    def clear(self, correlation_id):
        self._state = {}  
```

### See also
- #### [Cleaner](../cleaner)
