
```dart
  Future<int> getCountByFilter(
      String? correlationId, FilterParams? filter) async {
    return super.getCountByFilterEx(correlationId, composeFilter(filter));
  }

```
