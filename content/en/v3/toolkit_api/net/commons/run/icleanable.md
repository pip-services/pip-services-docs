---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### ClearAsync
Clears a component's state.

> Task ClearAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

### Examples
```cs
class MyObjectWithState: ICleanable 
{
    var _state = new Object[]{};
    ...
    public void Clear(string correlationId)
    {
        this._state = new Object[] { };
    }
}

```

### See also
- #### [Cleaner](../cleaner)
