---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Instance methods

#### clear
Clears a component's state.

> clear(context: [IContext](../../context/context)): Promise\<void\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.

### Examples
```go
	type MyObjectWithState {
			_state any
		}
		...
		func (mo *MyObjectWithState) clear(ctx context.Context) {
			mo._state = any
		}

```

### See also
- #### [Cleaner](../cleaner)

