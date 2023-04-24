
```dart
// get all items
var page = await persistence.getPageByFilter(null, FilterParams.fromTuples(['id', 'id 1']), PagingParams(0, null, null));

for (var item in page.data) {
  print('${item.id}, ${item.key}, ${item.content}');
}
```
