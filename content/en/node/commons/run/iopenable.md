---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface for components that require explicit opening and closing.

    For components that perform opening on demand consider using
    [IClosable](../iclosable) interface instead.
---

**Extends:** [IClosable](../iclosable)

See also [IOpenable](../iopenable), [Opener](../opener)

**Example:**
```typescript
class MyPersistence implements IOpenable {
    private _client: any;
    ...
    public isOpen(): boolean {
        return this._client != null;
    } 
    
    public async open(correlationId: string): Promise<void> {
        if (this.isOpen()) {
            return;
        }
        ...
    }
    
    public async close(correlationId: string): Promise<void> {
        if (this._client != null) {
            this._client.close();
            this._client = null;
        }
    }
   
    ...
}
```

### Methods

#### isOpen
Checks if the component is opened.

> isOpen(): boolean

#### open
Opens the component.

> open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

### See also
- #### [IOpenable](../iopenable)
- #### [Opener](../opener)