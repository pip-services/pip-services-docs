---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Methods

#### Close
Closes component and frees used resources.

> Close(correlationId string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: error - returns error if not cleared

### Examples
```go
type MyConnector {
    _client interface{}
}
... // The _client can be lazy created
 
func (mc *MyConnector) Close(correlationId: string):error {
    if (mc._client != nil) {
        mc._client.Close()
		mc._client = nil
		return nil
	}
}

```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)
