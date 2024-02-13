---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### clear
Clears a component's state.

> clear(context: [IContext](../../context/context)): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.

### Examples
```typescript
class MyObjectWithState implements ICleanable {
    private _state: any = {};
    ...
    public async clear(context: IContext): Promise<void> {
        this._state = {};
    }
}

```

### See also
- #### [Cleaner](../cleaner)
