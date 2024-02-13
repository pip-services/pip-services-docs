
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

void main(List<String> arguments) async {}

class MyPersistence implements IConfigurable, IReferenceable {
  var _connectionResolver = ConnectionResolver();
  String? _host;
  int? _port;

  @override
  void configure(ConfigParams config) {
    _connectionResolver.configure(config);
  }

  @override
  void setReferences(IReferences refs) async {
    _connectionResolver.setReferences(refs);

    var connection = await _connectionResolver.resolve(null);
    _host = connection!.getHost();
    _port = connection.getPortWithDefault(27017);
  }
}


```
