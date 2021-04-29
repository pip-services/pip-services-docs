---
type: docs
title: "ICommandable"
linkTitle: "ICommandable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface for commandable objects, which are part of the command design pattern.
    The commandable object exposes its functonality as commands and events groupped
    into a [CommandSet](../command_set).


    This interface is typically implemented by controllers and is used to auto generate
    external interfaces.
---

See also [CommandSet](../command_set)

**Example:**

```typescript
export class MyDataController implements ICommandable, IMyDataController {
  private _commandSet : MyDataCommandSet; 
        
  public getCommandSet(): CommandSet {
    if (this._commandSet == null)
      this._commandSet = new MyDataCommandSet(this);
    return this._commandSet;
  }    
         
  ...
}

```

### Methods

#### getCommandSet
Gets a command set with all supported commands and events.

> getCommandSet(): [CommandSet](../command_set)

- **returns**: [CommandSet](../command_set) - a command set with commands and events.



### See also
- #### [CommandSet](../command_set)