
```dart
for (var i = 0; i < 20; i++) {
  var data = MyData.from(
      i.toString(), 'key ' + i.toString(), 'content ' + i.toString());
  var res = await persistence.create(null, data);
}
```
