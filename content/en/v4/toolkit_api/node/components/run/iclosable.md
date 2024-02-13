---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods

#### close
Closes a component and frees used resources.

> close(context: [IContext](../../context/context)): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.

### Examples
```typescript
class MyConnector implements IClosable {
    private _client: any = null;
    
    ... // The _client can be lazy created
    
    public async close(traceId: string): Promise<void> {
        if (this._client != null) {
            this._client.close();
            this._client = null;
        }
    }
}

```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)
