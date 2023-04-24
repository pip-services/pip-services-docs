
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_mongodb/pip_services3_mongodb.dart';

class MyMongoDbPersistence extends MongoDbPersistence<MyData> {
  MyMongoDbPersistence() : super('mydata');

  Map<String, dynamic> composeFilter(FilterParams? filter) {
    filter = filter ?? FilterParams();
    var key = filter.getAsNullableString('key');

    var filterCondition = <String, dynamic>{};
    if (key != null) {
      filterCondition['key'] = key;
    }
    return filterCondition;
  }

  Map<String, dynamic> composeSort(SortParams? sort) {
    sort = sort ?? SortParams(null);

    var sortCondition = <String, dynamic>{};
    for (var field in sort) {
      sortCondition[field.name!] = field.ascending ? 1 : -1;
    }
    return sortCondition;
  }

  Future<MyData?> getOneRandom(String? correlationId, FilterParams? filter) {
    return super.getOneRandomEx(correlationId, composeFilter(filter));
  }

  Future<List<MyData>> getListByFilter(
      String? correlationId, FilterParams? filter, SortParams? sort) {
    return super.getListByFilterEx(
        correlationId, composeFilter(filter), composeSort(sort));
  }

  Future<DataPage<MyData>> getPageByFilter(String? correlationId,
      FilterParams? filter, PagingParams? paging, SortParams? sort) async {
    return super.getPageByFilterEx(
        correlationId, composeFilter(filter), paging, composeSort(sort));
  }

  Future<int> getCountByFilter(
      String? correlationId, FilterParams? filter) async {
    return super.getCountByFilterEx(correlationId, composeFilter(filter));
  }

  Future deleteByFilter(String? correlationId, FilterParams? filter) {
    return super.deleteByFilterEx(correlationId, composeFilter(filter));
  }
}

```
