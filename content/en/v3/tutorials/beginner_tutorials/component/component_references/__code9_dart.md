
```dart

class SimpleController
    implements IConfigurable, IReferenceable, IUnreferenceable {
  dynamic _worker;

  var _dependencyResolver = DependencyResolver.fromTuples(
      ['worker', Descriptor('*', 'worker', '*', '*', '1.0')]);

  @override
  void setReferences(references) {
    _dependencyResolver.setReferences(references);
    _worker = _dependencyResolver.getOneRequired('worker');
  }

  @override
  void configure(ConfigParams config) {
    _dependencyResolver.configure(config);
  }

  @override
  void unsetReferences() {
    _dependencyResolver = DependencyResolver();
  }
...
}

var references = References.fromTuples([
    Descriptor('sample', 'worker', 'worker1', '111', '1.0'),
    Worker1(),
    Descriptor('sample', 'worker', 'worker2', '222', '1.0'),
    Worker2()
  ]);

var config = ConfigParams.fromTuples(
    ['dependencies.worker', '*:worker:worker1:111:1.0']);

SimpleController? controller = SimpleController();
controller.configure(config);
controller.setReferences(references);
controller.greeting('world');
controller.unsetReferences();
controller = null;

```

