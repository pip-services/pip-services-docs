
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

var persister = JsonFilePersister<MyData>('./data.json');

```
