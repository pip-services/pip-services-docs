
```dart
// Get all beacons
var filter = FilterParams.fromTuples(['name', 'ABC']);

var page = await _persistence.getPageByFilter('123', filter, null);

```

