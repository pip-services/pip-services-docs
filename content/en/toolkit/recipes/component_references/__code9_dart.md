
```dart

class SimpleController implements IConfigurable, IReferenceable, IUnreferenceable {
    void _depedencyResolver = DependencyResolver.fromTuples(
        "worker", Descriptor("*","worker","*","*","1.0")
    );

    void configure(config) {
      this._dependencyResolver.configure(config);
    }

    void setReferences(references) {
      this._dependencyResolver.setReferences(references);
      this._worker = this._dependencyResolver.getOneRequired("worker");
    }

    void unsetReferences() {
      this._dependencyResolver.unsetReferences();
    }
...
}

var references = References.fromTuples(
    Descriptor("sample", "worker", "worker1", "111", "1.0"), Worker1(),
    Descriptor("sample", "worker", "worker2", "222", "1.0"), Worker2()
);

var config = ConfigParams.fromTuples(
    "dependencies.worker", "*:worker:worker1:111:1.0"
);

var controller = SimpleController();
controller.configure(config);
controller.setReferences(references);
print(controller.greeting("world"));
controller.unsetReferences();
controller = null;

```

