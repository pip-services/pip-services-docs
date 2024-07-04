
```ts
class SimpleController implements IConfigurable, IReferenceable, IUnreferenceable {
  private _worker: any;
  
  private _depedencyResolver = DependencyResolver.fromTuples(
      "worker", new Descriptor("*","worker","*","*","1.0")
  );

  public configure(config) {
    this._depedencyResolver.configure(config);
  }

  public setReferences(references) {
    this._depedencyResolver.setReferences(references);
    this._worker = this._depedencyResolver.getOneRequired("worker");
  }

  public unsetReferences() {
    this._depedencyResolver = new DependencyResolver();
  }
...
}

let references = References.fromTuples(
  new Descriptor("sample", "worker", "worker1", "111", "1.0"), new Worker1("name1"),
  new Descriptor("sample", "worker", "worker2", "222", "1.0"), new Worker2("name1")
);

let config = ConfigParams.fromTuples(
  "dependencies.worker", "*:worker:worker1:111:1.0"
);

let controller = new SimpleController();
controller.configure(config);
controller.setReferences(references);
controller.greeting("world");
controller.unsetReferences();
controller = null;
```
