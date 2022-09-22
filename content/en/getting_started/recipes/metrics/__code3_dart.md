
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

void main(List<String> argument) async {
  var counters = LogCounters();
  counters.setReferences(References.fromTuples([
    Descriptor('pip-services', 'logger', 'console', 'default', '1.0'),
    ConsoleLogger()
  ]));

  var mycomponentLog = MyComponent(counters);

  var countExec = 2;

  for (var i = 0; i < countExec; i++) {
    mycomponentLog.mymethod();
  }

  var resultLog = counters.getAll();

  print('Metrics');

  for (var res in resultLog) {
    print('Count: ' + res.count.toString());
    print('Min: ' + res.min.toString());
    print('Max: ' + res.max.toString());
    print('Average: ' + res.average.toString());
    print('Time: ' + res.time.toString());
    print('Name: ' + res.name.toString());
    print('Type: ' + res.type.toString());
    print('-----------------');
  }
}
```
