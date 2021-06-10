---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface that allows you to create components with explicit opening and closing.

---

**Extends:** [IClosable](../iclosable)

### Description

The IOpenable interface allows you to create components with explicit opening and closing.

Important points
    
- For components that perform opening on demand consider using [IClosable](../iclosable) interface instead.

### Instance methods

#### isOpen
Checks if the component is opened.

> isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.

#### open
Opens the component.

> open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

### Examples

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

### See also
- #### [IOpenable](../iopenable)
- #### [Opener](../opener)
