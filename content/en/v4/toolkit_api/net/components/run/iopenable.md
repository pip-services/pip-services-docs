---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: >
    Interface that allows you to create components with explicit opening and closing.

---

**Inherits**: [IClosable](../iclosable)

### Description

The IOpenable interface allows you to create components with explicit opening and closing.

**Important points**
    
- For components that perform opening on demand, consider using the [IClosable](../iclosable) interface instead.

### Instance methods

#### IsOpen
Checks if the component is open.

> bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### OpenAsync
Opens the component.

> Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples

```cs
class MyPersistence: IOpenable 
{
    private object _client;
    ...
    public bool IsOpen()
    {
        return this._client != null;
    }
    public void Open(IContext context)
    {
        if (this.isOpen())
        {
            return;
        }
        ...
    }
    public void Close(IContext context)
    {
        if (this._client != null)
        {
            this._client.Close();
            this._client = null;
        }
    }
    ...
}
```

### See also
- #### [Opener](../opener)

