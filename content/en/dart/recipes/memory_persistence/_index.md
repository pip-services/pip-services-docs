---
type: docs
no_list: true
title: "Memory Persistence"
linkTitle: "Memory Persistence"
weight: 40
---

- by Artyom Grishchenko

### Introduction

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!

### The MemoryPersistence class

The most basic implementation is the [MemoryPersistence](../../data/persistence/memory_persistence/) class defined in the [Data module](../../data). It is only capable of storing a collection of objects, opening, and closing. It does not provide any data access methods.

The implementation we will be working with is called [IdentifiableMemoryPersistence](../../data/persistence/identifiable_memory_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../commons/data/iidentifiable/) interface defined in the [Commons module](../../commons).


```dart
abstract class IIdentifiable<K> {
  K id;
}

```

The **IdentifiableMemoryPersistence** implements a number of CRUD methods:

```dart
class IdentifiableMemoryPersistence<T extends IIdentifiable<K>, K>
    extends MemoryPersistence<T>
    implements IConfigurable, IWriter<T, K>, IGetter<T, K>, ISetter<T> {
‍
    Future<DataPage<T>> getPageByFilterEx(String correlationId, Function filter,
          PagingParams paging, Function sort);
    Future<List<T>> getListByFilterEx(String correlationId, filter, sort, select);
    Future<List<T>> getListByIds(String correlationId, List<K> ids);
    Future<T> getOneRandom(String correlationId, filter);
    Future<T> getOneById(String correlationId, K id);
    Future<T> create(String correlationId, T item);
    Future<T> set(String correlationId, T item);
    Future<T> update(String correlationId, T item);
    Future<T> updatePartially(String correlationId, K id, AnyValueMap data);
    Future<T> deleteById(String correlationId, K id);
    Future deleteByFilterEx(String correlationId, filter);
    Future deleteByIds(String correlationId, List<K> ids);
    Future<int> getCountByFilterEx(String correlationId, filter);
}
```

In most scenarios, child classes only need to override the **getPageByFilter()**, **getListByFilter()**, or **deleteByFilter()** operations using a custom filter function. All other operations can be used right out of the box. Developers can implement custom methods by accessing stored data objects via the **this._items** property and complete transactions by calling the **save()** method. See the [Data module’s API](../../data) documentation for more details.

### Filtering

Persistent components in the Pip.Services Toolkit use a number of data patterns. **IdentifiedMemoryPersistence**, for example, supports Filtering. This pattern allows clients to use a [FilterParams](../../commons/data/filter_params/) object to describe a subset of data as key-value pairs. These FilterParams can then be used for retrieving data in accordance with certain search criteria (see the [Commons module](../../commons)).

```dart

FilterParams.fromTuples(['name', 'ABC'])
```

In the persistence component, the developer is responsible for parsing the **FilterParams** and passing a filter function to the persistent methods of the base class.


```dart
_composeFilter(FilterParams filter) {
    filter = filter ?? FilterParams();
    var name = filter.getAsNullableString("name");
    return (item) {
        if (name != null && item.name != name)
            return false;
        return true;
    };
} 

Future<DataPage<MyData>> getPageByFilter(String correlationId, FilterParams filter, PagingParams paging) {
    return super.getPageByFilterEx(correlationId, this.composeFilter(filter), paging, null, null);
}
```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks through multiple calls to the storage. To do this, a client specifies a set of [PagingParams](../../commons/data/paging_params/), which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. The service returns a subset of the data as a [DataPage](../../commons/data/data_page/) object.

```dart
//skip = 25, take = 50, total = false
PagingParams(25, 50, false);
```

### Custom Persistence Methods

As mentioned above, developers can also implement custom persistent methods. Inside those methods, they can access data objects via the **_items** property. When stored data is modified, developers must finish the transaction by calling the base class’s **save()** method.
Below is an example of a custom persistent method.

```dart
Future<MyData> getOneByName(String correlationId, String name) async {
    var item = items.firstWhere((item) => item.name == name);
    if (item != null) {
        logger.trace(correlationId, 'Found by %s', [name]);
    } else {
        logger.trace(correlationId, 'Cannot find by %s', [name]);
    }
    return item;
  }
}
```

When we put everything together, we get the following component:

```dart
class MyMemoryPersistence extends IdentifiableMemoryPersistence<MyData, string> {
    dynamic _composeFilter(FilterParams filter) {
        filter = filter ?? FilterParams();
        var name = filter.getAsNullableString("name");
        return (item) {
            if (name != null && item.name != name)
                return false;
            return true;
        };
    }

    @override
    Future<DataPage<MyData>> getPageByFilter(String correlationId, FilterParams filter, PagingParams paging){
        return super.getPageByFilter(correlationId, composeFilter(filter), paging, null, null);
    }

    @override
    Future<MyData> getOneByName(String correlationId, String name) async {
        var item = items.firstWhere((item) => item.name == name);
        if (item != null) {
          logger.trace(correlationId, 'Found by %s', [name]);
        } else {
          logger.trace(correlationId, 'Cannot find by %s', [name]);
        }
        return item;
    }
}
```

A demonstration of how we can use our custom memory persistence is presented below:


```dart
void UseMemoryPersistence() async {
    // Create items
    var persistence = MyMemoryPersistence();
    // Filter by name
    var page = await persistence.getPageByFilter(
        null, FilterParams.fromTuples(['name', 'ABC']), PagingParams());
     //Clean
    item = persistence.deleteById('123', '1');
}

```

### FileMemoryPersistence

The memory persistence component actually has one more trick up its sleeve: it can easily be extended to create a **FileMemoryPersistence**. The only thing you’ll need to add is the assignment of a **PersisterObject** in the **FileMemoryPersistence**’s constructor. The File persistence can be used for certain system test scenarios.

```dart
import 'package:pip_services3_data/pip_services3_data.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import '../data/version1/BeaconV1.dart';
import './MyMemoryPersistence.dart';

class MyFilePersistence extends MyMemoryPersistence {
  JsonFilePersister<BeaconV1> persister;
  MyFilePersistence([String path]) : super() {
    persister = JsonFilePersister<BeaconV1>(path);
    loader = persister;
    saver = persister;
  }

  @override
  void configure(ConfigParams config) {
    super.configure(config);
    persister.configure(config);
  }
}
    
```
