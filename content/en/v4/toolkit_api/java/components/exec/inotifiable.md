---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
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

> void notify([IContext](../../context/context) context, [Parameters](../parameters) args) throws ApplicationException

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```java
{
  class MyComponent implements INotifable {
    ...
    public void notify(IContext context, Parameters args) {
      System.out.println("Occurred event " + args.getAsString("event"));
    }
  }
 
  MyComponent myComponent = new MyComponent();
 
  myComponent.notify("123", Parameters.fromTuples("event", "Test Event"));
  }

```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
