
```dart
class SimpleController implements IReferenceable, IUnreferenceable {
  dynamic _worker;

  SimpleController();

  @override
  void setReferences(references) {
    _worker = references.getOneRequired(111);
  }

  @override
  void unsetReferences() {
    _worker = null;
  }

  void greeting(name) {
    _worker.do_('level', 'Hello, ' + (name) + '!');
  }
}


```

