
```typescript
class SimpleController implements IReferenceable, IUnreferenceable {
    constructor() {}

    public setReferences(references) {
        this._worker = this._references.getOneRequired(111)
    }
    public unsetReferences() {
        this._worker = null;
    }
    public greeting(name) {
        this._worker.do('level',  "Hello, " + (name) + "!");
    }
}
  

```

