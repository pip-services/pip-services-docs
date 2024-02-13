
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/src/trace/CompositeTracer.dart';

class MyComponent implements IReferenceable {
  CompositeTracer _tracer = new CompositeTracer();

  @override
  void setReferences(IReferences refs) {
    _tracer.setReferences(refs);
  }

  void doSomething(String? correlationId) {
    var timing = _tracer.beginTrace(correlationId, 'mycomponent', 'do_something');
    try {
      ...
      timing.endTrace();
    } catch (ex) {
      timing.endFailure(ex as Exception);
    }
  }
}

```
