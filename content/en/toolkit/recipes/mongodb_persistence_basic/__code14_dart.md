
```dart
  Future<DataPage<MyData>> getPageByFilter(String? correlationId,
      FilterParams? filter, PagingParams? paging, SortParams? sort) async {
    return super.getPageByFilterEx(
        correlationId, composeFilter(filter), paging, composeSort(sort));
  }
```
