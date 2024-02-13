
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class FriendsCommandSet extends CommandSet {
  HelloFriendController _controller;

  FriendsCommandSet(HelloFriendController controller)
      : _controller = controller,
        super() {
    addCommand(_makeGreeting());
  }

  ICommand _makeGreeting() {
    return Command('greeting', null,
        (String? correlationId, Parameters args) async {
      var name = args.getAsString('name');
      var res = _controller.greeting(name);
      return res;
    });
  }
}

```
