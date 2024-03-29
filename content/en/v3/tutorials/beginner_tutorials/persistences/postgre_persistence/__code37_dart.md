
```dart
class MyPostgresPersistence
    extends IdentifiableJsonPostgresPersistence<MyData, String> {
  MyPostgresPersistence() : super('mydata_json2', null);

  @override
  void defineSchema_() {
    // clear all previously autogenerated schemas
    clearSchema();
    // create a table
    ensureTable_();
    // create an index
    ensureIndex_(
        tableName_! + '_json_key', {"(data->>'key')": 1}, {'unique': true});
  }

  Future<MyData?> getOneRandom(String correlationId, String filter) async {
    return await super.getOneRandom_(correlationId, filter);
  }

  Future<List<MyData>> getListByFilter(
      String correlationId, String filter, sort, select) async {
    return await super.getListByFilter_(correlationId, filter, sort, select);
  }

  Future<int> getCountByFilter(String correlationId, String filter) async {
    return await super.getCountByFilter_(correlationId, filter);
  }

  Future<DataPage<MyData>> getPageByFilter(String correlationId, String filter,
      PagingParams paging, sort, select) async {
    return await super
        .getPageByFilter_(correlationId, filter, paging, sort, select);
  }

  Future<void> deleteByFilter(String correlationId, String filter) async {
    return await super.deleteByFilter_(correlationId, filter);
  }
}
```
