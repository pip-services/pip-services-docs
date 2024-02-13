---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: >
    Interface that allows you to create components that can be asynchronously notified.
    
---

### Description

The INotifiable interface allows you to create components that can be asynchronously notified.

**Important points**

- The notification can include an optional argument that describes an occurred event.

### Instance methods

#### NotifyAsync
Notifies the component about an occured event.

> Task NotifyAsync(IContext context, [Parameters](../parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```cs
class MyComponent: INotifable 
{
    ...
    public void Notify(IContext context, Parameters args)
    {
        Console.WriteLine("Occured event " + args.GetAsString("event"));
    }
}
var myComponent = new MyComponent();
myComponent.Notify("123", Parameters.FromTuples("event", "Test Event"));

```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)

