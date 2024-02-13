---
type: docs
title: "IdentifiableJsonMySqlPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableJsonMySqlPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mysql-dart"
description: >
    Abstract persistence component that stores data in MySQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Extends:** [IdentifiableMySqlPersistence<T, K>](../identifiable_mysql_persistence)

### Description

The IdentifiableJsonMySqlPersistence class allows you to create persistence components that store data in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The JSON table has only two fields: id and data.
- In basic scenarios child classes shall only override [getPageByFilter](../mysql_persistence/#getpagebyfilter), [getListByFilter](../mysql_persistence/#getlistbyfilter) or [deleteByFilter](../mysql_persistence/#deletebyfilter) operations with a specific filter function. 
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.


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
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> IdentifiableJsonMySqlPersistence(String? tableName, String? schemaName) : super(tableName, schemaName)

- **tableName**: string - (optional) collection name.
- **schemaName**: string - (optional) a schema name.


### Instance methods

#### convertFromPublic
Converts object value from public to internal format.

> dynamic convertFromPublic_(value)

- **value**: any - object in public format to convert.
- **returns**: dynamic - converted object in internal format.


#### convertToPublic
Converts object value from internal to public format.

> dynamic convertToPublic_(value)

- **value**: any - object in internal format to convert.
- **returns**: dynamic - converted object in public format.


#### ensureTable
Adds DML statement to automatically create a JSON(B) table

> void ensureTable_({String idType = 'VARCHAR(32)', String dataType = 'JSON'})

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### updatePartially
Updates only few selected fields in a data item.

> Future<T?> updatePartially(IContext? context, K? id, AnyValueMap? data) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Future<T\> - updated item

### Examples

```dart
class MyMySqlPersistence extends IdentifiableJsonMySqlPersistence<MyData, String> {
       MyMySqlPersistence() : super('mydata', null);

       @override
       void defineSchema_() {
         this.clearSchema();
         this.ensureTable_();
         this.ensureSchema_('ALTER TABLE `' +
             this.tableName_! +
             '` ADD `data_key` VARCHAR(50) AS (JSON_UNQUOTE(`data`->"\$.key"))');
         this.ensureIndex_(
             this.tableName_! + '_json_key', {"data_key": 1}, {'unique': true});
       }

       @override
       Future<DataPage<MyData>> getPageByFilter(
           IContext? context, FilterParams? filter, PagingParams? paging) async {
         filter = filter ?? new FilterParams();
         var key = filter.getAsNullableString('key');

         var filterCondition = null;
         if (key != null) {
           filterCondition += "`key`='" + key + "'";
         }

         return super
             .getPageByFilter_(context, filterCondition, paging, null, null);
       }
     }

     var persistence = MyMySqlPersistence();
     persistence
         .configure(ConfigParams.fromTuples(["host", "localhost", "port", 27017]));
     await persistence.open(null);
     var item = await persistence.create(null, MyData());
     var page = await persistence.getPageByFilter(
         null, FilterParams.fromTuples(["key", "ABC"]), null);
     print(page.data);
     var deleted = await persistence.deleteById(null, '1');


```
