---
type: docs
title: "IdentifiableJsonSqlitePersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableJsonSqlitePersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-sqlite-nodex"
description: >
    Abstract persistence component that stores data in SQLite in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Extends:** [IdentifiableSqlitePersistence<T, K>](../identifiable_sqlite_persistence)

### Description

Important points    
    
- The data items must implement [IIdentifiable](../../../commons/data/iidentifiable) interface.
- The JSON table has only two fields: id and data.
- In basic scenarios child classes shall only override [getPageByFilter](../sqlite_persistence/#getpagebyfilter), [getListByFilter](../sqlite_persistence/#getlistbyfilter) or [deleteByFilter](../sqlite_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.

#### Configuration parameters

- **table**: (optional) SQLite table name
- **schema**: (optional) SQLite schema name
- **connection(s)**:    
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **database**: database file path
    - **uri**: resource URI with file:// protocol


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string)

- **tableName**: string - (optional) collection name.


### Instance methods

#### convertFromPublic
Converts an object value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertToPublic
Converts an object value from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### ensureTable
Adds a DML statement to automatically create a JSON(B) table

> `protected` ensureTable(idType: string = 'VARCHAR(32)', dataType: string = 'JSON')

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### updatePartially
Updates only a few selected fields in a data item.

> `public` updatePartially(correlationId: string, id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Promise\<T\> - updated item

### Examples

```typescript
class MySqlitePersistence extends IdentifiableSqliteJsonPersistence<MyData, string> {
    public constructor() {
        super("mydata");
    }
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];
        let name = filter.getAsNullableString('name');
        if (name != null)
            criteria.push("JSON_EXTRACT(data,'$.name')='" + name + "'");
        return criteria.length > 0 ? criteria.join(" AND ") : null;
    }
    public getPageByFilter(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<MyData>> {
        return base.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }
}

let persistence = new MySqlitePersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.database", "./data/mydb.db"
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
