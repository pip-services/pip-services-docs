
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
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


var persister = JsonFilePersister<MyData>();
var myConfig = ConfigParams.fromTuples(['path', './data.json']);
persister.configure(myConfig);

```
