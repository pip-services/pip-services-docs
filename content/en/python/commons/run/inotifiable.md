---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface for components that can be asynchronously notified.
    The notification may include optional argument that describe
    the occured event.
---

See also [Notifier](../notifier), [IExecutable](../iexecutable)

**Example:**
```python
class MyComponent(INotifable):
    ...
    def notify(correlationId, args): 
        print("Occured event " + args.get_as_string("event"))
    
   
my_component = MyComponent()
my_component.notify("123", Parameters.from_tuples("event", "Test Event"));

```

### Methods

#### notify
Notifies the component about occured event.

> notify(correlation_id: str, args: [Parameters](../parameters))

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)