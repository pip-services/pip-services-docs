---
type: docs
title: "PostgresPersistence"
linkTitle: "PostgresPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-postgres-dart"
description: >
    Abstract persistence component that stores data in PostgreSQL using the official driver.


    
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The PostgresPersistence class allows you to create persistence components that store data in PostgreSQL using the official driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing **this._db** or **this._collection** properties.

#### Configuration parameters

- **table**: (optional) PostgreSQL table name
- **schema**: (optional) PostgreSQL schema name

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

> PostgresPersistence(String? tableName, String? schemaName)

- **tableName**: string - (optional) table name.
- **schemaName**: string - (optional) a schema name.

### Fields

<span class="hide-title-link">

#### tableName_
The PostgreSQL table name.
> **_tableName**: string

#### _dependencyResolver
The dependency resolver.
> **dependencyResolver_**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### logger_
The logger.
> **logger_**: [CompositeLogger](../../../observability/log/composite_logger)

#### connection_
The PostgreSQL connection component.
> **connection_**: [PostgresConnection](../../connect/postgres_connection) 

#### client_
The PostgreSQL connection pool object.
> **client_**: [PostgresConnection](../../connect/postgres_connection) 

#### databaseName_ 
The PostgreSQL database name.
> **databaseName_**: string

#### maxPageSize_
The maximum number of records to return from the database.
> **maxPageSize_**: int = 100

#### schemaName_
The SQLServer schema object.
> **schemaName_**: string

</span>


### Instance methods

#### clear
Clears a component's state.

> void clearSchema()

#### clearSchema
Clears all auto-created objects.

>  void clearSchema()

#### close
Closes the component and frees used resources.

> Future close(IContext? context) async

- **context**: [IContext](../../../components/context/icontext)- a context to trace execution through a call chain.

#### configure
Configures the component.

> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to set.


#### convertFromPublic
Converts an object value from public to internal format.

> dynamic convertFromPublic_(dynamic value)

- **value**: dynamic - object in public format to convert.
- **returns**: dynamic - converted object in internal format.


#### convertToPublic
Converts an object value from internal to public format.

> dynamic convertToPublic_(dynamic value)

- **value**: dynamic - object in internal format to convert.
- **returns**: dynamic - converted object in public format.


#### create
Creates a data item.

> Future<T?> create(IContext? context, T item) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Future<T?> - created item


#### createSchema
Checks if a table exists and if it doesn't, it creates the necessary database objects.

> Future<void> createSchema_(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### defineSchema
Defines database schema via auto create objects or convenience methods.

> void defineSchema_()


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future<void> deleteByFilter_(IContext? context, String? filter) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter function used to filter items.


#### ensureIndex_
Adds index definition to create it on opening.

> void ensureIndex_(String name, Map keys, Map? options)

- **keys**: Map - index keys (fields)
- **options**: Map - index options


#### ensureSchema_
Adds a statement to schema definition.

> void ensureSchema_(String schemaStatement)

- **schemaStatement**: string - statement to be added to the schema


#### generateColumns_
Generates a list of column names to use in SQL statements like: "column1,column2,column3".

> String generateColumns_(values)

- **values**: array with column values or a key-value map
- **returns**: string - generated list of column names 


#### generateParameters_
Generates a list of value parameters to use in SQL statements like: *"$1,$2,$3"*.

> String generateParameters_(values)

- **values**: array with values or a key-value map
- **returns**: string - generated list of value parameters


#### generateSetParameters_
Generates a list of column sets to use in UPDATE statements like: *"@1,@2,@3"*.

> String generateSetParameters_(Map values)

- **values**: Map - key-value map with columns and values
- **returns**: string - generated list of column sets


#### generateValues_
Generates a list of column parameters.

> Map<String, dynamic> generateValues_(values)

- **values**: key-value map with columns and values
- **returns**: Map<String, dynamic> - generated list of column values



#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future<int> getCountByFilter_(IContext? context, String? filter) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) JSON object filter.
- **returns**: Future<int> - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future<List<T>> getListByFilter_(IContext? context, String? filter, String? sort, String? select) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter function to filter items
- **sort**: string - (optional) sorting parameters
- **select**: string - (optional) projection parameters (not used yet)
- **returns**: Future<List<T>> - data list of filtered results.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public getOneRandom method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future<T?> getOneRandom_(IContext? context, String? filter) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter for JSON objects
- **returns**: Future<T?> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future<DataPage<T>> getPageByFilter_(IContext? context, String? filter, PagingParams? paging, String? sort, String? select) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter for JSON objects
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: string - (optional) sorting JSON object
- **select**: string - (optional) projection JSON object
- **returns**: Future<DataPage<T>> - data page with filtered result



#### isOpen
Checks if the component is opened.

> bool isOpen()

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> Future open(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### quoteIdentifier
Adds a single quote to each side of the string.

> String quoteIdentifier_(String? value)

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### quotedTableName
Joins schema and database name in dot notation

> String quotedTableName_()

- **returns**: string - string with added quotes


#### setReferences
Sets references to dependent components.

> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> void unsetReferences()

### Examples

```dart
 class MyPostgresPersistence extends PostgresPersistence<MyData> {
       MyPostgresPersistence() : super("mydata", null);

       @override
       void defineSchema_() {
         clearSchema();
         ensureSchema_('CREATE TABLE ' +
             tableName_! +
             ' (id TEXT PRIMARY KEY, key TEXT, content TEXT)');
         ensureIndex_(tableName_! + '_key', {'key': 1}, {'unique': true});
       }


       Future<String?> getByName(IContext? context, String name) async {
         var query = "SELECT * FROM " + quotedTableName_() + " WHERE \"name\"=@1";
         var params = {'1': id};

         var res = await client_!.query(query, substitutionValues: params);

         if (res.toList().isEmpty)
           logger_.trace(context, "Nothing found from %s with name = %s",
               [tableName_, name]);
         else
           logger_.trace(context, "Retrieved from %s with name = %s",
               [tableName_, name]);

         var resValues = res.isNotEmpty
             ? Map<String, dynamic>.fromIterables(
                 res.columnDescriptions.map((e) => e.columnName), res.first.toList())
             : null;
         var item = convertToPublic_(resValues);


         return item;

       }

       Future<T?> set(IContext? context, T? item) async {
         if (item == null) {
           return null;
         }

         // Assign unique id
         dynamic newItem = item;
         if (newItem.id == null && autoGenerateId_) {
           newItem = (newItem as ICloneable).clone();
           newItem.id = IdGenerator.nextLong();
         }

         var row = convertFromPublic_(item);
         var columns = generateColumns_(row);
         var params = generateParameters_(row);
         var setParams = generateSetParameters_(row);
         var values = generateValues_(row);

         var query = "INSERT INTO " +
             quotedTableName_() +
             " (" +
             columns +
             ")" +
             " VALUES (" +
             params +
             ")" +
             " ON CONFLICT (\"id\") DO UPDATE SET " +
             setParams +
             " RETURNING *";

         var res = await client_!.query(query, substitutionValues: values);

         var resValues = res.isNotEmpty
             ? Map<String, dynamic>.fromIterables(
                 res.columnDescriptions.map((e) => e.columnName), res.first.toList())
             : null;
         newItem = convertToPublic_(resValues);

         if (newItem != null) {
           logger_.trace(context, "Set in %s with id = %s",
               [quotedTableName_(), newItem.id]);
         }

         return newItem;
       }

     var persistence = MyPostgresPersistence();
     persistence.configure(ConfigParams.fromTuples(["host", "localhost", "port", 5432]));
     await persistence.open(null);
     var item = await persistence.set(null, MyData());
     print(item);
```
