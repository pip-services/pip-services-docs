---
type: docs
title: "CouchbasePersistence"
linkTitle: "CouchbasePersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-couchbase-go"
description: >
    Abstract persistence component that stores data in a Couchbase database using Couchbase object relational mapping.
---


### Description
The CouchbasePersistence class allows you to create abstract persistence components that store data in a Couchbase database using Couchbase object relational mapping.
    
**Important points**    
    
- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing **c._collection** or **c._model** properties.

#### Configuration parameters


- **bucket**: (optional) Couchbase bucket's name
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
  - **auto_create**: (optional) automatically create a missing bucket (default: false)
  - **auto_index**: (optional) automatically create a primary index (default: false)
  - **flush_enabled**: (optional) bucket flush enabled (default: false)
  - **bucket_type**: (optional) bucket type (default: couchbase)
  - **ram_quota**: (optional) RAM quota in MB (default: 100)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials


### Constructors

#### InheritCouchbasePersistence
Creates a new instance of the persistence component.

> InheritCouchbasePersistence(overrides ICouchbasePersistenceOverrides, proto reflect.Type, bucket string) [*CouchbasePersistence]()

- **overrides**: ICouchbasePersistenceOverrides - References to override virtual methods
- **proto**: reflect.Type - prototype
- **bucket**: string - (optional) bucket's name.



### Fields

<span class="hide-title-link">

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### CollectionName
Collection's name
> **CollectionName**: string

#### Connection
Couchbase connection component.
> **Connection**: [*CouchbaseConnection](../../connect/couchbase_connection) 

#### Cluster
Couchbase cluster's object.
> **Cluster**: *gocb.Cluster 

#### BucketName 
Couchbase bucket's name.
> **BucketName**: string

#### Bucket 
Couchbase bucket's object.

> **Bucket**: *gocb.Bucket

#### MaxPageSize
Maximum number of records to return from the database per request.
> **MaxPageSize**: int

</span>


### Instance methods


#### Clear
Clears a component's state.

> (c [*CouchbasePersistence]()) Clear(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil if no errors occurred.


#### Close
Closes a component and frees used resources.

> (c [*CouchbasePersistence]()) Close(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil if no errors occurred.

#### Configure
Configures a component by passing its configuration parameters.

> (c [*CouchbasePersistence]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config:**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ConvertFromPublic
Converts an object's value from public to internal format.

> (c [*CouchbasePersistence]()) ConvertFromPublic(item interface{}) interface{}

- **value**: interface{} - object in public format to convert.
- **returns**: interface{} - converted object in internal format.


#### ConvertFromPublicPartial
Converts the given object from the public partial format.

> (c [*CouchbasePersistence]()) ConvertFromPublicPartial(value interface{}) interface{}

- **value**: interface{} - object to convert from the public partial format. 
- **returns**: interface{} - initial object.


#### ConvertToPublic
Converts an objecc  from internal to public format.

> (c [*CouchbasePersistence]()) ConvertToPublic(item interface{}) interface{}

- **value**: interface{} - object in internal format to convert.
- **returns**: interface{} - converted object in public format.


#### Create
Creates a data item.

> (c [*CouchbasePersistence]()) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### CreateBucketFilter!
**Note: this mehtod is not implemented**

Creates a filter that includes a collection's name in it.


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **DeleteByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*CouchbasePersistence]()) DeleteByFilter(correlationId string, filter string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter function to filter items.
- **returns**: (err error) - error or nil if no errors occurred.

#### GenerateBucketId
Generates a unique id for a specific collection in the bucket.

> (c [*CouchbasePersistence]()) GenerateBucketId(value interface{}) string

- **value**: interface{} - public unique id.
- **returns**: string - unique bucket id.



#### GetCountByFilter!
**Note: this mehtod is not implemented**

Gets a number of data items retrieved by a given filter.

This method shall be called by a public **GetCountByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*CouchbasePersistence]()) GetListByFilter(correlationId string, filter string, sort string, sel string) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter function to filter items
- **sort**: string - (optional) sorting parameters
- **sel**: string - (optional) projection parameters (not used yet)
- **returns**: (items []interface{}, err error) - data list of results by filter.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **GetOneRandom** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*CouchbasePersistence]()) GetOneRandom(correlationId string, filter string) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter JSON object
- **returns**: (item interface{}, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetPageByFilter** method from the a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*CouchbasePersistence]()) GetPageByFilter(correlationId string, filter string, paging [*PagingParams](../../../commons/data/paging_params), sort string, sel string) (page [*DataPage](../../../commons/data/data_page), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter for JSON objects.
- **paging**: [*PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: string - (optional) sorting JSON object
- **sel**: string - (optional) projection JSON object
- **returns**: (page [*DataPage](../../../commons/data/data_page), err error) - data page of result by filter



#### IsOpen
Checks if the component is open.

> (c [*CouchbasePersistence]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*CouchbasePersistence]()) Open(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil if no errors occured.


#### QuoteIdentifier
Adds single quotes to a string.

> (c [*CouchbasePersistence]()) QuoteIdentifier(value string) string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### SetReferences
Sets references to dependent components.

> (c [*CouchbasePersistence]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*CouchbasePersistence]()) UnsetReferences()

### Examples

```go
  type MyCouchbasePersistence struct {
    *CouchbasePersistence
  }

  func NewMyCouchbasePersistence() *MyCouchbasePersistence {
  	c := MyCouchbasePersistence{}
  	c.CouchbasePersistence = NewCouchbasePersistence(reflect.TypeOf(MyData{}), "mycollection");
  	return &c;
  }

  func (c *MyCouchbasePersistence) GetOneById(correlationId string, id interface{}) (item interface{}, err error) {
  	objectId := c.GenerateBucketId(id)

  	buf := make(map[string]interface{}, 0)
  	_, getErr := c.Bucket.Get(objectId, &buf)
  	if getErr != nil {
  		// Ignore "Key does not exist on the server" error
  		if getErr == gocb.ErrKeyNotFound {
  			return nil, nil
  		}
  		return nil, getErr
  	}
  	c.Logger.Trace(correlationId, "Retrieved from %s by id = %s", c.BucketName, objectId)
  	item = c.ConvertFromMap(buf)
  	return item, nil
  }

  func (c *IdentifiableCouchbasePersistence) Set(correlationId string, item interface{}) (result interface{}, err error) {
    if item == nil {
        return nil, nil
    }
    var newItem interface{}
    newItem = cmpersist.CloneObject(item)
    // Assign unique id if not exist
    cmpersist.GenerateObjectId(&newItem)
    id := cmpersist.GetObjectId(newItem)
    setItem := c.Overrides.ConvertFromPublic(newItem)
    objectId := c.GenerateBucketId(id)

    _, upsertErr := c.Bucket.Upsert(objectId, setItem, 0)

    if upsertErr != nil {
       return nil, upsertErr
    }

    c.Logger.Trace(correlationId, "Set in %s with id = %s", c.BucketName, id)
    c.Overrides.ConvertToPublic(newItem)
    return c.GetPtrIfNeed(newItem), nil
  }

  persistence := NewMyCouchbasePersistence();
  persistence.Configure(cconf.NewConfigParamsFromTuples(
      "host", "localhost",
      "port", 27017,
  ));

  persitence.Open("123")
       ...

  setItem, err := persistence.Set("123", MyData{ name: "ABC" })
  if setErr=== nil {
    item, err := persistence.GetOneById("123", setItem.Id)
    fmt.Println(item);      // Result: { name: "ABC", Id:"..." }
  }
```
