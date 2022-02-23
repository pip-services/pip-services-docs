
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

class HelloFriendController implements IConfigurable, ICommandable {
  String _defaultName = 'World';
  FriendsCommandSet? _commandSet;

  HelloFriendController() {
    _defaultName = 'Pip User';
  }

  @override
  void configure(ConfigParams config) {
    _defaultName = config.getAsStringWithDefault('default_name', _defaultName);
  }

  @override
  CommandSet getCommandSet() {
    _commandSet ??= FriendsCommandSet(this);

    return _commandSet!;
  }

  String greeting(String? name) {
    return 'Hello, ${name ?? _defaultName}';
  }
}

```
