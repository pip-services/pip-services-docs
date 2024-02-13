
```dart
// Pre-requisites
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

void main(List<String> argument) async {
  // Defining the component 
  var config = ConfigParams.fromTuples([
    'key1.host', '10.1.1.100',
    'key1.port', '8080',
    'key2.host', '10.1.1.100',
    'key2.port', '8082'
  ]);

  var discovery = MemoryDiscovery();
  discovery.configure(config);

  // Adding more parameters 
  await discovery.register('123', 'key3', ConnectionParams.fromTuples([
    'host', 'localhost',
    'port', '8000'
  ])); // Returns {"host": "localhost", "port": "8000"}

  await discovery.register('123', 'key1', ConnectionParams.fromTuples([
    'param1', 'val1',
    'param2', 'val2'
  ]));

  // Resolving connections 
  print(await discovery.resolveOne('123', 'key1'));
  print(await discovery.resolveAll('123', 'key1'));
  print(await discovery.resolveOne('123', 'key3'));
}
```

Which after running produces the following result:

![figure 1](./figure1.png)
