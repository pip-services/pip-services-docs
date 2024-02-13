---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods 

#### CloseAsync
Closes a component and frees used resources.

> Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples
```cs
class MyConnector: IClosable 
{
    private object _client = null;
    ... // The _client can be lazy created
    public void Close(IContext context)
    {
        if (this._client != null)
        {   
            this._client.Close();
            this._client = null;
        }
    }
}

```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)

