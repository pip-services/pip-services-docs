
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_data/pip_services3_data.dart';

class MyMemoryPersistence extends IdentifiableMemoryPersistence<Dummy, String> {
  MyMemoryPersistence() : super();

  bool Function(Dummy item) _composeFilter(FilterParams? filter) {
    filter = filter ?? FilterParams();
    var id = filter.getAsNullableString('id');
    var tempIds = filter.getAsNullableString('ids');
    var ids = tempIds != null ? tempIds.split(',') : null;
    var key = filter.getAsNullableString('key');

    return (item) {
      if (id != null && item.id != id) {
        return false;
      }
      if (ids != null && !ids.contains(item.id)) {
        return false;
      }
      if (key != null && item.key != key) {
        return false;
      }
      return true;
    };
  }

  Future<DataPage<Dummy>> getPageByFilter(
      String? correlationId, FilterParams? filter, PagingParams? paging) async {
    return await super.getPageByFilterEx(
        correlationId, _composeFilter(filter), paging, null, null);
  }

  @override
  Future<Dummy?> getOneById(String? correlationId, String key) async {
    for (var item in items) {
      if (item.key == key) {
        logger.trace(correlationId, 'Found object by key=' + key);
        return item;
      }
    }

    logger.trace(correlationId, 'Cannot find by key=' + key);
  }
}

...

var persistence = MyMemoryPersistence();
```
