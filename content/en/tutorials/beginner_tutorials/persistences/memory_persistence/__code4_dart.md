
```dart
// get one item
var page = await persistence.getPageByFilter(null,
    FilterParams.fromTuples(['key', 'key 2']), PagingParams(0, null, true));

print('Has ' + page.total.toString() + ' items');

for (var item in page.data) {
  print('${item.id}, ${item.key}, ${item.content}');
}
```
