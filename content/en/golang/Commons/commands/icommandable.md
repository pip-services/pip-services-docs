---
type: docs
title: "ICommandable"
linkTitle: "ICommandable" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type ICommandable interface {}
```

An interface for commandable objects, which are part of the command design pattern.
The commandable object exposes its functonality as commands and events groupped into a CommandSet.

This interface is typically implemented by controllers and is used to auto generate external interfaces.

**Example:**

```go
type MyDataController {
    _commandSet  CommandSet;
}
func (dc *MyDataController) getCommandSet() CommandSet {
    if (dc._commandSet == nil)
        dc._commandSet = NewDataCommandSet();
    return dc._commandSet;
    }
```

### Funcs

> GetCommandSet() *[CommandSet](../commandset)

Gets a command set with all supported commands and events.

- Returns *[CommandSet](../commandset) a command set with commands and events.

see [CommandSet](../commandset)
