---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface for components that can be asynchronously notified.
    The notification may include optional argument that describe
    the occured event.
---

See also [Notifier](../notifier), [IExecutable](../iexecutable)

**Example:**
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

### Methods

#### notify
Notifies the component about occured event.

> notify(correlationId: string, args: [Parameters](../parameters)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)