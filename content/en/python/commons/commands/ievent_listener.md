---
type: docs
title: "IEventListener"
linkTitle: "IEventListener"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface for listener objects that receive notifications on fired events.
---
See also [IEvent](../ievent), [Event](../event)

**Example:**

```python
class MyListener(IEventListener):
    def on_event(self, correlation_id, event_name, args):
        print "Fired event_name " + event_name.get_name()
     
event = Event("myevent")
event.addListener(MyListener())
event.notify("123", Parameters.from_tuples("param1", "ABC"))

```

### Methods

#### on_event
A method called when events this listener is subscrubed to are fired.

> on_event(correlation_id: str, event: [IEvent](../ievent), args: [Parameters](../../run/parameters))

- **correlation_id**: str - a fired evemt
- **event**: [IEvent](../ievent) - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../../run/parameters) - event arguments.


### See also
- #### [IEvent](../ievent)
- #### [Event](../event)