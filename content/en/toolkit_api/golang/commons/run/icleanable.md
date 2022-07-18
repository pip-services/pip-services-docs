---
type: docs
title: "ICleanable"
linkTitle: "ICleanable"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Interface that allows you to create components with a method to clean their states.

---

### Description

The ICleanable interface allows you to create components with a method to clean their states.

### Methods

#### Clear
Clears a component's state.

> Clear(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not cleared

### Examples
```go
type MyObjectWithState {
 	_state interface{}
}
...
func (mo * MyObjectWithState ) clear(correlationId string) {
    mo._state = interface{}
}

```

### See also
- #### [Cleaner](../cleaner)
