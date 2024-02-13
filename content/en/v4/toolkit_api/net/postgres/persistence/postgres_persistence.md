---
type: docs
title: "PostgresPersistence"
linkTitle: "PostgresPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-postgres-dotnet"
description: >
    Abstract persistence component that stores data in PostgreSQL using the official driver.


    
---

**Inherits:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The PostgresPersistence class allows you to create persistence components that store data in PostgreSQL using the official driver.

**Important points**

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing **this._db** or **this._collection** properties.

#### Configuration parameters

- **collection**: (optional) PostgreSQL collection name
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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public` PostgresPersistence(string tableName = null, string schemaName = null)

- **tableName**: string - (optional) table name.
- **schemaName**: string - (optional) schema name.

### Fields

<span class="hide-title-link">

#### _tableName
PostgreSQL table name.
> `protected` **_tableName**: string

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _connection
PostgreSQL connection component.
> `protected` **_connection**: [PostgresConnection](../../connect/postgres_connection) 

#### _client
PostgreSQL connection pool object.
> `protected` **_client**: NpgsqlConnection 

#### _databaseName 
PostgreSQL database name.
> `protected` **_databaseName**: string

#### _maxPageSize
Maximum number of records to return from the database.
> `protected` **_maxPageSize** = 100

#### _schemaName
PostgreSQL schema object.
> `protected` **_schemaName**: string

</span>


### Instance methods

#### ClearAsync
Clears a component's state.

> `public virtual` Task ClearAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### ClearSchema
Clears all auto-created objects.

> `protected` void ClearSchema()


#### CloseAsync
Closes the component and frees used resources.

> `public virtual` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures the component.

> `public virtual` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to set.


#### ConvertFromPublic
Converts an object value from public to internal format.

> `protected virtual` [AnyValueMap](../../../commons/data/any_value_map) ConvertFromPublic(T value)

- **value**: T - object in public format to convert.
- **returns**: [AnyValueMap](../../../commons/data/any_value_map) - converted object in internal format.


#### ConvertToPublic
Converts an object value from internal to public format.

> `protected virtual` T ConvertToPublic([AnyValueMap](../../../commons/data/any_value_map) map)

- **value**: [AnyValueMap](../../../commons/data/any_value_map) - object in internal format to convert.
- **returns**: T - converted object in public format.


#### CreateAsync
Creates a data item.

> `public virtual` Task\<T\> CreateAsync(IContext context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Task\<T\> - created item


#### CreateSchemaAsync
Checks if a table exists and if it doesn't, it creates the necessary database objects.

> `protected` Task CreateSchemaAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### DefineSchema
Defines database schema via auto create objects or convenience methods.

> `protected virtual` void DefineSchema()


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **DeleteByFilterAsync** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `public virtual` Task DeleteByFilterAsync(IContext context, string filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter for JSON object.


#### EnsureIndex
Adds index definition to create it on opening.

> `protected` void EnsureIndex(string name, Dictionary\<string, bool\> keys, [IndexOptions](../index_options) options)

- **name**: string - the index name.
- **keys**: Dictionary\<string, bool\> - index keys (fields).
- **options**: [IndexOptions](../index_options) - index options.


#### EnsureSchema
Adds a statement to schema definition.

> `protected` void EnsureSchema(string schemaStatement)

- **schemaStatement**: string - statement to be added to the schema


#### GenerateColumns
Generates a list of column names to use in SQL statements like: "column1,column2,column3".

> `protected` string GenerateColumns([AnyValueMap](../../../commons/data/any_value_map) map)

- **map**: [AnyValueMap](../../../commons/data/any_value_map) - array with column values or a key-value map
- **returns**: string - generated list of column names 


#### GenerateParameters
Generates a list of value parameters to use in SQL statements like: "@Param1,@Param2,@Param3"

> `protected` string GenerateParameters([AnyValueMap](../../../commons/data/any_value_map) map)

- **map**: [AnyValueMap](../../../commons/data/any_value_map) - array with values or a key-value map
- **returns**: string - generated list of value parameters


Generates a list of column sets to use in UPDATE statements like: column1=%s,column2=%s.

> `protected` string GenerateParameters\<K\>(IEnumerable\<K\> values)

- **values**: IEnumerable\<K\> - key-value map with columns and values
- **returns**: string - generated list of column sets


#### GenerateValues
Generates a list of column parameters.

> `protected` List\<object\> GenerateValues([AnyValueMap](../../../commons/data/any_value_map) map)

- **values**: [AnyValueMap](../../../commons/data/any_value_map) - key-value map with columns and values
- **returns**: List\<object\> - generated list of column values



#### GetCountByFilterAsync
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **GetCountByFilterAsync** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected virtual` Task\<long\> GetCountByFilterAsync(IContext context, string filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) JSON object filter.
- **returns**: Task\<long\> - number of filtered items.


#### GetListByFilterAsync
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetListByFilterAsync** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` Task\<List\<T\>\> GetListByFilterAsync(IContext context, string filter, string sort = null, string select = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter function to filter items
- **sort**: string - (optional) sorting parameters
- **select**: string - (optional) projection parameters (not used yet)
- **returns**: Task\<List\<T\>\> - data list of filtered results.


#### GetOneRandomAsync
Gets a random item from items that match to a given filter.

This method shall be called by a public getOneRandom method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected virtual` Task\<T\> GetOneRandomAsync(IContext context, string filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter for JSON objects
- **returns**: Task\<T\> - random item.


#### GetPageByFilterAsync
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetPageByFilterAsync** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `public virtual` Task<[DataPage<T>](../../../data/query/data_page)> GetPageByFilterAsync(IContext context, string filter, [PagingParams](../../../data/query/paging_params) paging = null, string sort = null, string select = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter for JSON objects
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: string - (optional) sorting JSON object
- **select**: string - (optional) projection JSON object
- **returns**: Task<[DataPage<T>](../../../data/query/data_page)> - data page with filtered result



#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - true if the component is open and talse otherwise.


#### OpenAsync
Opens the component.

> `public virtual` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### QuoteIdentifier
Adds a single quote to each side of the string.

> `protected` string QuoteIdentifier(string value)

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> `public virtual` void UnsetReferences()

### Examples

```cs
class MyPostgresPersistence: PostgresPersistence<MyData> 
{
    public MyPostgresPersistence(): base("mydata") { }
    
    public MyData getByName(IContext context, string name)
    {
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Eq(x => x.Name, name);
        var result = await _collection.Find(filter).FirstOrDefaultAsync();
        return result;
    }
    public MyData set(String correlatonId, MyData item)
    {
        var filter = Builders<T>.Filter.Eq(x => x.Id, item.Id);
        var options = new FindOneAndReplaceOptions<T>
        {
            ReturnDocument = ReturnDocument.After,
            IsUpsert = true
        };
        var result = await _collection.FindOneAndReplaceAsync(filter, item, options);
        return result;
    }
}
 
var persistence = new MyPostgresPersistence();
persistence.Configure(ConfigParams.FromTuples(
  "host", "localhost",
  "port", 27017 )
);

persitence.Open("123");
var mydata = new MyData("ABC");
persistence.Set("123", mydata);
persistence.GetByName("123", "ABC");
Console.Out.WriteLine(item);                   // Result: { name: "ABC" }

```
