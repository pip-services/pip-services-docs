
```dart
import 'package:pip_services3_components/src/state/IStateStore.dart';

class MyComponent {
    IStateStore _store;

    ...

    void doSomething(String? correlationId, String objectId) async {
        // Get state from the store or create a new one if the state wasn't found
        var state = await _store.load(correlationId, 'mycomponent:' + objectId);
        if (state != null) { state = MyState(); }
        ...

        await _store.save(correlationId, 'mycomponent:' + objectId, state);
    }
}

```
