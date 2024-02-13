
```typescript
class SimpleController implements IReferenceable, IUnreferenceable {
...
    public setReferences(references) {
        this._worker = this._references.getOneRequired(
            new Descriptor("*", "worker", "worker1", "*", "1.0")
        );
    }
...
}

let references = References.fromTuples(
    new Descriptor("sample", "worker", "worker1", "111", "1.0"), new Worker1(),
    new Descriptor("sample", "worker", "worker2", "222", "1.0"), new Worker2()
);

let controller = new SimpleController();
controller.setReferences(references);
console.log(controller.greeting("world"));
controller.unsetReferences();
controller = null;


```

