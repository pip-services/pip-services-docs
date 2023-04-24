
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_mongodb/pip_services3_mongodb.dart';

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

class MyMongoDbPersistence extends MongoDbPersistence<MyData> {
  MyMongoDbPersistence() : super('mydata');

  Map<String, dynamic> composeFilter(FilterParams? filter) {
    filter = filter ?? FilterParams();
    var key = filter.getAsNullableString('key');

    var filterCondition = <String, dynamic>{};
    if (key != null) {
      filterCondition['key'] = key;
    }
    return filterCondition;
  }

  Future<MyData?> update(String? correlationId, MyData? item) async {
    if (item == null || item.id == null) {
      return null;
    }
    var jsonMap = convertFromPublic(item, createUid: false);
    jsonMap?.remove('_id');
    var filter = {'_id': item.id};
    var update = {r'$set': jsonMap};
    var result = await collection?.findAndModify(
        query: filter, update: update, returnNew: true, upsert: false);

    return result != null ? convertToPublic(result) : null;
  }

  Future<List<MyData>> getListByFilter(
      String? correlationId, FilterParams? filter, SortParams? sort) {
    return super.getListByFilterEx(
        correlationId, composeFilter(filter), composeSort(sort));
  }

  Future deleteByFilter(String? correlationId, FilterParams? filter) {
    return super.deleteByFilterEx(correlationId, composeFilter(filter));
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

  var persistence = MyMongoDbPersistence();

  var config = ConfigParams.fromTuples([
    'connection.host',
    'localhost',
    'connection.port',
    27017,
    'connection.database',
    'pipdatabase'
  ]);
  persistence.configure(config);

  await persistence.open(null);
  await persistence.clear(null);

  // 1 - Create
  var result = await persistence.create(null, data1);
  printResult('Create', result!);

  // 2 - Retrieve
  var items = await persistence.getListByFilter(
      '123', FilterParams.fromTuples(['key', 'key 1']), null);
  printResult('Get by id', items[0]);

  // 3 - Update
  items[0].content = 'new content 2';
  items[0].key = 'key 2';

  var update = await persistence.update(null, items[0]);
  printResult('Update', update!);

  // 4 - Delete
  await persistence.deleteByFilter(
      null, FilterParams.fromTuples(['key', 'key 1']));
  await persistence.close(null);
}

```
