---
type: docs
title: "ICommandable"
linkTitle: "ICommandable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    An interface used to expose the functionality of commandable objects as commands and events grouped into a [CommandSet](../command_set) object.
    
---

### Description

The ICommandable interface allows you to expose the functionality of commandable objects as commands and events grouped into a [CommandSet](../command_set) object.

**Important points**

- This interface is typically implemented by controllers and is used to auto generate external interfaces. 

### Instance methods

#### getCommandSet
Gets a command set with all supported commands and events.

> [CommandSet](../command_set) getCommandSet()

- **returns**: [CommandSet](../command_set) - command set with commands and events.

### Examples

```dart
class MyDataController implements ICommandable, IMyDataController {
  MyDataCommandSet _commandSet;
  CommandSet getCommandSet() {
    if (_commandSet == null)
      _commandSet =  MyDataCommandSet(this);
    return _commandSet;
  }
  ...
}

```

### See also
- #### [CommandSet](../command_set)
