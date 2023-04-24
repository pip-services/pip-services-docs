
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_postgres/pip_services3_postgres.dart';

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

abstract class MyIdentifiablePersistence {
  Future<DataPage<MyIdentifiableObject>> GetPageByFilter(
      String? correlationId, FilterParams? filter, PagingParams? paging);
  Future<MyIdentifiableObject?> create(
      String? correlationId, MyIdentifiableObject? item);
  Future<MyIdentifiableObject?> getOneById(String? correlationId, String id);
  Future<MyIdentifiableObject?> deleteById(String? correlationId, String? id);
}

class MyIdentifiablePostgreSqlPersistence
    extends IdentifiablePostgresPersistence<MyIdentifiableObject, String>
    implements MyIdentifiablePersistence {
  MyIdentifiablePostgreSqlPersistence() : super('mycollection', null);

  String? composeFilter(FilterParams? filter) {
    filter = filter ?? FilterParams();
    var criteria = [];

    var id = filter.getAsString('id');
    if (id.isNotEmpty) {
      criteria.add("id='" + id + "'");
    }

    var name = filter.getAsString('name');
    if (name.isNotEmpty) {
      criteria.add("name='" + name + "'");
    }

    return criteria.isNotEmpty ? criteria.join(' AND ') : null;
  }

  @override
  Future<DataPage<MyIdentifiableObject>> GetPageByFilter(
      String? correlationId, FilterParams? filter, PagingParams? paging) async {
    return await super.getPageByFilter_(
        correlationId, composeFilter(filter), paging, null, null);
  }
}

```