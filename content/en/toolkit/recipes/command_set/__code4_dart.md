
```dart
class MyCommandSet extends CommandSet {
  MyCommandSet() : super() {
    addCommands([command2(), command3()]);
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
