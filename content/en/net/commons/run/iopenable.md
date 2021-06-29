---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface that allows you to create components with explicit opening and closing.

---

**Inherits**: [IClosable](../iclosable)

### Description

The IOpenable interface allows you to create components with explicit opening and closing.

Important points
    
- For components that perform opening on demand consider using [IClosable](../iclosable) interface instead.

### Instance methods

#### IsOpen
Checks if the component is opened.

> bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.

#### OpenAsync
Opens the component.

> Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

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
    public void Open(string correlationId)
    {
        if (this.isOpen())
        {
            return;
        }
        ...
    }
    public void Close(string correlationId)
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
- #### [IOpenable](../iopenable)
- #### [Opener](../opener)
