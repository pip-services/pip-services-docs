---
type: docs
title: "ICommandable"
linkTitle: "ICommandable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface for commandable objects, which are part of the command design pattern.
    The commandable object exposes its functonality as commands and events groupped
    into a [CommandSet](../command_set).


    This interface is typically implemented by controllers and is used to auto generate
    external interfaces.
---

See also [CommandSet](../command_set)

**Example:**

```python
class MyDataController(ICommandable, IMyDataController):
    _commandSet = None
    def get_command_set(self):
        if self._commandSet is None:
            _commandSet = MyDataCommandSet(self)
        return self._commandSet

```

### Methods

#### get_command_set
Gets a command set with all supported commands and events.

> get_command_set(): [CommandSet](../command_set)

- **returns**: [CommandSet](../command_set) - a command set with commands and events.



### See also
- #### [CommandSet](../command_set)