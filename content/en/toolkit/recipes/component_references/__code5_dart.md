
```dart
var references = References.fromTuples(
    111, Worker1(),
    222, Worker2()
);

let controller = SimpleController();
controller.setReferences(references);
print(controller.greeting("world"));
controller.unsetReferences();
controller = null;


```

