
```dart
class SimpleController implements IReferenceable, IUnreferenceable {
...
    void setReferences(references) {
        this._worker = this._references.getOneRequired(
            Descriptor("*", "worker", "worker1", "*", "1.0")
        );
    }
...
}

var references = References.fromTuples(
    Descriptor("sample", "worker", "worker1", "111", "1.0"), Worker1(),
    Descriptor("sample", "worker", "worker2", "222", "1.0"), Worker2()
);

var controller = SimpleController();
controller.setReferences(references);
print(controller.greeting("world"));
controller.unsetReferences();
controller = null;


```

