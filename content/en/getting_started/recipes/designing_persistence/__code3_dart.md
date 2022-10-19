
```dart
abstract class IMyDataPersistence {
  Future<MyData?> set(String? correlationId, MyData? item);

  Future<MyData?> create(String? correlationId, MyData? item);

  Future<DataPage<MyData>> getPageByFilter(String? correlationId,
      FilterParams filter, PagingParams? paging, SortParams? sort);

  Future<int> getCountByFilter(String? correlationId, FilterParams filter);

  Future<List<MyData>> getListByFilter(
      String? correlationId, FilterParams filter, SortParams sort);

  Future<MyData?> getOneById(String? correlationId, String id);

  Future<List<MyData>> getListByIds(String? correlationId, List<String> ids);

  Future<MyData?> update(String? correlationId, MyData? item);

  Future<MyData?> updatePartially(
      String? correlationId, String? id, AnyValueMap? data);

  Future<MyData?> deleteById(String? correlationId, String? id);

  Future<void> deleteByIds(String? correlationId, List<String> ids);

  Future<void> deleteByFilter(String? correlationId, FilterParams filter);
}
```
