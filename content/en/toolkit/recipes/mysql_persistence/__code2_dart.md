
```dart
class MyData implements IStringIdentifiable, ICloneable {
  @override
  String? id;
  String? key;
  String? content;

  MyData();

  MyData.from(this.id, this.key, this.content);

  Map<String, dynamic> toJson() {
    return <String, dynamic>{'id': id, 'key': key, 'content': content};
  }

  void fromJson(Map<String, dynamic> json) {
    id = json['id'];
    key = json['key'];
    content = json['content'];
  }

  @override
  MyData clone() {
    return MyData.from(id, key, content);
  }
}

```
