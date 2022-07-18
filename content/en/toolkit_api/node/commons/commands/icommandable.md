---
type: docs
title: "ICommandable"
linkTitle: "ICommandable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

### See also
- #### [CommandSet](../command_set)
