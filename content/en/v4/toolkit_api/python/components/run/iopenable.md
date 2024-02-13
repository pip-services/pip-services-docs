---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Interface that allows you to create components with explicit opening and closing.

---

**Implements:** [IClosable](../iclosable)

### Description

The IOpenable interface allows you to create components with explicit opening and closing.

**Important points**
    
- For components that perform opening on demand consider using [IClosable](../iclosable) interface instead.

### Instance methods

#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.

#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples

```python
class MyPersistence(IOpenable):
    _client = None
    ...
    def is_open(self):
        return self._client is not None
    
    
    def open(context): 
        if self.is_opened() 
            return
        
        ...
    
    def close(self, context): 
        if self._client is not None:
            self._client.close()
            self._client = None
        
    ...

```

### See also
- #### [IOpenable](../iopenable)
- #### [Opener](../opener)
