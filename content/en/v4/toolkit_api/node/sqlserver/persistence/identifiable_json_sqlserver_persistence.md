---
type: docs
title: "IdentifiableJsonSqlServerPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableJsonSqlServerPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-sqlserver-node"
description: >
    Abstract persistence component that stores data in SQLServer in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

   
---

**Implements:** [IdentifiableSqlServerPersistence](../identifiable_sqlserver_persistence), [IIdentifiable](../../../data/data/iidentifiable)

### Description

The IdentifiableJsonSqlServerPersistence class allows you to create persistence components that store data in an SQLServer database in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [getPageByFilter](../sqlserver_persistence/#getpagebyfilter), [getListByFilter](../sqlserver_persistence/#getlistbyfilter) or [deleteByFilter](../sqlserver_persistence/#deletebyfilter) operations with an specific filter function.
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
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string, schemaName?: string)

- **tableName**: string - (optional) table name.
- **schemaName**: string - (optional) a schema name.

### Instance methods

#### convertFromPublic
Converts an object value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertFromPublicPartial
Converts the given object from the public partial format.

> `protected` convertFromPublicPartial(value: any): any

- **value**: any - the object to convert from the public partial format.
- **returns**: any - the initial object.


#### convertToPublic
Converts object value from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - an object in internal format to convert.
- **returns**: any - converted object in public format.


#### ensureTable
Adds DML statement to automatically create a JSON(B) table

> `protected` ensureTable(idType: string = 'VARCHAR(32)', dataType: string = 'NVARCHAR(MAX)')

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: NVARCHAR(MAX))


#### updatePartially
Updates only few selected fields in a data item.

> `public` updatePartially(context: [IContext](../../../components/context/icontext), id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Promise\<T\> - updated item

### Examples

```typescript
class MySqlServerPersistence extends IdentifiableSqlServerJsonPersistence<MyData, string> {
    public constructor() {
        super("mydata");
    }
    
    protected defineSchema(): void {
        this.clearSchema();
        this.ensureTable();
        this.ensureSchema("ALTER TABLE [" + this._tableName + "] ADD [data_name] AS JSON_VALUE([data],'$.name')")
        this.ensureIndex(this._tableName + '_name', { data_name: 1 }, { unique: true });
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let name = filter.getAsNullableString('name');

        let filterCondition: string = null;
        if (name != null) {
            filterCondition += "JSON_VALUE([data],'$.name')='" + name + "'";
        }
    
        return filterCondition;
    }

    public getPageByFilter(context: IContext, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(context, this.composeFilter(filter), paging, null, null);
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
