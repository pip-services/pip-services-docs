
```dart
class MyEventSet extends CommandSet {
  MyEventSet() : super() {
    addEvents([event2(), event3()]);
  }

  IEvent event2() {
    return Event('event2');
  }

  IEvent event3() {
    return Event('event3');
  }
}

```
