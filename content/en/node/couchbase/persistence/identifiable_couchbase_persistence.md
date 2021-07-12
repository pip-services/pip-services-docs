---
type: docs
title: "IdentifiableCouchbasePersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableCouchbasePersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-couchbase-nodex"
description: >
    Abstract persistence component that stores data in Couchbase and implements a number of CRUD operations over data items with unique ids.
---

**Extends:** [CouchbasePersistence<T>](../couchbase_persistence)

**Implements:** [IWriter<T, K>](../../../data/core/iwriter), [IGetter<T, K>](../../../data/core/igetter), [ISetter<T>](../../../data/core/isetter)

### Description
The IdentifiableCouchbasePersistence class allows you to create abstract persistence components that store data in Couchbase and implement a number of CRUD operations over data items with unique ids.
    
**Important points**
    
- The data items must implement [IIdentifiable](../../../commons/data/iidentifiable) interface.

- In basic scenarios child classes shall only override [getPageByFilter](../couchbase_persistence/#getpagebyfilter), [getListByFilter](../couchbase_persistence/#getlistbyfilter) or [deleteByFilter](../couchbase_persistence/#deletebyfilter) operations with specific filter functions.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.


#### Configuration parameters


- **bucket**: (optional) Couchbase bucket name
- **collection**: (optional) Couchbase collection name
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string, keyspaceName?: string)

- **tableName**: string - (optional) collection's name.
- **keyspaceName**: string - (optional) keyspace's name.


### Fields

<span class="hide-title-link">

Flag used to turn on automated string ID generation.
> `protected` **_autoGenerateId**: boolean = true

</span>

### Instance methods


#### create
Creates a data item.

> `public` create(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### deleteById
Deletes a data item by it's unique id.

> `public` deleteById(correlationId: string, id: K): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **returns**: Promise\<T\> - deleted item


#### deleteByIds
Deletes multiple data items by their unique ids.

> `public` deleteByIds(correlationId: string, ids: K[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of the data items to be deleted.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> `public` getListByIds(correlationId: string, ids: K[]): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of the data items to be retrieved
- **returns**: Promise\<T[]\> - data list


#### getOneById
Gets a data item by its unique id.

> `public` getOneById(correlationId: string, id: K): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: Promise\<T\> - data item

#### generateBucketIds
Generates a list of unique ids for a specific collection in the bucket.

> `protected` generateBucketIds(value: K[]): string[]

- **value**: K[] - public unique ids.
- **returns**: string[] - unique bucket ids.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> `public` getListByIds(correlationId: string, ids: K[]): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of data items to be retrieved
- **returns**: Promise\<T[]\> - list with requested data items.

#### getOneById
Gets a data item by its unique id.

> `public` getOneById(correlationId: string, id: K): Promise<T>

- **correlationId**: string - (optional) transaction used id to trace execution through the call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: Promise<T> - found data item.


#### set
Sets a data item. If the data item exists, it updates it. 
Otherwise, it creates a new data item.

> `public` set(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: Promise\<T\> - new or updated item

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

#### update
Updates a data item.

> `public` update(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Promise\<T\> - updated item


#### updatePartially
Updates only a few selected fields in a data item.

> `public` updatePartially(correlationId: string, id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: any - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Promise\<T\> - updated item

### Examples
```typescript
class MyCouchbasePersistence extends CouchbasePersistence<MyData, string> {
    public constructor() {
        base("mybucket", "mydata", new MyDataCouchbaseSchema());
    }
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];
        let name = filter.getAsNullableString('name');
        if (name != null)
            criteria.push({ name: name });
        return criteria.length > 0 ? { $and: criteria } : null;
    }
    public getPageByFilter(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<MyData>> {
        return base.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
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
