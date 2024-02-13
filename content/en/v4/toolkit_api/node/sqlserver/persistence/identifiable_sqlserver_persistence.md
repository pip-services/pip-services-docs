---
type: docs
title: "IdentifiableSqlServerPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableSqlServerPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-sqlserver-node"
description: >
    Abstract persistence component that stores data in SQLServer
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Extends:** [SqlServerPersistence<T>](../sqlserver_persistence)

### Description

The IdentifiableSqlServerPersistence class allows you to create persistence components that store data in SQLServer databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [getPageByFilter](../sqlserver_persistence/#getpagebyfilter), [getListByFilter](../sqlserver_persistence/#getlistbyfilter) or [deleteByFilter](../sqlserver_persistence/#deletebyfilter)   operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.

#### Configuration parameters

- **table**: (optional) SQLServer table name
- **schema**: (optional) SQLServer table name  
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
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../config/auth/icredential_store))



### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string, schemaName?: string)

- **tableName**: string - (optional) a table name.
- **schemaName**: string - (optional) a schema name.


### Fields

<span class="hide-title-link">

#### _autoGenerateId

Flag to turn on automated string ID generation

> `protected` **_autoGenerateId**: boolean = true

</span>


### Instance methods

#### convertFromPublicPartial
Converts the given object from the public partial format.

> `protected` convertFromPublicPartial(value: any): any

- **value**: any - the object to convert from the public partial format.
- **returns**: any - the initial object.


#### create
Creates a data item.

> `public` create(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### deleteById
Deleted a data item by it's unique id.

> `public` deleteById(context: [IContext](../../../components/context/icontext), id: K): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: Promise\<T\> - deleted item


#### deleteByIds
Deletes multiple data items based on their unique ids.

> `public` deleteByIds(context: [IContext](../../../components/context/icontext), ids: K[]): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] - ids of data items to be deleted.


#### getListByIds
Gets a list of data items retrieved based on given unique ids.

> `public` getListByIds(context: [IContext](../../../components/context/icontext), ids: K[]): Promise<\T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] - ids of data items to be retrieved
- **returns**: Promise<\T[]\> - data list


#### getOneById
Gets a data item by its unique id.

> `public` getOneById(context: [IContext](../../../components/context/icontext), id: K): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: Promise\<T\> - data item


#### set
Sets a data item. If the data item exists it updates it,
otherwise it creates a new data item.

> `public` set(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: Promise\<T\> - updated item


#### update
Updates a data item.

> `public` update(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: Promise\<T\> - updated item


#### updatePartially
Updates only few selected fields in a data item.

> `public` updatePartially(context: [IContext](../../../components/context/icontext), id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: any - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Promise\<T\> - updated item

### Examples

```typescript
class MySqlServerPersistence extends IdentifiableSqlServerPersistence<MyData, string> {
    public constructor() {
        super("mydata");
    }
    
    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE [' + this._tableName + '] ([id] VARCHAR(32) PRIMARY KEY, [name] VARCHAR(50), [content] VARCHAR(MAX))');
        this.ensureIndex(this._tableName + '_key', { key: 1 }, { unique: true });
    }
    
    private composeFilter(filter: FilterParams): string {
        filter = filter || new FilterParams();
        let name = filter.getAsNullableString('name');

        let filterCondition: string = null;
        if (name != null) {
            filterCondition += "[name]='" + name + "'";
        }
    
        return filterCondition;
    }
    
    public getPageByFilter(context: IContext, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(context, this.composeFilter(filter), paging, null, null)
    }
}

let persistence = new MySqlServerPersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 1433,
    "credential.username", "sa",
    "credential.password", "sqlserver_123",
    "connection.database", "master"
));

await persitence.open("123");

let item = await persistence.create("123", { id: "1", name: "ABC" });
let page = await persistence.getPageByFilter(
   "123",
   FilterParams.fromTuples("name", "ABC"),
   null
);

console.log(page.data);          // Result: { id: "1", name: "ABC" }
await persistence.deleteById("123", "1");

```
