---
type: docs
title: "CouchbasePersistence<T>"
linkTitle: "CouchbasePersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-couchbase-node"
description: >
    Abstract persistence component that stores data in a Couchbase database using Couchbase object relational mapping.
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description
The CouchbasePersistence class allows you to create abstract persistence components that store data in a Couchbase database using Couchbase object relational mapping.
    
**Important points**    
    
- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing **this._collection** or **this._model** properties.

#### Configuration parameters


- **bucket**: (optional) Couchbase bucket's name
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
  - **auto_create**: (optional) automatically create a missing bucket (default: false)
  - **auto_index**: (optional) automatically create a primary index (default: false)
  - **flush_enabled**: (optional) bucket flush enabled (default: false)
  - **bucket_type**: (optional) bucket type (default: couchbase)
  - **ram_quota**: (optional) RAM quota in MB (default: 100)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(bucket?: string, collection?:string)

- **bucket**: string - (optional) bucket's name.
- **collection**: string - (optional) collection's name.


### Fields

<span class="hide-title-link">

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _collectionName
Collection's name
> `protected` **_collectionName**: string

#### _connection
Couchbase connection component.
> `protected` **_connection**: [CouchbaseConnection](../../connect/couchbase_connection) 

#### _cluster
Couchbase cluster's object.
> `protected` **_cluster**: any 

#### _bucketName 
Couchbase bucket's name.
> `protected` **_bucketName**: string

#### _bucket 
Couchbase bucket's object.

> `protected` **_bucket**: any

#### _query
Couchbase N1qlQuery's object.
> `protected` **_query**: any

#### _maxPageSize
Maximum number of records to return from the database per request.
> `protected` **_maxPageSize**: number = 100

</span>


### Instance methods


#### clear
Clears a component's state.

> `public` clear(context: [IContext](../../../components/context/icontext): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config:**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### convertFromPublic
Converts an object's value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertFromPublicPartial
Converts the given object from the public partial format.

> `protected` convertFromPublicPartial(value: any): any

- **value**: any - object to convert from the public partial format. 
- **returns**: any - initial object.


#### convertToPublic
Converts an objecc  from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### create
Creates a data item.

> `public` create(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### createBucketFilter
Creates a filter that includes a collection's name in it.

> `protected` createBucketFilter(filter: string): string

- **filter**: string - user-defined filter
- **returns**: string - filter that includes a collection's name.


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` deleteByFilter(context: [IContext](../../../components/context/icontext), filter: any): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function to filter items.


#### generateBucketId
Generates a unique id for a specific collection in the bucket.

> `protected` generateBucketId(value: any): string 

- **value**: any - public unique id.
- **returns**: string - unique bucket id.



#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getCountByFilter(context: [IContext](../../../components/context/icontext), filter: any): Promise\<number\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) JSON object filter
- **returns**: Promise\<number\> - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getListByFilter(context: [IContext](../../../components/context/icontext), filter: any, sort: any, select: any): Promise\<T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function to filter items
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: Promise\<T[]\> - data list of results by filter.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **getOneRandom** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getOneRandom(context: [IContext](../../../components/context/icontext), filter: any): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter JSON object
- **returns**: Promise\<T\> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from the a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getPageByFilter(context: [IContext](../../../components/context/icontext), filter: any, paging: PagingParams, sort: any, select: any): Promise<[DataPage<T>](../../../data/query/data_page)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter for JSON objects.
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting JSON object
- **select**: any - (optional) projection JSON object
- **returns**: Promise<[DataPage<T>](../../../data/query/data_page)> - data page of result by filter



#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### quoteIdentifier
Adds single quotes to a string.

> `protected` quoteIdentifier(value: string): string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Examples

```typescript
class MyCouchbasePersistence extends CouchbasePersistence<MyData> {
  public constructor() {
    super("mydata", "mycollection", new MyDataCouchbaseSchema());
  }

  public getByName(context: IContext, name: string): Promise<MyData> {
    let criteria = { name: name };
    return new Promise((resolve, reject) => {
       this._model.findOne(criteria, (err, value) => {
           if (err == null) resolve(value);
           else reject(err);
       });
    });
  }

  public set(correlatonId: string, item: MyData, callback: (err) => void): void {
    let criteria = { name: item.name };
    let options = { upsert: true, new: true };
    return new Promise((resolve, reject) => {
       this._model.findOneAndUpdate(criteria, item, options, (err, value) => {
           if (err == null) resolve(value);
           else reject(err);
       });
    });
  }
}

let persistence = new MyCouchbasePersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

await persitence.open("123");
let item = await persistence.set("123", { name: "ABC" });
item = await persistence.getByName("123", "ABC");
console.log(item);                   // Result: { name: "ABC" }
```
