---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface for components that should clean their state.

    Cleaning state most often is used during testing. 
    But there may be situations when it can be done in production.
---

See also [Cleaner](../cleaner)

**Example:**
```python
class MyObjectWithState(ICleanable):
    _state = {}
    ...

    def clear(self, correlation_id):
        self._state = {}
    
```

### Methods

#### clear
Clears component state.

> clear(correlation_id: str)

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.

### See also
- #### [Cleaner](../cleaner)