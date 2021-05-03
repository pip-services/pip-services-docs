---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface that allows you to create components that can be asynchronously notified.
    
---

### Description

The INotifiable interface allows you to create components that can be asynchronously notified.

Important points

- The notification can include an optiona argument that describes an occurred event.

### Instance methods

#### notify
Notifies the component about occured event.

> notify(correlation_id: str, args: [Parameters](../parameters))

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```python
class MyComponent(INotifable):
    ...
    def notify(correlationId, args): 
        print("Occured event " + args.get_as_string("event"))
    
   
my_component = MyComponent()
my_component.notify("123", Parameters.from_tuples("event", "Test Event"));
```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
