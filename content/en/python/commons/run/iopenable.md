---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface for components that require explicit opening and closing.

    For components that perform opening on demand consider using
    [IClosable](../iclosable) interface instead.
---

**Implements:** [IClosable](../iclosable)

See also [IOpenable](../iopenable), [Opener](../opener)

**Example:**
```python
class MyPersistence(IOpenable):
    _client = None
    ...
    def is_open(self):
        return self._client is not None
    
    
    def open(correlation_id): 
        if self.is_opened() 
            return
        
        ...
    
    def close(self, correlation_id): 
        if self._client is not None:
            self._client.close()
            self._client = None
        
    ...

```

### Methods

#### is_open
Checks if the component is opened.

> is_open(): bool

#### open
Opens the component.

> open(correlation_id: str)

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.

### See also
- #### [IOpenable](../iopenable)
- #### [Opener](../opener)