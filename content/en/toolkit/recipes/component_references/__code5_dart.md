
```dart
var references = References.fromTuples(
    [111, Worker1(), 222, Worker2()]
);

SimpleController? controller = SimpleController();
controller.setReferences(references);
controller.greeting('world');
controller.unsetReferences();
controller = null;


```

