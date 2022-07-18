---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Interface that allows you to create components with explicit opening and closing.

---

**Impements:** [IClosable](../iclosable)

### Description

The IOpenable interface allows you to create components with explicit opening and closing.

Important points
    
- For components that perform opening on demand consider using [IClosable](../iclosable) interface instead.

### Methods

#### IsOpen
Checks if the component is opened.

> IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.

#### open
Opens the component.

> Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error returned if not opened

### Examples

```go
type MyPersistence {
	_client interface{}
}
 
func (mp* MyPersistence)IsOpen() bool {
    return mp._client != nil;
}
 
(mp* MyPersistence) Open(correlationId: string) error {
    if (mp.isOpen()) {
        return nil;
    }
}
 
(mp* MyPersistence) Close(correlationId: string) {
    if (mp._client != nil) {
        mp._client.close();
        mp._client = nil;
    }
}
```

### See also
- #### [IOpenable](../iopenable)
- #### [Opener](../opener)
