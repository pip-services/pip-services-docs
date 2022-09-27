
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

class MyPersistence implements IConfigurable {
  String? _host;
  int? _port;

  void configure(ConfigParams config) {
    var connection =
        ConnectionParams.fromConfig(config.getSection('connection'));
    _host = connection!.getHost();
    _port = connection.getPortWithDefault(27017);
  }
}

```
