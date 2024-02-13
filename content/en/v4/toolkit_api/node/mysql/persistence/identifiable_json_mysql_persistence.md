---
type: docs
title: "IdentifiableJsonMySqlPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableJsonMySqlPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-mqysl-node"
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
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string, schemaName?: string)

- **tableName**: string - (optional) collection name.
- **schemaName**: string - (optional) a schema name.


### Instance methods

#### convertFromPublic
Converts object value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertToPublic
Converts object value from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### ensureTable
Adds DML statement to automatically create a JSON(B) table

> `protected` ensureTable(idType: string = 'VARCHAR(32)', dataType: string = 'JSON')

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### updatePartially
Updates only few selected fields in a data item.

> `public` updatePartially(context: [IContext](../../../components/context/icontext), id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Promise\<T\> - updated item

### Examples

```typescript
class MyMySqlPersistence extends IdentifiableMySqlJsonPersistence<MyData, string> {
    public constructor() {
        super("mydata", new MyDataMySqlSchema());
    }
    
    protected defineSchema(): void {
        this.clearSchema();
        this.ensureTable();
        this.ensureSchema('ALTER TABLE `' + this._tableName + '` ADD `data_key` VARCHAR(50) AS (JSON_UNQUOTE(`data`->"$.key"))');
        this.ensureIndex(this._tableName + '_json_key', { "data_key": 1 }, { unique: true });
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let name = filter.getAsNullableString('name');

        let filterCondition: string = null;
        if (name != null) {
            filterCondition += "data->name='" + name + "'";
        }
    
        return filterCondition;
    }

    public getPageByFilter(context: IContext, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(context, this.composeFilter(filter), paging, null, null);
    }
}

let persistence = new MyMySqlPersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 5432,
    "credential.username", "mysql",
    "credential.password", "mysql",
    "connection.database", "mytestobjects"
));

await persitence.open("123");

let item = await persistence.create("123", { id: "1", name: "ABC" });

let page = await persistence.getPageByFilter(
    "123",
    FilterParams.fromTuples("name", "ABC"),
    null,
)

console.log(page.data);     // Result: { id: "1", name: "ABC" }
item = await persistence.deleteById("123", "1");

```
