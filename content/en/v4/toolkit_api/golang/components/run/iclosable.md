---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods

#### close
Closes a component and frees used resources.

> close(context: [IContext](../../context/context)): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.

### Examples
```go
		type MyConnector {
			_client interface{}
		}
		... // The _client can be lazy created
		func (mc *MyConnector) Close(ctx context.Context) error {
			if (mc._client != nil) {
				mc._client.Close(ctx)
				mc._client = nil
				return nil
			}
		}
```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)

