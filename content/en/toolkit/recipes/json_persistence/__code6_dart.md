
```dart
import 'package:pip_services3_data/pip_services3_data.dart';

// Custom json serializable data
class MyData {
  String? key;
  String? value;

  MyData({this.key, this.value});

  void fromJson(item) {
    key = item['key'];
    value = item['value'];
  }

  Map<String, String?> toJson() => {'key': key, 'value': value};
}

// Create the JSON persistence component
var persister = JsonFilePersister<MyData>('./data.json');

// Save data on the JSON persistence object
await persister.save('123', <MyData>[
  MyData(key: 'key1', value: 'value1'),
  MyData(key: 'key2', value: 'value2')
]);

// Read data from the JSON persistence object
var items = await persister.load('123');

print(items);
```
