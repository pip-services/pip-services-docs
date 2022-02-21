
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';


class MyCommandSet extends CommandSet {
  MyCommandSet() : super() {
    addCommand(command1());
  }

  ICommand command1() {
    return Command('command1', null,
        (String? correlationId, Parameters args) async => print('command 1'));
  }
}
```
