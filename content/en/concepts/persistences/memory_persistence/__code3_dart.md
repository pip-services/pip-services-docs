
```dart
var result = await persistence.create(null, dummy1);
print('Created Dummy with ID: ' + result!.id!);

result = await persistence.create(null, dummy2);
print('Created Dummy with ID: ' + result!.id!);

result = await persistence.create(null, dummy3);
print('Created Dummy with ID: ' + result!.id!);
```
