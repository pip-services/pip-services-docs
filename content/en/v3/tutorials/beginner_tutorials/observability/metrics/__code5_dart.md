
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_prometheus/pip_services3_prometheus.dart';

void main(List<String> argument) async {
  var countersLog = LogCounters();

  var countersProm = PrometheusCounters();
  countersProm.configure(ConfigParams.fromTuples([
    'connection.protocol',
    'http',
    'connection.host',
    'localhost',
    'connection.port',
    8080
  ]));

  var myComponent = MyComponent();

  myComponent.setReferences(References.fromTuples([
    Descriptor('pip-services', 'counters', 'logger', 'default3', '1.0'),
    countersLog,
    Descriptor('pip-services', 'counters', 'prometheus', 'default4', '1.0'),
    countersProm,
    Descriptor('pip-services', 'logger', 'cached', 'default2', '1.0'),
    MyCachedLogger()
  ]));

  await countersProm.open('123');

  var countExec = 2;

  for (var i = 0; i < countExec; i++) {
    myComponent.mymethod();
  }

  var results = countersLog.getAll();

  print('Metrics to logger');
  printResults(results);

  results = countersProm.getAll();

  print('Metrics to Prometheus');
  printResults(results);
}

void printResults(List<Counter> results) {
  for (var result in results) {
    print('Count: ' + result.count.toString());
    print('Min: ' + result.min.toString());
    print('Max: ' + result.max.toString());
    print('Average: ' + result.average.toString());
    print('Time: ' + result.time.toString());
    print('Name: ' + result.name.toString());
    print('Type: ' + result.type.toString());
    print('-----------------');
  }
}

class MyComponent implements IReferenceable {
  bool _consoleLog = true;

  final CompositeCounters _counters = CompositeCounters();

  MyComponent() {
    if (_consoleLog) {
      print('MyComponent has been created.');
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

  @override
  void setReferences(IReferences references) {
    _counters.setReferences(references);
  }
}

class MyCachedLogger extends CachedLogger {
  @override
  Future save(List<LogMessage> messages) async {
    print('Saving somewhere');
  }
}
```
