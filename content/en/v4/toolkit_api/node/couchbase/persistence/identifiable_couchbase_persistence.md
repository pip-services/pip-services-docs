---
type: docs
title: "IdentifiableCouchbasePersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableCouchbasePersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-couchbase-node"
description: >
    Abstract persistence component that stores data in Couchbase and implements a number of CRUD operations over data items with unique ids.
---

**Extends:** [CouchbasePersistence<T>](../couchbase_persistence)

**Implements:** [IWriter<T, K>](../../../persistence/write/iwriter), [IGetter<T, K>](../../../persistence/read/igetter), [ISetter<T>](../../../persistence/write/isetter)

### Description
The IdentifiableCouchbasePersistence class allows you to create abstract persistence components that store data in a Couchbase database and implement a number of CRUD operations over data items with unique ids.
    
**Important points**
    
- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.

- In basic scenarios child classes shall only override [getPageByFilter](../couchbase_persistence/#getpagebyfilter), [getListByFilter](../couchbase_persistence/#getlistbyfilter) or [deleteByFilter](../couchbase_persistence/#deletebyfilter) operations with specific filter functions.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.


#### Configuration parameters


- **bucket**: (optional) Couchbase bucket's name
- **collection**: (optional) Couchbase collection's name
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: (optional) username
    - **password**: (optional) user's password
- **options**:
    - **max_pool_size**: (optional) maximum connection pool size (default: 2)
    - **keep_alive**: (optional) enable connection keep alive (default: true)
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 5 sec)
    - **auto_reconnect**: (optional) enable auto reconnection (default: true)
    - **max_page_size**: (optional) maximum page size (default: 100)
    - **debug**: (optional) enable debug output (default: false).



#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../config/auth/icredential_store))


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string, collection?: string)

- **tableName**: string - (optional) collection's name.
- **collection**: string - (optional) a collection name.


### Fields

<span class="hide-title-link">

Flag used to turn on automated string ID generation.
> `protected` **_autoGenerateId**: boolean = true

</span>

### Instance methods


#### create
Creates a data item.

> `public` create(context: [Context](../../../components/context/context), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### deleteById
Deletes a data item by it's unique id.

> `public` deleteById(context: [IContext](../../../components/context/icontext), id: K): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: Promise\<T\> - deleted item


#### deleteByIds
Deletes multiple data items by their unique ids.

> `public` deleteByIds(context: [IContext](../../../components/context/icontext), ids: K[]): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] - ids of the data items to be deleted.


#### getListByIds
Gets a list of the data items retrieved by given unique ids.

> `public` getListByIds(context: [IContext](../../../components/context/icontext), ids: K[]): Promise\<T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] - ids of the data items to be retrieved
- **returns**: Promise\<T[]\> - data list


#### getOneById
Gets a data item by its unique id.

> `public` getOneById(context: [IContext](../../../components/context/icontext), id: K): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: Promise\<T\> - data item

#### generateBucketIds
Generates a list of unique ids for a specific collection in the bucket.

> `protected` generateBucketIds(value: K[]): string[]

- **value**: K[] - public unique ids.
- **returns**: string[] - unique bucket ids.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> `public` getListByIds(context: [IContext](../../../components/context/icontext), ids: K[]): Promise\<T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] - ids of the data items to be retrieved
- **returns**: Promise\<T[]\> - list with requested data items.

#### getOneById
Gets a data item by its unique id.

> `public` getOneById(context: [IContext](../../../components/context/icontext), id: K): Promise<T>

- **context**: [IContext](../../../components/context/icontext) - (optional) Basic implementation of an execution context.
- **id**: K - id of the data item to be retrieved.
- **returns**: Promise<T> - found data item.


#### set
Sets a data item. If the data item exists, it updates it. 
Otherwise, it creates a new data item.

> `public` set(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: Promise\<T\> - new or updated item

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

#### update
Updates a data item.

> `public` update(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: Promise\<T\> - updated item


#### updatePartially
Updates only a few selected fields in a data item.

> `public` updatePartially(context: [IContext](../../../components/context/icontext), id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: any - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Promise\<T\> - updated item

### Examples
```typescript
class MyCouchbasePersistence extends CouchbasePersistence<MyData, string> {
    public constructor() {
        super("mybucket", "mydata", new MyDataCouchbaseSchema());
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];
        let name = filter.getAsNullableString('name');
        if (name != null)
            criteria.push({ name: name });
        return criteria.length > 0 ? { $and: criteria } : null;
    }

    public getPageByFilter(context: IContext, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(context, this.composeFilter(filter), paging, null, null);
    }
}

let persistence = new MyCouchbasePersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

await persitence.open("123");
let item = await persistence.create("123", { id: "1", name: "ABC" });
let page = await persistence.getPageByFilter(
  "123",
  FilterParams.fromTuples("name", "ABC"),
  null
);

console.log(page.data);          // Result: { id: "1", name: "ABC" }
item = await persistence.deleteById("123", "1");
```
