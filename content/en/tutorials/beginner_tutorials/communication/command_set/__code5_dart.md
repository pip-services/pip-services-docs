
```dart
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
  }
}
```
