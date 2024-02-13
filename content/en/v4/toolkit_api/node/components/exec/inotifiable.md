---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Interface that allows you to create components that can be asynchronously notified.
    
---

### Description

The INotifiable interface allows you to create components that can be asynchronously notified.

Important points

- The notification can include an optional argument that describes an occurred event.  

### Instance methods

#### notify
Notifies the component about an occured event.

> notify(context: [IContext](../../context/context), args: [Parameters](../parameters)): void

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```typescript
class MyComponent implements INotifable {
    ...
    public notify(context: IContext, args: Parameters): void {
        console.log("Occured event " + args.getAsString("event"));
    }
}
 *     
let myComponent = new MyComponent();
 *     
myComponent.notify("123", Parameters.fromTuples("event", "Test Event"));

```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
