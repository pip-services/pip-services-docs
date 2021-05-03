---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Methods

#### close
Closes component and frees used resources.

> close(correlation_id: str)

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.

### Examples
```python
class MyConnector(ICloseable):
    _client = None
    
    ... # The _client can be lazy created
    
    def close(self, correlation_id):
        if self._client is not None:
            self._client.close()
            self._client = null  
```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)
