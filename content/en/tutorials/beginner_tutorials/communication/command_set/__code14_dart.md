
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> argument) async {
  var mySet = MyCommandSet();

  await mySet.execute(null, 'command1', Parameters());
  await mySet.execute(null, 'command2', Parameters());
  await mySet.execute(null, 'command3', Parameters());
  await mySet.execute(null, 'command1B', Parameters());
}

class MyCommandSetB extends CommandSet {
  MyCommandSetB() : super() {
    addCommand(command1B());
  }

  ICommand command1B() {
    return Command('command1B', null,
        (String? correlationId, Parameters args) async => print('command 1B'));
  }
}

class MyCommandSet extends CommandSet {
  MyCommandSet() : super() {
    addCommandSet(MyCommandSetB());
    addCommand(command1());
    addCommands([command2(), command3()]);
  }

  ICommand command1() {
    return Command('command1', null,
        (String? correlationId, Parameters args) async => print('command 1'));
  }

  ICommand command2() {
    return Command('command2', null,
        (String? correlationId, Parameters args) async => print('command 2'));
  }

  ICommand command3() {
    return Command('command3', null,
        (String? correlationId, Parameters args) async => print('command 3'));
  }
}

```

After running it, this code produces the following output:         
   
![figure 1](./figure1.png) 
