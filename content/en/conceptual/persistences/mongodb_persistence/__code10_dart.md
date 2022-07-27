
```dart
    Future<List<MyData>> getListByFilter(
    String? correlationId, FilterParams? filter, SortParams? sort) {
  return super.getListByFilterEx(
      correlationId, composeFilter(filter), composeSort(sort));
    }
```
