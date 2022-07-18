
```dart
void main(List<String> argument) async {
  var counters = PrometheusCounters();
  counters.configure(ConfigParams.fromTuples([
    'connection.protocol',
    'http',
    'connection.host',
    'localhost',
    'connection.port',
    8080
  ]));

  await counters.open(null);

  var mycomponent = MyComponentA(counters);
}

class MyComponentA {
  bool consoleLog = true;
  CachedCounters counters;

  MyComponentA(this.counters) {
    if (consoleLog) print('MyComponentA has been created.');
  }

  void myMethod() {
    counters.increment('mycomponent.mymethod.calls', 1);
    var timing = counters.beginTiming('mycomponent.mymethod.exec_time');

    try {
      if (consoleLog) {
        print('Hola amigo');
        print('Bonjour mon ami');
      }
    } finally {
      timing.endTiming();
    }

    counters.dump();
  }
}

```
