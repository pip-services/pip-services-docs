
```dart
var myEvents = MyEventSet();

var result3 = myEvents.getEvents();

for (var event in result3) {
  print(event.getName());
}

// Returns:    
// event1
// event2
// event3
```
