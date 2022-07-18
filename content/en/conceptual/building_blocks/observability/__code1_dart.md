
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

class MyComponent implements IReferenceable {
   CompositeLogger _logger = CompositeLogger();

  @override
  void setReferences(IReferences refs) {
    _logger.setReferences(refs);
  }

  void doSomething(String? correlationId) {
    _logger.debug(correlationId, 'Did somethin...');
    ...
  }
}

```
