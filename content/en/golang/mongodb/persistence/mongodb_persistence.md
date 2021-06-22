---
type: docs
title: "MongoDbPersistence"
linkTitle: "MongoDbPersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-mongodb-go"
description: >
    Abstract persistence component that stores data in MongoDB using the official MongoDB driver.

   
---

### Description

The MongoDbPersistence class allows you to create persistence components that store data in MongoDBs using the official MongoDB driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **c.Db** or **c.Collection** properties.

#### Configuration parameters

- **collection**: (optional) MongoDB collection name

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **max_pool_size**: (optional) maximum connection pool size (default: 2)
- **keep_alive**: (optional) enable connection keep alive (default: true)
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5000)
- **socket_timeout**: (optional) socket timeout in milliseconds (default: 360000)
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000)
- **max_page_size**: (optional) maximum page size (default: 100)
- **replica_set**: (optional) name of replica set
- **ssl**: (optional) enable SSL connection (default: false)
- **auth_source**: (optional) authentication source
- **debug**: (optional) enable debug output (default: false).

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors

#### InheritMongoDbPersistence
Creates a new instance of the persistence component.

> InheritMongoDbPersistence(overrides IMongoDbPersistenceOverrides, proto reflect.Type, collection string) [*MongoDbPersistence]()

- **overrides**: IMongoDbPersistenceOverrides - TODO: add description 
- **proto**: reflect.Type - TODO: add description
- **collection**: string - (optional) collection name.



### Fields

<span class="hide-title-link">

#### DependencyResolver
The dependency resolver.
> **DependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### Logger
The logger.
> **Logger**: [CompositeLogger](../../../components/log/composite_logger)

#### Connection
The MongoDB connection component.
> **Connection**: [*MongoDBConnection](../../connect/mongodb_connection) 

#### CollectionName
The MongoDB colleciton name.
> **CollectionName**: string;

#### Collection
The MongoDb collection object.
> **Collection**: *mongodrv.Collection

#### Client
The MongoDB connection pool object.
> **Client**: *mongodrv.Client

#### DatabaseName 
The MongoDB database name.
> **DatabaseName**: string

#### Db
The MongoDb database object.

> **Db** *mongodrv.Database

#### maxPageSize
The maximum number of records to return from the database per request.
> **maxPageSize**: number = 100

</span


### Methods

#### Clear
Clears a component's state.

> (c *MongoDbPersistence) Clear(correlationId string) error

- **correlationId**: string - object to convert from the public partial format.
- **returns**: error -  error or nil no errors occured.


#### Close
Closes the component and frees used resources.

> (c *MongoDbPersistence) Close(correlationId string) error

- **correlationId**: string - object to convert from the public partial format.
- **returns**: error -  error or nil no errors occured.


#### Configure
Closes the component and frees used resources.

> (c *MongoDbPersistence) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ConvertFromPublic
Converts an object value from public to internal format.

> (c *MongoDbPersistence) ConvertFromPublic(item interface{}) interface{}

- **value**: interface{} - object in public format to convert.
- **returns**: interface{} - converted object in internal format.


#### ConvertToPublic
Converts and object value from internal to public format.

> (c *MongoDbPersistence) ConvertToPublic(value interface{}) interface{}

- **value**: interface{} - object in internal format to convert.
- **returns**: interface{} - converted object in public format.


#### Create
Creates a data item.

> (c *MongoDbPersistence) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used  to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### DefineSchema
Defines the database schema

> (c *MongoDbPersistence) DefineSchema()


#### DeleteByFilter
This method shall be called by a public **DeleteByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c *MongoDbPersistence) DeleteByFilter(correlationId string, filter interface{}) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter function used to filter items.
- **returns**: error -  error or nil no errors occured.


#### EnsureIndex
Adds index definition to create it on opening.

> (c *MongoDbPersistence) EnsureIndex(keys interface{}, options *mongoopt.IndexOptions)

- **keys**: interface{} - index keys (fields)
- **options**: *mongoopt.IndexOptions - index options


#### GetCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **GetCountByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c *MongoDbPersistence) GetCountByFilter(correlationId string, filter interface{}) (count int64, err error)

- **correlationId**: string - (optional) transaction id usedto trace execution through the call chain.
- **filter**: interface{} - (optional) filter JSON object
- **returns**: (count int64, err error) - number of filtered items.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetListByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c *MongoDbPersistence) GetListByFilter(correlationId string, filter interface{}, sort interface{}, sel interface{}) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) filter function used to filter items
- **sort**: interface{} - (optional) sorting parameters
- **select**: interface{} - (optional) projection parameters (not used yet)
- **returns**: (items []interface{}, err error) - data list of results by filter.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public [GetOneRandom](#getonerandom) method from the child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c *MongoDbPersistence) GetOneRandom(correlationId string, filter interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - fileter JSON object.
- **returns**: (item interface{}, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetPageByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c *MongoDbPersistence) GetPageByFilter(correlationId string, filter interface{}, paging [*cdata.PagingParams](../../../commons/data/paging_params), sort interface{}, sel interface{}) (page [*cdata.DataPage](../../../commons/data/data_page), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) filter JSON object
- **paging**: [*cdata.PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: interface{} - (optional) sorting JSON object
- **sel**: interface{} - (optional) projection JSON object
- **returns**: (page [*cdata.DataPage](../../../commons/data/data_page), err error) - data page obtained by filtering


### Examples

```go
type MyMongoDbPersistence struct {
  MongoDbPersistence
}

func NewMyMongoDbPersistence(proto reflect.Type, collection string) *MyMongoDbPersistence {
  mc:= MyMongoDbPersistence{}
  mc.MongoDbPersistence = NewMongoDbPersistence(proto, collection)
  return &mc
}

func (c * MyMongoDbPersistence) GetByName(correlationId string, name string) (item interface{}, err error) {
  filter := bson.M{"name": name}
  docPointer := NewObjectByPrototype(c.Prototype)
  foRes := c.Collection.FindOne(context.TODO(), filter)
  ferr := foRes.Decode(docPointer.Interface())
  if ferr != nil {
      if ferr == mongo.ErrNoDocuments {
         return nil, nil
      }
      return nil, ferr
  }
  item = docPointer.Elem().Interface()
  c.Overrides.ConvertToPublic(&item)
  return item, nil
}

func (c * MyMongoDbPersistence) Set(correlatonId string, item MyData) (result interface{}, err error) {
    newItem = cmpersist.CloneObject(item, c.Prototype)
    // Assign unique id if not exist
    cmpersist.GenerateObjectId(&newItem)
    id := cmpersist.GetObjectId(newItem)
    c.Overrides.ConvertFromPublic(&newItem)
    filter := bson.M{"_id": id}
    var options mngoptions.FindOneAndReplaceOptions
    retDoc := mngoptions.After
    options.ReturnDocument = &retDoc
    upsert := true
    options.Upsert = &upsert
    frRes := c.Collection.FindOneAndReplace(context.TODO(), filter, newItem, &options)
    if frRes.Err() != nil {
        return nil, frRes.Err()
    }
    docPointer := NewObjectByPrototype(c.Prototype)
    err = frRes.Decode(docPointer.Interface())
    if err != nil {
        if err == mongo.ErrNoDocuments {
    	    return nil, nil
        }
        return nil, err
    }
    item = docPointer.Elem().Interface()
    c.Overrides.ConvertToPublic(&item)
    return item, nil
}

persistence := NewMyMongoDbPersistence(reflect.TypeOf(MyData{}), "mycollection")
persistence.Configure(NewConfigParamsFromTuples(
    "host", "localhost",
    "port", "27017",
    "database", "test",
))

opnErr := persitence.Open("123")
if opnErr != nil {
    ...
}

resItem, setErr := persistence.Set("123", MyData{ name: "ABC" })
if setErr != nil {
   ...
}

item, getErr := persistence.GetByName("123", "ABC")
if getErr != nil {
   ...
}
fmt.Println(item)                   // Result: { name: "ABC" }
("123", "ABC")
```
