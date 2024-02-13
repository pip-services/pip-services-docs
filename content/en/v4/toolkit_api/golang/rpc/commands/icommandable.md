---
type: docs
title: "ICommandable"
linkTitle: "ICommandable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-rpc-go"
description: > 
    An interface used to expose the functionality of commandable objects as commands and events grouped into a [CommandSet](../command_set) object.
    
---

### Description

The ICommandable interface allows you to expose the functionality of commandable objects as commands and events grouped into a [CommandSet](../command_set) object.

Important points

- This interface is typically implemented by controllers and is used to auto generate external interfaces. 

### Instance methods

#### getCommandSet
Gets a command set with all supported commands and events.

> getCommandSet(): [CommandSet](../command_set)

- **returns**: [CommandSet](../command_set) - command set with commands and events.

### Examples

```go
		type MyDataController {
			_commandSet  CommandSet;
		}
		func (dc *MyDataController) getCommandSet() CommandSet {
			if (dc._commandSet == nil) {
				dc._commandSet = NewDataCommandSet();
			}
			return dc._commandSet;
		}
```

### See also
- #### [CommandSet](../command_set)
