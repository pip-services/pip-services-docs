---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Methods

#### Clear
Clears a component's state.

> Clear(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not cleared

### Examples
```go
type MyObjectWithState {
 	_state interface{}
}
...
func (mo *MyObjectWithState ) Clear(ctx context.Context, correlationId string) {
    mo._state = interface{}
}

```

### See also
- #### [Cleaner](../cleaner)
