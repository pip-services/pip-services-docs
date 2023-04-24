
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

void main(List<String> arguments) async {}

class MyPersistence implements IConfigurable {
  ...
  String? _username;
  String? _password;

  @override
  void configure(ConfigParams config) {
    ...
    var credentials = CredentialParams.fromConfig(config.getSection('credential'));
    _username = credentials!.getUsername();
    _password = credentials.getPassword();
  }
}

```
