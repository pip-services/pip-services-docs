
```dart
import 'package:pip_services3_mongodb/pip_services3_mongodb.dart';

class MyObject {
  String key;
  String name;

  MyObject.from(this.key, this.name);

  Map<String, dynamic> toJson() {
    return <String, dynamic>{'key': key, 'name': name};
  }

  void fromJson(Map<String, dynamic> json) {
    key = json['key'];
    name = json['name'];
  }

  MyObject clone() {
    return MyObject.from(key, name);
  }
}

class MyMongoDbPersistence extends MongoDbPersistence<MyObject> {
  MyMongoDbPersistence() : super('mycollection');

  Future<MyObject?> getByName(String correlationId, String name) async {
    var criteria = {name: name};
    var res = await super.getListByFilterEx(correlationId, criteria, null);
    return res.isNotEmpty ? res[0] : null;
  }

  Future<MyObject?> createDefault(String correlationId, String name) async {
    name = name ?? 'unknown';
    var key = name.toLowerCase().replaceAll(' #\$%^&', '_');
    var item = MyObject.from(key, name);

    var jsonMap = convertFromPublic(item, createUid: false);
    var result = await collection!.insertOne(jsonMap!);

    logger.trace(correlationId, 'Created in %s with id = %s',
        [collectionName, result.id]);

    return convertToPublic(jsonMap);
  }

  Future<void> deleteByName(String correlationId, String name) async {
    var criteria = {name: name};
    await super.deleteByFilterEx(correlationId, criteria);
  }
}
```