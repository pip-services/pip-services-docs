
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_mysql/pip_services3_mysql.dart';


class HelloFriendPersistence1
    extends IdentifiableMySqlPersistence<MyFriend, String>
    implements IMyDataPersistence {
  HelloFriendPersistence1() : super('myfriends3', null);

  @override
  void defineSchema_() {
    clearSchema();
    ensureSchema_('CREATE TABLE IF NOT EXISTS `' +
        tableName_! +
        '` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)');
  }

  String _composeFilter(FilterParams? filter) {
    filter ??= FilterParams();
    var type = filter.getAsNullableString('type');
    var name = filter.getAsNullableString('name');

    var filterCondition = '';
    if (type != null) {
      filterCondition += "type='" + type + "'";
    }
    if (name != null) {
      filterCondition += "name='" + name + "'";
    }

    return filterCondition;
  }

  @override
  Future<MyFriend?> getOneRandom(
      String? correlationId, FilterParams filter) async {
    return await getOneRandom_(correlationId, _composeFilter(filter));
  }
}
```

