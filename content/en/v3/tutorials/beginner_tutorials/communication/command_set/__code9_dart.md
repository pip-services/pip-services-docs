
```dart
class MyEventSet extends CommandSet {
  MyEventSet() : super() {
    addEvent(event1());
  }

  IEvent event1() {
    return Event('event1');
  }
}

```
