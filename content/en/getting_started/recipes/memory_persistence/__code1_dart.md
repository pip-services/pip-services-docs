
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class Dummy implements IStringIdentifiable, ICloneable {
  @override
  String? id;
  String? key;
  String? content;

  Dummy({String? id, String? key, String? content})
      : id = id,
        key = key,
        content = content;

  Map<String, dynamic> toJson() {
    return <String, dynamic>{'id': id, 'key': key, 'content': content};
  }

  void fromJson(Map<String, dynamic> json) {
    id = json['id'];
    key = json['key'];
    content = json['content'];
  }

  @override
  Dummy clone() {
    return Dummy(id: id, key: key, content: content);
  }
}

var dummy1 = Dummy(id: '1', key: 'key 1', content: 'content 1');
var dummy2 = Dummy(id: 'id 1', key: 'key 2', content: 'Content 1');
var dummy3 = Dummy(id: null, key: 'key 3', content: 'content 3');
```
