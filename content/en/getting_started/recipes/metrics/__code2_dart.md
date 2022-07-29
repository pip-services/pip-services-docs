
```dart
import 'package:pip_services3_components/pip_services3_components.dart';

void main(List<String> argument) async {
  var countersCached = MyCachedCounters();

  var mycomponentCached = MyComponentA(countersCached);

  var countExec = 2;

  for (var i = 0; i < countExec; i++) {
    mycomponentCached.mymethod();
  }

  var resultCached = countersCached.getAll();

  print('Metrics');

  for (var res in resultCached) {
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

class MyCachedCounters extends CachedCounters {
  @override
  void save(List<Counter> counters) {
    print('Saving ' + counters[0].name + ' and ' + counters[1].name);
  }
}
 
```
