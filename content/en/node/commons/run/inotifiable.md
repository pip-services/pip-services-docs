---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> notify(correlationId: string, args: [Parameters](../parameters)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```typescript
class MyComponent implements INotifable {
    ...
    public notify(correlationId: string, args: Parameters): void {
        console.log("Occured event " + args.getAsString("event"));
    }
}
   
let myComponent = new MyComponent();
    
myComponent.notify("123", Parameters.fromTuples("event", "Test Event"));

```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
