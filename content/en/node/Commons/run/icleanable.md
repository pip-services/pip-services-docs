---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface for components that should clean their state.

    Cleaning state most often is used during testing. 
    But there may be situations when it can be done in production.
---

See also [Cleaner](../cleaner)

**Example:**
```typescript
class MyObjectWithState implements ICleanable {
    private _state: any = {};
    ...
    public async clear(correlationId: string): void {
        this._state = {};
    }
}

```

### Methods

#### clear
Clears component state.

> clear(correlationId: string): Promise\<void\>;

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

### See also
- #### [Cleaner](../cleaner)