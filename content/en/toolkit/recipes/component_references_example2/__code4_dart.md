
```dart
class SimpleController implements IReferenceable, IUnreferenceable {
    SimpleController() {}

    void setReferences(references) {
        this._worker = this._references.getOneRequired(111)
    }

    void unsetReferences() {
        this._worker = null;
    }

    void greeting(name) {
        this._worker.do('level',  "Hello, " + (name) + "!");
    }
}


```

