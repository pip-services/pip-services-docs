
```dart
import 'package:pip_services3_components/pip_services3_components.dart';

void main(List<String> argument) async {}

class MyComponentA {
  bool _consoleLog = true;

  ICounters _counters;

  MyComponentA(ICounters counters) : _counters = counters {
    if (_consoleLog) {
      print('MyComponentA has been created.');
    }
  }

  void mymethod() {
    _counters.increment('mycomponent.mymethod.calls', 1);
    var timing = _counters.beginTiming('mycomponent.mymethod.exec_time');

    try {
      if (_consoleLog) {
        print('Hola amigo');
        print('Bonjour mon ami');
      }
    } finally {
      timing.endTiming();
    }
  }
}

```
