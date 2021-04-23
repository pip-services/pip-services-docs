---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface for components that require explicit closure.

    For components that require opening as well as closing 
    use [IOpenable](../iopenable) interface instead.
---

See also [IOpenable](../iopenable), [Closer](../closer)

**Example:**
```typescript
class MyConnector implements ICloseable {
    private _client: any = null;
    
    ... // The _client can be lazy created
    
    public async close(correlationId: string): Promise<void> {
        if (this._client != null) {
            this._client.close();
            this._client = null;
        }
    }
}

```

### Methods

#### close
Closes component and frees used resources.

> close(correlationId: string): Promise\<void\>;

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)