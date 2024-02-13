---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### ClearAsync
Clears a component's state.

> Task ClearAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples
```cs
class MyObjectWithState: ICleanable 
{
    var _state = new Object[]{};
    ...
    public void Clear(IContext context)
    {
        this._state = new Object[] { };
    }
}

```

### See also
- #### [Cleaner](../cleaner)

