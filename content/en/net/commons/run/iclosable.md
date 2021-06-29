---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods 

#### CloseAsync
Closes component and frees used resources.

> Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

### Examples
```cs
class MyConnector: ICloseable 
{
    private object _client = null;
    ... // The _client can be lazy created
    public void Close(string correlationId)
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
