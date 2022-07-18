
```dart
void myMethod() {
  var timing = counters.beginTiming('mycomponent.mymethod.exec_time');

  try {
    // our task
  } finally {
    timing.endTiming();
  }

  counters!.dump();
}

```
