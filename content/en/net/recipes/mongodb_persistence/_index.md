---
type: docs
no_list: true
title: "MongoDB Persistence"
linkTitle: "MongoDB Persistence"
weight: 50
---

by Aleksey Dvoykin

### Introduction

In our previous tutorials, we took a look at in-memory and file persistence component implementations. Another frequent choice of persistence is Pip.Service’s MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database.
The most basic implementation of this component is the MongoDbPersistence class defined in the [MongoDb module](../../mongodb). It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations. 

### MongoDBPersistence

This is a basic component that stores data items of any type. Some basic operations for creating, getting, and deleting are already included. More advanced CRUD operations over the data items can be implemented in child classes by accessing the **self._collection** or **self._model** properties. This component also contains methods for opening and closing connections using the credentials provided.

The example below demonstrates a class that implements the MongoDB persistence component for the [Beacon data model](../../tutorials/data_microservice/step2/). 

```cs
class BeaconMongoDbPersistence : MongoDbPersistence<BeaconV1>
{
    public BeaconMongoDbPersistence()
    {
        base("beacons");
    }

    public async BeaconV1 GetByNameAsync(string correlationId, string name)
    {
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Eq(x => x.Name, name);
        var result = await _collection.Find(filter).FirstOrDefaultAsync();
        return result;
    }

    public async BeaconV1 setAsync(String correlatonId, BeaconV1 item)
    {
        var filter = Builders<BeaconV1>.Filter.Eq(x => x.Id, item.Id);
        var options = new FindOneAndReplaceOptions<T>
        {
            ReturnDocument = ReturnDocument.After,
            IsUpsert = true
        };
        var result = await _collection.FindOneAndReplaceAsync(filter, item, options);
        return result;
    }
}

```

And this is how we could use such a class:

```cs
var persistence = new BeaconMongoDbPersistence();
await persistence.OpenAsync("test");

var beacon = new BeaconV1
{
    name: "Super Beacon"
};
await persistence.SetAsync("test", beacon);
var item = await persistence.GetByNameAsync("test", "Super Beacon");
await persistence.CloseAsync("test");
Console.Out.WriteLine(item);                   // Result: { name: "Super Beacon" }

```

### Configuring database connections

As mentioned earlier, the [MongoDbPersistence](../../mongodb/persistence/) contains methods for opening and closing connections. To connect to the appropriate database and collection, we need to first configure the connection with all necessary parameters. **MongoDbPersistence** uses the MongoDbConnection class for establishing connections. 

The [MongoDbConnection](../../mongodb/connect/mongodb_connection/) class provides MongoDB connectivity using a plain driver. To reduce the number of database connections needed, a connection can be defined and then shared through multiple persistence components.

By default, **MongoDbPersistence** tries to establish a local connection on MongoDb’s default port - 27017. If the desired MongoDb server is located elsewhere, the persistence should be configured with the corresponding host and port information. Persistence configuration can be performed in a number of ways.

The example below demonstrates how the [ConfigParams](../../commons/config/config_params/) class can be used for persistence configuration. To learn more about this class, and about microservice configuration in general, be sure to read [this](../configuration).

```cs
var persistence = new BeaconMongoDbPersistence();
// Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.Configure(ConfigParams.FromTuples(
	"connection.host", "localhost",
	"connection.port", "30000"
));
await persistence.openAsync(); 	// While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000
```

Likewise, a connection can be configured using a configuration file. In this case, there exist two approaches:
1. configuring multiple persistences using a common **MongoDbConnection**.
2. configuring a single persistence with its own, private **MongoDbConnection**.

To perform configuration using a single **MongoDbConnection**, one of the following descriptors should be used:

```pip-services:connection:mongodb:*:1.0 or pip-services3:connection:mongodb:*:1.0.```

To learn more about references, descriptors, and component references, follow [this link](../component_references).  
First, add an element with the “pip-services” descriptor to the configuration file.

```yml
...
# MongoDb Connection
- descriptor: "pip-services:connection:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...
```

Next, register the persistence as a component in the microservice’s **Factory**:

```cs
public class BeaconsFactory : Factory
{
    public static Descriptor BeaconsMongoDbPersistneceDescriptor = new Descriptor("beacons", "persistence", "mongodb", "default", "1.0");
    public BeaconsFactory()
    {
        RegisterAsType(BeaconsMongoDbPersistneceDescriptor, typeof(BeaconMongoDbPersistence));
    }
}

```

And add the [DefaultMongoDbFactory](../../mongodb/build/default_mongodb_factory/) to the microservice’s ProcessContainer:

```cs
public class BeaconsProcess : ProcessContainer
{
    public BeaconsProcess()
        : base("beacons", "Beacons microservice")
    {
        _factories.Add(new DefaultMongoDbFactory());
        _factories.Add(new BeaconsFactory());
    }
}


```

If we’re configuring just a single connection to the Beacons MongoDB persistence, the connection configuration should use the “beacons” descriptor:

```yml
...
# MongoDb persistence
- descriptor: "beacons:persistence:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...

```

### Identifiable data objects and IdentifiableMongoDBPersistence

The implementation we will be working with going forward is called the [IdentifiableMongoDbPersistence](../../mongodb/persistence/identifiable_mongodb_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../commons/data/iidentifiable/) interface defined in ehe [Commons](../../commons) module.

```cs
public interface IIdentifiable<T>
{
    T Id { get; set; }
}

```

**IdentifiableMongoDbPersistence** implements a number of CRUD operations that are based on working with the model's id in a predefined manner. In addition, it provides methods for getting paginated results and listing data using detailed filter, sort, and even projection parameters. 

```cs
public class IdentifiableMongoDbPersistence<T, K> : MongoDbPersistence<T>, IWriter<T, K>, IGetter<T, K>, ISetter<T>
    where T : IIdentifiable<K>
    where K : class
{

    public virtual async Task<DataPage<object>> GetPageByFilterAndProjectionAsync(string correlationId, FilterDefinition<T> filterDefinition, PagingParams paging = null, SortDefinition<T>
    sortDefinition = null, ProjectionParams projection = null);

    public virtual async Task<List<T>> GetListByIdsAsync(string correlationId, K[] ids);

    public virtual async Task<T> GetOneByIdAsync(string correlationId, K id);

    public virtual async Task<object> GetOneByIdAsync(string correlationId, K id, ProjectionParams projection);

    public override async Task<T> CreateAsync(string correlationId, T item);

    public virtual async Task<T> SetAsync(string correlationId, T item);

    public virtual async Task<T> UpdateAsync(string correlationId, T item);

    public virtual async Task<T> ModifyAsync(string correlationId, FilterDefinition<T> filterDefinition, UpdateDefinition<T> updateDefinition);

    public virtual async Task<T> ModifyByIdAsync(string correlationId, K id, UpdateDefinition<T> updateDefinition);

    public virtual async Task<T> DeleteByIdAsync(string correlationId, K id);

    public virtual async Task DeleteByIdsAsync(string correlationId, K[] ids);

    #region Overridable Compose Methods
    protected virtual FilterDefinition<T> ComposeFilter(FilterParams filterParams);

    protected virtual UpdateDefinition<T> ComposeUpdate(AnyValueMap updateMap);

    protected virtual SortDefinition<T> ComposeSort(SortParams sortParams);

    protected virtual ProjectionDefinition<T> CreateProjectionDefinition(ProjectionParams projection, ProjectionDefinitionBuilder<T> projectionBuilder);
}

```

We can build upon the **IdentifiableMongoDbPersistence** by overriding its **ComposeFilter** method:

```cs
class BeaconsMongoDbPersistence : IdentifiableMongoDbPersistence<BeaconV1, string>
{
    public constructor()
    {
        base("beacons");
    }

    protected override FilterDefinition<BeaconV1> ComposeFilter(FilterParams filter)
    {
        filterParams = filterParams ?? new FilterParams();
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Empty;
        String name = filter.getAsNullableString("name");
        if (name != null)
            filter &= builder.Eq(b => b.Name, name);
        filter &= builder.Eq(b => b.Name, name);
        return filter;
    }

    public GetAsync(String correlationId, FilterParams filter, PagingParams paging)
    {
        return await GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging, null, null);
    }

}


```


In most scenarios, child classes only need to override the **GetPageByFilterAsync()**, **GetListByFilterAsync()**, or **DeleteByFilterAsync()** operations using a custom filter function (like the **composeFilter** function in the example above). All of the other operations can be used straight out of the box. Developers can implement custom methods by directly accessing the data objects, which are stored in the _collection property. See [the MongoDb module’s API](../../mongodb) documentation for more details.

### Filtering

Persistence components in the Pip.Services Toolkit use a number of data patterns. **IdentifiableMongoDbPersistence**, for example, supports Filtering. This pattern allows clients to use a [FilterParams](../../commons/data/filter_params/) object to describe a subset of data using key-value pairs. These **FilterParams** can then be used for retrieving data in accordance with the specified search criteria see the [Commons](../../commons) module.

```cs
var filter = FilterParams.FromTuples(
    "name", "ABC"
);
var result = await persistence.GetPageByFilterAsync(null, filter, null);

```

In the persistence component, the developer is responsible for parsing **FilterParams** and passing a filter function to the persistence’s methods of the base class.

```cs
protected override FilterDefinition<BeaconV1> ComposeFilter(FilterParams filter)
{
    filterParams = filterParams ?? new FilterParams();
    var builder = Builders<BeaconV1>.Filter;
    var filter = builder.Empty;
    String name = filter.getAsNullableString("name");
    if (name != null)
        filter &= builder.Eq(b => b.Name, name);
    return filter;
}

```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks, through multiple calls to the storage. A client can ask for the results to be paged by specifying a set of [PagingParams](../../commons/data/paging_params/), which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. A DataPage object with a subset of the data will be returned as the result.


```cs
// skip = 25, take = 50, total = False
var paging = new PagingParams(25, 50, false);
var result = await persistence.GetPageByFilterAsync(null, null, paging);
```


### Custom Persistence Methods

As mentioned above, developers can also implement custom persistence methods. The **_collection** property can be used to access data objects from within such methods. Below is an example of a custom **GetOneByNameAsync** persistence method.

```cs
public async Task<BeaconV1> GetOneByNameAsync(string correlationId, string name)
{
    var builder = Builders<BeaconV1>.Filter;
    var filter = builder.Eq(x => x.Name, name);
    var result = await _collection.Find(filter).FirstOrDefaultAsync();
    if (result != null)
        _logger.Trace(correlationId, "Retrieved from {0} with name = {1}", _collectionName, name);
    else
        _logger.Trace(correlationId, "Nothing found from {0} with name = {1}", _collectionName, name);
    return result;
}


```

When we put everything together, we end up with the following component:

```cs
class BeaconsMongoDbPersistence : IdentifiableMongoDbPersistence<BeaconV1, string>
{
    public constructor()
    {
        base("beacons");
    }

    protected override FilterDefinition<BeaconV1> ComposeFilter(FilterParams filter)
    {
        filterParams = filterParams ?? new FilterParams();
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Empty;
        String name = filter.getAsNullableString("name");
        if (name != null)
            filter &= builder.Eq(b => b.Name, name);
        return filter;
    }

    public GetAsync(String correlationId, FilterParams filter, PagingParams paging)
    {
        return await GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging, null, null);
    }
    public async Task<BeaconV1> GetOneByNameAsync(string correlationId, string name)
    {
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Eq(x => x.Name, name);
        var result = await _collection.Find(filter).FirstOrDefaultAsync();
        if (result != null)
            _logger.Trace(correlationId, "Retrieved from {0} with name = {1}", _collectionName, name);
        else
            _logger.Trace(correlationId, "Nothing found from {0} with name = {1}", _collectionName, name);
        return result;
    }
}
```

The following example demonstrates how we can use our newly created persistence for writing and reading Beacon objects to a MongoDB:

```cs
var persistence = new BeaconMongoDbPersistence();
await persistence.OpenAsync();

var beacon = new BeaconV1
{
    name: "Super Beacon"
};

await persistence.SetAsync("test", beacon);
var item = await persistence.GetByNameAsync("test", "Super Beacon");
Console.Out.WriteLine(item);                   // Result: { name: "Super Beacon" }

var itemsPage = await persistence.GetPageByFilterAsync("test", FilterParams.FromTuples(
	"name", "Super Beacon"
), null);

Console.Out.WriteLine(itemsPage.Data.Count); // Result: 1
Console.Out.WriteLine(itemsPage.Data[0]); // Result: { name: "Super Beacon" }

await persistence.CloseAsync("test");
```
