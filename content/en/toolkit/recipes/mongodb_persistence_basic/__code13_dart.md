
```dart
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
```
