---
type: docs
title: "MongoDbPersistence"
linkTitle: "MongoDbPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/blob/main/pip-services4-mongodb-go"
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
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_storee)
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors

#### InheritMongoDbPersistence
Creates a new instance of the persistence component.

> InheritMongoDbPersistence[T any](overrides [IMongoDbPersistenceOverrides[T]](../imongodb_persistence_overrides), collection string) [*MongoDbPersistence]()

- **overrides**:  [IMongoDbPersistenceOverrides[T]](../imongodb_persistence_overrides) - overrides instance.
- **collection**: string - (optional) collection name.



### Fields

<span class="hide-title-link">

#### DependencyResolver
The dependency resolver.
> **DependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### Logger
The logger.
> **Logger**: [CompositeLogger](../../../observability/log/composite_logger)

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
> **maxPageSize**: int = 100

</span


### Methods

#### Clear
Clears a component's state.

> (c [*MongoDbPersistence[T]]()) Clear(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.
- **returns**: error -  error or nil no errors occured.


#### Close
Closes the component and frees used resources.

> (c [*MongoDbPersistence[T]]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.
- **returns**: error -  error or nil no errors occured.


#### Configure
Configure method is configures component by passing configuration parameters.

> (c [*MongoDbPersistence[T]]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### ConvertFromPublic
Converts an object value from public to internal format.

> (c [*MongoDbPersistence[T]]()) ConvertFromPublic(item T) (map[string]any, error)

- **value**: T - object in public format to convert.
- **returns**: (map[string]any, error) - converted object in internal format.

#### ConvertFromPublicPartial
ConvertFromPublicPartial method help convert object (map) from public view by replaced "Id" to "_id" field
> ConvertFromPublicPartial(item T) (map[string]any, error)

- **item**: T - item for conversion.
- **returns**: (map[string]any, error) - result map

#### ConvertToPublic
Converts and object value from internal to public format.

> (c [*MongoDbPersistence[T]]()) ConvertToPublic(value any) (T, error)

- **value**: any - object in internal format to convert.
- **returns**: (T, error) - converted object in public format.


#### Create
Creates a data item.

> (c [*MongoDbPersistence[T]]()) Create(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### DefineSchema
Defines the database schema

> (c [*MongoDbPersistence[T]]()) DefineSchema()


#### DeleteByFilter
This method shall be called by a func **DeleteByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MongoDbPersistence[T]]()) DeleteByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter any) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function used to filter items.
- **returns**: error -  error or nil no errors occured.


#### EnsureIndex
Adds index definition to create it on opening.

> (c [*MongoDbPersistence[T]]()) EnsureIndex(keys any, options *mongoopt.IndexOptions)

- **keys**: any - index keys (fields)
- **options**: *mongoopt.IndexOptions - index options

#### IsOpen
Method is checks if the component is opened.
> (c [*MongoDbPersistence[T]]()) IsOpen() bool

#### IsTerminated
Checks if the wee need to terminate process before close component.

> (c [*MongoDbPersistence[T]]()) IsTerminated() bool 

- **returns**: bool - true if you need terminate your processes.

#### Open
Open method is opens the component.
> (c *MongoDbPersistence[T]) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **returns**: error or nil when no errors occured.

#### GetCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a func **GetCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MongoDbPersistence[T]]()) GetCountByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter any) (count int64, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter JSON object
- **returns**: (count int64, err error) - number of filtered items.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a func **GetListByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MongoDbPersistence[T]]()) GetListByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter any, sort any, sel any) (items []T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function used to filter items
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: (items []T, err error) - data list of results by filter.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a func [GetOneRandom](#getonerandom) method from the child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MongoDbPersistence[T]]()) GetOneRandom(ctx context.Context, context [IContext](../../../components/context/icontext), filter any) (item T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - fileter JSON object.
- **returns**: (item T, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a func **GetPageByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MongoDbPersistence[T]]()) GetPageByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter any, paging [*cdata.PagingParams](../../../commons/data/paging_params), sort any, sel any) (page [*cdata.DataPage[T]](../../../commons/data/data_page), err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter JSON object
- **paging**: [*cdata.PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting JSON object
- **sel**: any - (optional) projection JSON object
- **returns**: (page [*cdata.DataPage[T]](../../../commons/data/data_page), err error) - data page obtained by filtering

#### SetReferences
Sets references to dependent components.

> (c [*MessageQueue]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```go
type MyMongoDbPersistence struct {
	*persistence.MongoDbPersistence[MyData]
}

func NewMyMongoDbPersistence() *MyMongoDbPersistence {
	c := &MyMongoDbPersistence{}
	c.MongoDbPersistence = persistence.InheritMongoDbPersistence[MyData](c, "my_data")
	return c
}

func (c *MyMongoDbPersistence) GetByName(ctx context.Context, context IContext, name string) (count int64, err error) {
	return c.MongoDbPersistence.GetCountByFilter(ctx, context, bson.M{"name": name})
}

func (c *MyMongoDbPersistence) Set(ctx context.Context, context IContext,
	item MyData) (result MyData, err error) {
	var defaultValue MyData

	newItem, err := c.Overrides.ConvertFromPublic(item)
	if err != nil {
		return defaultValue, err
	}

	id := newItem["_id"]
	filter := bson.M{"_id": id}
	var options mngoptions.FindOneAndReplaceOptions
	retDoc := mngoptions.After
	options.ReturnDocument = &retDoc
	upsert := true
	options.Upsert = &upsert

	res := c.Collection.FindOneAndReplace(ctx, filter, newItem, &options)
	if err := res.Err(); err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return result, nil
		}
		return result, err
	}

	c.Logger.Trace(ctx, context, "Set in %s with id = %s", c.CollectionName, id)
	var docPointer MyData
	if err := res.Decode(&docPointer); err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return result, nil
		}
		return result, err
	}

	return c.Overrides.ConvertToPublic(docPointer)
}

func main() {
	persistence := NewMyMongoDbPersistence()
	persistence.Configure(context.Background(), config.NewConfigParamsFromTuples(
		"host", "localhost",
		"port", 27017,
	))

	_ = persistence.Open(context.Background(), "123")
	persistence.Set(context.Background(), "123", MyData{Id: "123", Name: "ABC"})
	item, err := persistence.GetByName(context.Background(), "123", "ABC")
	fmt.Println(item) // Result: { name: "ABC" }
}
```

