
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_prometheus/pip_services3_prometheus.dart';

void main(List<String> argument) async {
  var mycomponent = MyComponentA();

  // Create an instance of PrometheusCounters and configure it
  var counters = PrometheusCounters();
  counters.configure(ConfigParams.fromTuples([
    'connection.protocol',
    'http',
    'connection.host',
    'localhost',
    'connection.port',
    8080
  ]));

  // Create an instance of PrometheusMetricsService and configure it
  var service = PrometheusMetricsService();
  service.configure(ConfigParams.fromTuples([
    'connection.protocol',
    'http',
    'connection.host',
    'localhost',
    'connection.port',
    8080
  ]));

  // Create the references
  var context_info = ContextInfo();
  context_info.name = 'Test';
  context_info.description = 'This is a test container';

  var references = References.fromTuples([
    Descriptor('pip-services', 'context-info', 'default', 'default', '1.0'),
    context_info,
    Descriptor('pip-services', 'counters', 'prometheus', 'default', '1.0'),
    counters,
    Descriptor(
        'pip-services', 'metrics-service', 'prometheus', 'default', '1.0'),
    service
  ]);

  service.setReferences(references);
  counters.setReferences(references);
  mycomponent.setReferences(references);

  // Connect the service and counters objects
  await service.open(null);
  await counters.open(null);

  //  Run "mymethod"
  var countExec = 2;

  for (var i = 0; i < countExec; i++) {
    mycomponent.myMethod();
  }

  // Get the counters
  var result = counters.getAll();

  // close service for closing Http server
  await service.close(null);
  // close counter, for closing Http client for prometheus
  await counters.close(null);
}

class MyComponentA implements IReferenceable {
  bool consoleLog = true; // console log flag
  CachedCounters? counters;

  MyComponentA() {
    if (consoleLog) print('MyComponentA has been created.');
  }

  @override
  void setReferences(IReferences references) {
    counters = references.getOneRequired<CachedCounters>(
        Descriptor('*', 'counters', '*', '*', '*'));
  }

  void myMethod() {
    // Count the number of calls to this method
    counters!.increment('mycomponent.mymethod.calls', 1);

    // Measure execution time
    var timing = counters!.beginTiming('mycomponent.mymethod.exec_time');

    // Task for this method: print greetings in two languages.
    try {
      if (consoleLog) {
        print('Hola amigo');
        print('Bonjour mon ami');
      }
    } finally {
      timing.endTiming();
    }

    // Save the values of counters
    counters!.dump();
  }
}

```
