---
type: docs
title: "IdentifiableMySqlPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableMySqlPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mysql-dart"
description: >

    Abstract persistence component that stores data in MySQL
    and implements a number of CRUD operations over data items with unique ids.
    

---

**Extends:** [MySqlPersistence<T>](../mysql_persistence)

### Description

The IdentifiableMySqlPersistence class allows you to create persistence components that store data in MySQL databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios, child classes shall only override [getPageByFilter](../mysql_persistence/#getpagebyfilter), [getListByFilter](../mysql_persistence/#getlistbyfilter) or [deleteByFilter](../mysql_persistence/#deletebyfilter) operations with the specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing the **this._collection** and **this._model** properties.

#### Configuration parameters

- **table**: (optional) MySQL table name
- **schema**: (optional) MySQL schema name

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)

 Note: the options below are currently not supported.
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../config/auth/icredential_store))


### Constructors
Creates a new instance of the persistence component.

> IdentifiableMySqlPersistence(String? tableName, String? schemaName) : super(tableName, schemaName)

- **tableName**: string - (optional) collection name.
- **schemaName**: string - (optional) a schema name


### Fields

<span class="hide-title-link">

#### autoGenerateId_

Flag to turn on automated string ID generation

> bool **autoGenerateId_** = true

</span>

### Instance methods

#### convertFromPublicPartial
Converts the given object from the public partial format.

> dynamic convertFromPublicPartial_(value)

- **value**: the object to convert from the public partial format.
- **returns**: dynamic - the initial object.


#### create
Creates a data item.

> Future<T?> create(IContext? context, T? item) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Future<T?> - created item


#### deleteById
Deletes a data item by it's unique id.

> Future<T?> deleteById(IContext? context, K? id) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: Future<T?> - deleted item


#### deleteByIds
Deletes multiple data items by their unique ids.

> Future<void> deleteByIds(IContext? context, List<K> ids) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] - ids of the data items to be deleted.

#### getListByIds
Gets a list of data items retrieved by given unique ids.

> Future<List<T>> getListByIds(IContext? context, List<K> ids) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List<K> - ids of the data items to be retrieved
- **returns**: Future<List<T>> - data list


#### getOneById
Gets a data item by its unique id.

> Future<T?> getOneById(IContext? context, K id) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: Future<T?> - data item


#### set
Sets a data item. If the data item exists it updates it,
otherwise it creates a new data item.

> Future<T?> set(IContext? context, T? item) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: Future<T?> - new or updated item


#### update
Updates a data item.

> Future<T?> update(IContext? context, T? item) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: Future<T?> - updated item


#### updatePartially
Updates only a few selected fields in a data item.

> Future<T?> updatePartially(IContext? context, K? id, AnyValueMap? data) async>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: any - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Future<T?> - updated item

### Examples
```dart
 class MyMySqlPersistence extends IdentifiableMySqlPersistence<MyData, String> {
       MyMySqlPersistence() : super('mydata', null);

       @override
       void defineSchema_() {
         clearSchema();
         ensureSchema_('CREATE TABLE `' +
             tableName_! +
             '` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)');
         ensureIndex_(tableName_! + '_key', {'key': 1}, {'unique': true});
       }

       @override
       Future<DataPage<MyData>> getPageByFilter(
           IContext? context, FilterParams? filter, PagingParams? paging) async {
         filter = filter ?? new FilterParams();
         var key = filter.getAsNullableString('key');

         var filterCondition = null;
         if (key != null) {
           filterCondition += 'key='$key';
         }

         return super
             .getPageByFilter_(context, filterCondition, paging, null, null);
       }
     }
     var persistence = MyMySqlPersistence();
     persistence
         .configure(ConfigParams.fromTuples(['host', 'localhost', 'port', 27017]));
     await persistence.open(null);
     var item = await persistence.create(null, MyData());
     var page = await persistence.getPageByFilter(
         null, FilterParams.fromTuples(['key', 'ABC']), null);
     print(page.data);
     var deleted = await persistence.deleteById(null, '1');
```
