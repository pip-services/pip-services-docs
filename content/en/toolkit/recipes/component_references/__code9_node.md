
```typescript
class SimpleController implements IConfigurable, IReferenceable, IUnreferenceable {
    private _depedencyResolver = DependencyResolver.fromTuples(
        "worker", new Descriptor("*","worker","*","*","1.0")
    );

    public configure(config) {
      this._dependencyResolver.configure(config);
    }

    public setReferences(references) {
      this._dependencyResolver.setReferences(references);
      this._worker = this._dependencyResolver.getOneRequired("worker");
    }

    public unsetReferences() {
      this._dependencyResolver.unsetReferences();
    }
...
}

let references = References.fromTuples(
    new Descriptor("sample", "worker", "worker1", "111", "1.0"), new Worker1(),
    new Descriptor("sample", "worker", "worker2", "222", "1.0"), new Worker2()
);

let config = ConfigParams.fromTuples(
    "dependencies.worker", "*:worker:worker1:111:1.0"
);

let controller = new SimpleController();
controller.configure(config);
controller.setReferences(references);
console.log(controller.greeting("world"));
controller.unsetReferences();
controller = null;


```

