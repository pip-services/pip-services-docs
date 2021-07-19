---
type: docs
title: "Data module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
no_list: true
weight: 30
description: > 
    Persistence components for for Dart 

    
    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It contains generic interfaces for data access components as well as abstract implementations for in-memory and file persistence.      
    
    The persistence components come in two kinds. The first kind is a basic persistence that can work with any object types and provides only minimal set of operations. The second kind is so called "identifieable" persistence with works with "identifable" data objects, i.e. objects that have unique ID field. The identifiable persistence provides a full set or CRUD operations that covers most common cases.


---


### Packages

The module contains the following packages:

* [**Core**](core) - interfaces for data access components. 
* [**Persistence**](persistence) - in-memory and file persistence components, as well as JSON persister class.


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_data: version
```

Now you can install package from the command line:
```bash
pub get
```

For example, you need to implement persistence for a data object defined as following.

```dart
import 'package:pip_services3_commons/src/data/IIdentifiable.dart';

class MyObject implements IIdentifiable<String> {
  String id;
  String key;
  int value;
}

```

Our persistence component shall implement the following interface with a basic set of CRUD operations.

```dart
abstract class IMyPersistence {
    void getPageByFilter(String correlationId, FilterParams filter, PagingParams paging);
    
    getOneById(String correlationId, String id);
    
    getOneByKey(String correlationId, String key;
    
    create(String correlationId, MyObject item);
    
    update(String correlationId, MyObject item);
    
    deleteById(String correlationId, String id);
}
```

To implement in-memory persistence component you shall inherit `IdentifiableMemoryPersistence`. 
Most CRUD operations will come from the base class. You only need to override `getPageByFilter` method with a custom filter function.
And implement a `getOneByKey` custom persistence method that doesn't exist in the base class.

```dart
import 'package:pip_services3_data/src/persistence/IdentifiableMemoryPersistence.dart';
import 'package:pip_services3_commons/src/data/FilterParams.dart';
import 'package:pip_services3_commons/src/data/PagingParams.dart';

class MyMemoryPersistence extends IdentifiableMemoryPersistence {
  MyMemoryPersistence(): super() {}

  composeFilter(FilterParams filter) {
    filter = filter != null ? filter : FilterParams();
    
    String id = filter.getAsNullableString("id");
    String tempIds = filter.getAsNullableString("ids");
    List<String> ids = tempIds != null ? tempIds.split(",") : null;
    String key = filter.getAsNullableString("key");

    return (item) {
      if (id != null && item.id != id)
        return false;
      if (ids != null && ids.indexOf(item.id) < 0)
        return false;
      if (key != null && item.key != key)
            return false;
      return true;
    };
  }
  
  Future<DataPage<MyData>> getPageByFilter(String correlationId, FilterParams filter, PagingParams paging){
    return super.getPageByFilterEx(correlationId, composeFilter(filter), paging, null);
  }  
  
  Future<String> getOneByKey(String correlationId, String key) {
    
    final item =
      this._items.firstWhere((item) =>
          item.name == item.key == key,
          orElse: () {
            return null;
    });
    
    if (item != null) {
      this._logger.trace(correlationId, "Found object by key=%s", key);
    } else {
      this._logger.trace(correlationId, "Cannot find by key=%s", key);
    }
  }
}
```

It is easy to create file persistence by adding a persister object to the implemented in-memory persistence component.

```dart
import 'package:pip_services3_commons/src/config/ConfigParams.dart';
import 'package:pip_services3_data/src/persistence/JsonFilePersister.dart';


class MyFilePersistence extends MyMemoryPersistence {
  JsonFilePersister<MyObject> _persister;

  MyFilePersistence([String path]):super(){
    this._persister = new JsonFilePersister<MyObject>(path);
    this._loader = this._persister;
    this._saver = this._persister;
  }

  configure(ConfigParams config) {
      super.configure(config);
      this._persister.configure(config);
  }
}
```