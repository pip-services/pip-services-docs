---
type: docs
title: "ICommandable"
linkTitle: "ICommandable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface used to expose the functionality of commandable objects as commands and events grouped into a [CommandSet](../command_set) object.
    
---

### Description

The ICommandable interface allows you to expose the functionality of commandable objects as commands and events grouped into a [CommandSet](../command_set) object.

Important points

- This interface is typically implemented by controllers and is used to auto generate external interfaces. 

### Instance methods

#### get_command_set
Gets a command set with all supported commands and events.

> get_command_set(): [CommandSet](../command_set)

- **returns**: [CommandSet](../command_set) - a command set with commands and events.

### Examples

```python
class MyDataController(ICommandable, IMyDataController):
    _commandSet = None
    def get_command_set(self):
        if self._commandSet is None:
            _commandSet = MyDataCommandSet(self)
        return self._commandSet
```

### See also
- #### [CommandSet](../command_set)
