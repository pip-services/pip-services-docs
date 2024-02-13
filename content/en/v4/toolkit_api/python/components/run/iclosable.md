---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods

#### close
Closes a component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples
```python
class MyConnector(IClosable):
    _client = None
    
    ... # The _client can be lazy created
    
    def close(self, context):
        if self._client is not None:
            self._client.close()
            self._client = None  
```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)
