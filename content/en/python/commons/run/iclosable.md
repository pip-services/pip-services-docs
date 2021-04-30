---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface for components that require explicit closure.

    For components that require opening as well as closing 
    use [IOpenable](../iopenable) interface instead.
---

See also [IOpenable](../iopenable), [Closer](../closer)

**Example:**
```python
class MyConnector(ICloseable):
    _client = None
    
    ... # The _client can be lazy created
    
    def close(self, correlation_id):
        if self._client is not None:
            self._client.close()
            self._client = null
        
    
```

### Methods

#### close
Closes component and frees used resources.

> close(correlation_id: str)

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)