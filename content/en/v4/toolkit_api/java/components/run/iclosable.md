---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods

#### close
Closes a component and frees used resources.

> void close([IContext](../../context/context) context)

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.

### Examples
```java
class MyConnector implements IClosable {
    private Object client = null;
    
    ... // The client can be lazy created
    
    public void close(String traceId) {
        if (this.client != null) {
            this.client.close();
            this.client = null;
        }
    }
}

```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)
