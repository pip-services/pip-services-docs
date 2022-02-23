
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';


class FriendsCommandSet extends CommandSet {
  HelloFriendController _controller;

  FriendsCommandSet(HelloFriendController controller)
      : _controller = controller,
        super() {
    addCommand(_makeGreeting());
  }

  ICommand _makeGreeting() {
    Future<dynamic> Function(String correlationId, Parameters args) action =
        (String? correlationId, Parameters args) async {
      var name = args.getAsString('name');
      return _controller.greeting(name);
    };

    return Command(
        'greeting',
        ObjectSchema(true).withRequiredProperty('name', TypeCode.String),
        action);
  }
}

```
