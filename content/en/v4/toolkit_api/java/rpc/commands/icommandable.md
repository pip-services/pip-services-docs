---
type: docs
title: "ICommandable"
linkTitle: "ICommandable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-rpc-java"
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

> [CommandSet](../command_set) getCommandSet()

- **returns**: [CommandSet](../command_set) - command set with commands and events.

### Examples

```java
{
  public class MyDataService implements ICommandable, IMyDataService {
    private MyDataCommandSet _commandSet;
 
    public CommandSet getCommandSet() {
      if (this._commandSet == null)
        this._commandSet = new MyDataCommandSet(this);
      return this._commandSet;
    }
 
    ...
  }
  }
```

### See also
- #### [CommandSet](../command_set)
