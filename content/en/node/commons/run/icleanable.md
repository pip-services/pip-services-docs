---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### clear
Clears component state.

> clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

### Examples
```typescript
class MyObjectWithState implements ICleanable {
    private _state: any = {};
    ...
    public async clear(correlationId: string): void {
        this._state = {};
    }
}

```

### See also
- #### [Cleaner](../cleaner)
