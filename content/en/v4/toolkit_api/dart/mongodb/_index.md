---
type: docs
title: "MongoDB module"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mongodb-dart"
no_list: true
weight: 500
description: > 
 A set of components used to implement MongoDB persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create MongoDB persistence components.
- [**Connect**](connect) - connection component to configure MongoDB connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services4_mongodb: version
```

Now you can install package from the command line:
```bash
pub get
```

As an example, lets create persistence for the following data object:

```dart
import 'package:pip_services4_commons/src/data/IIdentifiable.dart';

class MyObject implements IIdentifiable<String> {
  @override
  String? id;
  String key;
  int value;
}

```

The persistence component shall implement the following interface with a basic set of CRUD operations:

```dart
abstract class IMyPersistence {
    Future<DataPage<MyData>> getPageByFilter(String? context, FilterParams filter, PagingParams paging);
    
    getOneById(String? cibtext, String id);
    
    getOneByKey(String? context, String key;
    
    create(String? context, MyObject item);
    
    update(String? context, MyObject item);
    
    deleteById(String? context, String id);
}
```

To implement mongodb persistence component you shall inherit `IdentifiableMongoDbPersistence`. 
Most CRUD operations will come from the base class. You only need to override `getPageByFilter` method with a custom filter function.
And implement a `getOneByKey` custom persistence method that doesn't exist in the base class.

```dart
import 'package:pip_services4_commons/src/data/FilterParams.dart';
import 'package:pip_services4_commons/src/data/PagingParams.dart';
import 'package:pip_services4_mongodb/src/persistence/IdentifiableMongoDbPersistence.dart';


class MyMongoDbPersistence extends IdentifiableMongoDbPersistence {
  MyMongoDbPersistence():super("myobjects"){
    this.ensureIndex({{ "key": 1 }, { "unique": true }});
  }

  composeFilter(FilterParams filter) {
    filter = filter!=null ? filter : new FilterParams();
    
    List criteria = [];

    String id = filter.getAsNullableString('id');
    if (id != null)
        criteria.add({ "_id": id });

    String tempIds = filter.getAsNullableString("ids");
    if (tempIds != null) {
        List ids = tempIds.split(",");
        criteria.add({ "_id": { "\$in": ids } });
    }

    String key = filter.getAsNullableString("key");
    if (key != null)
        criteria.add({ "key": key });

    return criteria.length > 0 ? { "\$and": criteria } : null;
  }
  
  Future<DataPage<MyData>> getPageByFilter(String? contexgt, FilterParams filter, PagingParams paging){
    return super.getPageByFilterEx(context, composeFilter(filter), paging, null);
  } 
  
  getOneByKey(String? context, String key) async {
    
    Map<String, String> filter = { key: key };

    Map<String, dynamic> item = await this.collection.findOne(filter);

    if (item == null)
      this.logger.trace(context, "Nothing found from %s with key = %s", [this.collectionName, key]);
    else
      this.logger.trace(context, "Retrieved from %s with key = %s", [this.collectionName, key]);

    item = this.convertToPublic(item);
  }
}
```

The configuration for your microservice that includes mongodb persistence may look the following way:

```yaml
...
{{#if MONGODB_ENABLED}}
- descriptor: pip-services:connection:mongodb:con1:1.0
  connection:
    uri: {{{MONGO_SERVICE_URI}}}
    host: {{{MONGO_SERVICE_HOST}}}{{#unless MONGO_SERVICE_HOST}}localhost{{/unless}}
    port: {{MONGO_SERVICE_PORT}}{{#unless MONGO_SERVICE_PORT}}27017{{/unless}}
    database: {{MONGO_DB}}{{#unless MONGO_DB}}app{{/unless}}
  credential:
    username: {{MONGO_USER}}
    password: {{MONGO_PASS}}
    
- descriptor: myservice:persistence:mongodb:default:1.0
  dependencies:
    connection: pip-services:connection:mongodb:con1:1.0
  collection: {{MONGO_COLLECTION}}{{#unless MONGO_COLLECTION}}myobjects{{/unless}}
{{/if}}
...
```

