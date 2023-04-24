
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class MyIdentifiableObject implements IIdentifiable<String> {
  @override
  String? id;
  String key;
  String name;

  MyIdentifiableObject.from(this.id, this.key, this.name);

  Map<String, dynamic> toJson() {
    return <String, dynamic>{'id': id, 'key': key, 'name': name};
  }

  void fromJson(Map<String, dynamic> json) {
    key = json['key'];
    name = json['name'];
  }

  MyIdentifiableObject clone() {
    return MyIdentifiableObject.from(id, key, name);
  }
}

```