---
type: docs
title: "IdentifiableMySqlPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableMySqlPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-mysql-java"
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
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../config/auth/icredential_store))


### Constructors
Creates a new instance of the persistence component.

> `public` IdentifiableMySqlPersistence(Class<T> documentClass, String tableName, String schemaName)

- **tableName**: String - (optional) collection name.
- **schemaName**: String - (optional) a schema name


### Fields

<span class="hide-title-link">

#### _autoGenerateId

Flag to turn on automated string ID generation

> `protected` boolean **_autoGenerateId** = true;

</span>

### Instance methods

#### convertFromPublicPartial
Converts the given object from the public partial format.

> `protected` Map<String, Object> convertFromPublicPartial(Object value)

- **value**: Object - the object to convert from the public partial format.
- **returns**: Object - the initial object.


#### create
Creates a data item.

> `public` T create([IContext](../../../components/context/icontext) context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### deleteById
Deletes a data item by it's unique id.

> `public` T deleteById([IContext](../../../components/context/icontext) context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: T - deleted item


#### deleteByIds
Deletes multiple data items by their unique ids.

> `public` void deleteByIds([IContext](../../../components/context/icontext) context, List<K> ids)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List<K> - ids of the data items to be deleted.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> `public` List<T> getListByIds([IContext](../../../components/context/icontext) context, List<K> ids)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List<K> - ids of the data items to be retrieved
- **returns**: List<K> - data list


#### getOneById
Gets a data item by its unique id.

> `public` T getOneById([IContext](../../../components/context/icontext) context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: <T> - data item


#### set
Sets a data item. If the data item exists it updates it,
otherwise it creates a new data item.

> `public` T set([IContext](../../../components/context/icontext) context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: T - new or updated item


#### update
Updates a data item.

> `public` T update([IContext](../../../components/context/icontext) context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: T - updated item


#### updatePartially
Updates only a few selected fields in a data item.

> `public` T updatePartially([IContext](../../../components/context/icontext) context, K id, [AnyValueMap](../../../commons/data/any_value_map) data)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: T - updated item

### Examples
```java
{@code
  public class MyMySqlPersistence extends IdentifiableMySqlPersistence<MyData, String> {

     public MyMySqlPersistence() {
         super(MyData.class, "dummies", null);
     }

     @Override
     protected void defineSchema() {
         this.clearSchema();
         this.ensureSchema("CREATE TABLE `" + this._tableName + "` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)");
         this.ensureIndex(this._tableName + "_key", Map.of("key", 1), Map.of("unique", true));
     }

     private String composeFilter(FilterParams filter) {
         filter = filter != null ? filter : new FilterParams();
         String filterCondition = null;

         var key = filter.getAsNullableString("key");

         if (key != null)
             filterCondition = "`key`='" + key + "'";

         return filterCondition;

     }

     public DataPage<MyData> getPageByFilter(IContext context, FilterParams filter, PagingParams paging) {
         return super.getPageByFilter(context, composeFilter(filter), paging, null, null);
     }
 }
 }
```
