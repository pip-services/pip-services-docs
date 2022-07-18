
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_mongodb/pip_services3_mongodb.dart';

class MyIdentifiableMongoDbPersistence
    extends IdentifiableMongoDbPersistence<MyData, String> {
  MyIdentifiableMongoDbPersistence() : super('mydata');
}

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

void printResult(String operationName, MyData res) {
  print('==================== $operationName ====================');
  print('MyData with id: ${res.id}');
  print('MyData key: ${res.key}');
  print('MyData content: ${res.content}');
}

void main(List<String> arguments) async {
  var data1 = MyData.from('1', 'key 1', 'content 1');

  var persistence = MyIdentifiableMongoDbPersistence();
  var config = ConfigParams.fromTuples([
    'connection.host', 'localhost',
    'connection.port', 27017,
    'connection.database', 'pipdatabase'
  ]);
  persistence.configure(config);

  await persistence.open(null);
  await persistence.clear(null);

  // CRUD
  // 1 - Create
  var result = await persistence.create(null, data1);
  printResult('Create', result!);

  // 2 - Retrieve
  var item = await persistence.getOneById('123', '1');
  printResult('Get by id', item!);

  // 3 - Update
  var update = await persistence.update(
      null, MyData.from('1', 'key 1', 'new content 1'));
  printResult('Update', update!);

  // 4 - Delete
  var deleted = await persistence.deleteById(null, '1');
  printResult('Delete by id', deleted!);

  await persistence.close(null);
  await persistence.close(null);
}

```
