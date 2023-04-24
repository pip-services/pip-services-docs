
```dart
import 'package:pip_services3_postgres/pip_services3_postgres.dart';

class HelloFriendPersistence2
    extends IdentifiablePostgresPersistence<MyFriend, String>
    implements IMyDataPersistence {
  HelloFriendPersistence2() : super('myfriends3', null);

  @override
  void defineSchema_() {
    clearSchema();
    ensureSchema_('CREATE TABLE IF NOT EXISTS ' +
        tableName_! +
        ' (id TEXT PRIMARY KEY, type TEXT, name TEXT)');
  }

  String _composeFilter(FilterParams? filter) {
    filter ??= FilterParams();
    var type = filter.getAsNullableString('type');
    var content = filter.getAsNullableString('content');

    var filterCondition = '';
    if (type != null) {
      filterCondition += "type='" + type + "'";
    }
    if (content != null) {
      filterCondition += "content='" + content + "'";
    }

    return filterCondition;
  }

  @override
  Future<MyFriend?> getOneRandom(
      String? correlationId, FilterParams filter) async {
    return super.getOneRandom_(correlationId, _composeFilter(filter));
  }
}

```

