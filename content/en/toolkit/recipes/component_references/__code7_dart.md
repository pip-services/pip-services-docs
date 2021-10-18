
```dart
class SimpleController implements IReferenceable, IUnreferenceable {
...
  @override
  void setReferences(references) {
    _worker = references
        .getOneRequired(Descriptor('*', 'worker', 'worker1', '*', '1.0'));
  }
...
}

  var references = References.fromTuples([
    Descriptor('sample', 'worker', 'worker1', '111', '1.0'),
    Worker1(),
    Descriptor('sample', 'worker', 'worker2', '222', '1.0'),
    Worker2()
  ]);

  SimpleController? controller = SimpleController();
  controller.setReferences(references);
  controller.greeting('world');
  controller.unsetReferences();
  controller = null;


```

