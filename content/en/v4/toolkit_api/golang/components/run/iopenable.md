---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Interface that allows you to create components with explicit opening and closing.

---

**Extends:** [IClosable](../iclosable)

### Description

The IOpenable interface allows you to create components with explicit opening and closing.

Important points
    
- For components that perform opening on demand consider using [IClosable](../iclosable) interface instead.

### Instance methods

#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.

#### open
Opens the component.

> open(context: [IContext](../../context/context)): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.

### Examples

```go
	type MyPersistence {
			_client any
		}

		func (mp* MyPersistence)IsOpen() bool {
			return mp._client != nil;
		}

		func (mp* MyPersistence) Open(ctx context.Context) error {
			if (mp.isOpen()) {
				return nil;
			}
		}

		func (mp* MyPersistence) Close(ctx context.Context) {
			if (mp._client != nil) {
				mp._client.Close(ctx);
				mp._client = nil;
			}
		}
```

### See also
- #### [IOpenable](../iopenable)
- #### [Opener](../opener)

