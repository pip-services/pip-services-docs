---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
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

> notify(context: Optional[IContext], args: [Parameters](../parameters))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```python
class MyComponent(INotifable):
    ...
    def notify(context, args): 
        print("Occured event " + args.get_as_string("event"))
    
   
my_component = MyComponent()
my_component.notify("123", Parameters.from_tuples("event", "Test Event"));
```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
