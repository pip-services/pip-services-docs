
```dart
// get all items
var page = await persistence.getPageByFilter(
    null, null, PagingParams(0, null, true));
    
print('Has ' + page.total.toString() + ' items');

for (var item in page.data) {
  print('${item.id}, ${item.key}, ${item.content}');
}
```
