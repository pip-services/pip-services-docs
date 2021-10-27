
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_messaging/pip_services3_messaging.dart';

class MyComponent implements IReferenceable {
  CompositeCounters _counters = CompositeCounters();

  @override
  void setReferences(IReferences refs) {
    _counters.setReferences(refs);
  }

  void onMessage(MessageEnvelope message) {
    var timing = _counters.beginTiming('mycomponent:msg_time');
    try {
      _counters.increment('mycomponent:msg_count', 1);
      ...
    } catch (ex) {
      _counters.increment('mycomponent:msg_errors', 1);
    } finally {
      timing.endTiming();
    }
  }
}

```
