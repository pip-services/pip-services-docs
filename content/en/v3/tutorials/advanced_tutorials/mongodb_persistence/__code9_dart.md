
See: [MongoDb module](../../../toolkit_api/dart/mongodb), [Commons module](../../../toolkit_api/dart/commons), [FilterParams](../../../toolkit_api/dart/commons/data/filter_params/)

```dart
// Get all beacons
var filter = FilterParams.fromTuples(['name', 'ABC']);

var page = await _persistence.getPageByFilter('123', filter, null);

```

