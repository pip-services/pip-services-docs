---
type: docs
title: "Event"
linkTitle: "Event"
---

Concrete implementation of [IEvent](#ievent) interface. It allows to send asynchronous notifications to multiple subscribed listeners.
See [IEvent](#ievent), [IEventListener](#ieventListener)

#### Example
```dart
var event =  Event('my_event');

event.addListener(myListener);

event.notify('123', Parameters.fromTuples(
  ['param1', 'ABC',
  'param2', 123]
));
```