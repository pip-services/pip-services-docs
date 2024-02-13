
```dart
class MyIdentifiableMySqlPersistence
    extends IdentifiableMySqlPersistence<MyData, String>
    implements IMyDataPersistence {
  MyIdentifiableMySqlPersistence() : super('mydata', null);

  @override
  void defineSchema_() {
    clearSchema();
    ensureSchema_('CREATE TABLE IF NOT EXISTS `' +
        tableName_! +
        '` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)');
    ensureIndex_(tableName_! + '_key', {'key': 1}, {'unique': true})
  }

  String _composeFilter(FilterParams? filter) {
    filter ??= FilterParams();
    var key = filter.getAsNullableString('key');
    var content = filter.getAsNullableString('content');

    var filterCondition = '';
    if (key != null) {
      filterCondition += "'key'='" + key + "'";
    }
    if (content != null) {
      filterCondition += "content='" + content + "'";
    }

    return filterCondition;
  }

  String? _composeSort(SortParams? sort) {
    sort ??=  SortParams(null);
    var composeSort = '';

    for (var i = 0; i < sort.length; i++) {
      composeSort += sort[i].name! + (sort[i].ascending ? ' ASC' : ' DESC');
    }

    return composeSort != '' ? composeSort : null;
  }

  @override
  Future<DataPage<MyData>> getPageByFilter(String? correlationId,
      FilterParams filter, PagingParams? paging, SortParams? sort) {
    return super.getPageByFilter_(correlationId, _composeFilter(filter), paging, _composeSort(sort), null);
  }

    @override
  Future<int> getCountByFilter(String? correlationId, FilterParams filter) {
    return super.getCountByFilter_(correlationId, _composeFilter(filter));
  }

    @override
  Future<List<MyData>> getListByFilter(
      String? correlationId, FilterParams filter, SortParams sort) {
    return super.getListByFilter_(correlationId, _composeFilter(filter), _composeSort(sort), null);
  }

  @override
  Future<void> deleteByFilter(String? correlationId, FilterParams filter) {
    return super.deleteByFilter_(correlationId, _composeFilter(filter));
  }
}
```
