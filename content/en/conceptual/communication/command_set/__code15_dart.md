
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

// Step 1 - Create the command set with events
class MyEventSet extends CommandSet {
  MyEventSet() : super() {
    addEvent(event1());
    addEvents([event2(), event3()]);
    addListener(listener1());
  }

  IEvent event1() {
    return Event('event1');
  }

  IEvent event2() {
    return Event('event2');
  }

  IEvent event3() {
    return Event('event3');
  }

  IEventListener listener1() {
    return MyListener();
  }
}

// Step 2 - Create a listener
class MyListener implements IEventListener {
  @override
  void onEvent(String? correlationId, IEvent event, Parameters args) {
    print('Fired event name ' + event.getName());
  }
}


// Step 3  - Create an instance of the command set
var myEvents = MyEventSet();

// Step 4 - Obtain events
var event1 = myEvents.findEvent('event1');
var events = myEvents.getEvents();  // Returns a list with event1, event2 and event3

// Step 5 - Select event1 (first element in the list)
var event2 = events[1];  // Returns event1

// Step 6 - Notify the listener of an event occurrence
event1!.notify('123', Parameters());
event2.notify('123', Parameters());
myEvents.notify('123', 'event3', Parameters());
```

After running, this code produces the following output:         
         
![figure 2](./figure2.png)
