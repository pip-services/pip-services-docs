---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods

#### close
Closes component and frees used resources.

> close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

### Examples
```typescript
class MyConnector implements ICloseable {
    private _client: any = null;
    
    ... // The _client can be lazy created
    
    public async close(correlationId: string): Promise\<void\> {
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
