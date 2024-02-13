
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class HelloFriendController implements IConfigurable, IReferenceable {
  String defaultName;
  IMyDataPersistence? persistence;

  HelloFriendController() : defaultName = 'Pip User';

  @override
  void configure(ConfigParams config) {
    defaultName = config.getAsStringWithDefault('default_name', defaultName);
  }

  @override
  void setReferences(IReferences references) {
    persistence = references.getOneRequired(
        Descriptor('hello-friend', 'persistence', '*', '*', '1.0'));
  }

  Future<String> greeting() async {
    var filter = FilterParams.fromTuples(['type', 'friend']);
    var selectedFilter = await persistence!.getOneRandom(null, filter);
    var name = selectedFilter?.name ?? '';

    return 'Hello, ' + name + ' !';
  }

  Future<MyFriend?> create(String? correlationId, MyFriend? item) async {
    var res = await persistence!.create(correlationId, item);
    return res;
  }
}

abstract class IMyDataPersistence {
  Future<MyFriend?> getOneRandom(String? correlationId, FilterParams filter);
  Future<MyFriend?> create(String? correlationId, MyFriend? item);
}

```

