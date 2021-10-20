
```dart
// get all items
var page = await persistence.getPageByFilter(
    null, FilterParams.fromTuples(['id', '1']), PagingParams(0, null, true));

print('Has ' + page.total.toString() + ' items');
```
