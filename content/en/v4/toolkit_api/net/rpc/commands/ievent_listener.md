---
type: docs
title: "IEventListener"
linkTitle: "IEventListener"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-rpc-dotnet"
description: > 
    An interface for listener objects that receive notifications on fired events.
---

### Description

The IEventListener interface allows you to define actions to be taken by listener objects after receiving a notification on a fired event.

### Instance methods

#### OnEvent
A method called when events this listener is subscribed to are fired.

> void OnEvent(IContext context, [IEvent](../ievent) event, [Parameters](../../../components/exec/parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain
- **event**: [IEvent](../ievent) - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../../../components/exec/parameters) - event arguments.

### Examples

```cs
public class MyListener: IEventListener {
    private Task onEvent(IContext context, IEvent event, Parameters args)  {
        Console.WriteLine("Fired event " + event.getName());
    }}
Event event = new Event("myevent");
event.addListener(new MyListener()); 
event.notify("123", Parameters.fromTuples("param1", "ABC")); 
// Console output: Fired event myevent

```

### See also
- #### [IEvent](../ievent)
- #### [Event](../event)

