---
type: docs
title: "CouchbasePersistence<T>"
linkTitle: "CouchbasePersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-couchbase-nodex"
description: >
    Abstract persistence component that stores data in Couchbase and is based using Couchbaseose object relational mapping.
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing **this._collection** or **this._model** properties.

#### Configuration parameters


- **bucket**: (optional) Couchbase bucket name
- **connection(s)**:    
  - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
  - **host**: host name or IP address
  - **port**: port number (default: 27017)
  - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
  - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
  - **username**: (optional) user name
  - **password**: (optional) user password
- **options**:
  - **auto_create**: (optional) automatically create missing bucket (default: false)
  - **auto_index**: (optional) automatically create primary index (default: false)
  - **flush_enabled**: (optional) bucket flush enabled (default: false)
  - **bucket_type**: (optional) bucket type (default: couchbase)
  - **ram_quota**: (optional) RAM quota in MB (default: 100)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(bucket?: string, collection?:string)

- **bucket**: string - (optional) a bucket name.
- **collection**: string - (optional) a collection name.


### Fields

<span class="hide-title-link">

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _collectionName
TODO: add descritpion
> `protected` **_collectionName**: string

#### _connection
The Couchbase connection component.
> `protected` **_connection**: [CouchbaseConnection](../../connect/couchbase_connection) 

#### _cluster
The Couchbase cluster object.
> `protected` **_cluster**: any 

#### _bucketName 
The Couchbase bucket name.
> `protected` **_bucketName**: string

#### _bucket 
The Couchbase bucket object.

> `protected` **_bucket**: any

#### _keyspaceName
The Couchbase N1qlQuery object.
> `protected` **_query**: any

#### _maxPageSize
The maximum number of records to return from the database per request.
> `protected` **_maxPageSize**: number = 100

</span>


### Instance methods


#### clear
Clears a component's state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### close
Closes a component and frees the used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### convertFromPublic
Converts object value from public to internal format.

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

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### create
Creates a data item.

> `public` create(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### createBucketFilter
Creates a filters that includes a collection name in it.

> `protected` createBucketFilter(filter: string): string

- **filter**: string - a user-defined filter
- **returns**: string - a filter that includes a collection name.


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` deleteByFilter(correlationId: string, filter: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter function to filter items.


#### generateBucketId
Generates unique id for specific collection in the bucket

> `protected` generateBucketId(value: any): string 

- **value**: any - a public unique id.
- **returns**: string - a unique bucket id.



#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getCountByFilter(correlationId: string, filter: any): Promise\<number\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) JSON object filter
- **returns**: Promise\<number\> - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getListByFilter(correlationId: string, filter: any, sort: any, select: any): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id to trace execution through the call chain.
- **filter**: any - (optional) filter function to filter items
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: Promise\<T[]\> - data list of results by filter.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **getOneRandom** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getOneRandom(correlationId: string, filter: any): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) a filter JSON object
- **returns**: Promise\<T\> - a random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from the a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getPageByFilter(correlationId: string, filter: any, paging: PagingParams, sort: any, select: any): Promise<[DataPage<T>](../../../commons/data/data_page)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter for JSON objects.
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting JSON object
- **select**: any - (optional) projection JSON object
- **returns**: Promise<[DataPage<T>](../../../commons/data/data_page)> - a data page of result by filter



#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### quoteIdentifier
Adds single quotes to a string.

> `protected` quoteIdentifier(value: string): string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Examples

```typescript
class MyCouchbasePersistence extends CouchbasePersistence<MyData> {
  public constructor() {
    base("mydata", "mycollection", new MyDataCouchbaseSchema());
  }
  public getByName(correlationId: string, name: string): Promise<MyData> {
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
