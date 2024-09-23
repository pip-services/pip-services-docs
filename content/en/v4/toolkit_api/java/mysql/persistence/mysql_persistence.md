---
type: docs
title: "MySqlPersistence<T>"
linkTitle: "MySqlPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-mysql-java"
description: >
    Abstract persistence component that stores data in MySQL using the official driver.
    
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The MySqlPersistence class allows you to create persistence components that store data in MySQL databases using the official driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **this._db** or **this._collection** properties.

#### Configuration parameters

- **table**: (optional) MySQL table name
- **schema**: (optional) MySQL schema name

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
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public`  MySqlPersistence(Class<T> documentClass, String tableName, String schemaName)

- **tableName**: string - (optional) table name.
- **schemaName**: string - (optional) a schema name.


### Fields

<span class="hide-title-link">

#### _databaseName
The MySql database name.
> `protected` String **_databaseName**;

#### _dependencyResolver
The dependency resolver.
> `protected` [DependencyResolver](../../../components/refer/dependency_resolver) **_dependencyResolver** = new DependencyResolver(MySqlPersistence._defaultConfig);

#### _logger
The logger.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger();

#### _connection
The MySql connection component.
> `protected` [MySqlConnection](../../connect/mysql_connection) **_connection**;  

#### _client
The MySql connection pool object.
> `protected` Connection **_client**;

#### _tableName 
The MySQL table name.

> `protected` String **_tableName**;

#### _maxPageSize
The maximum number of records to return from the database per request.
> `protected` int **_maxPageSize** = 100;

#### _schemaName
The SQLServer schema object.
> `protected` String **_schemaName**;

</span>


### Instance methods

#### clear
Clears a component's state.

> `public` void clear([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### clearSchema
Clears all auto-created objects

> `protected` void clearSchema()


#### close
Closes a component and frees the used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config:**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### convertFromPublic
Converts object value from public to internal format.

> `protected` Map<String, Object> convertFromPublic(Object value)

- **value**: Object - object in public format to convert.
- **returns**: Map<String, Object> - converted object in internal format.


#### convertToPublic
Converts object value from internal to public format.

> `protected` T convertToPublic(Map<String, Object> value)

- **value**: Map<String, Object> - object in internal format to convert.
- **returns**: T - converted object in public format.


#### create
Creates a data item.

> `public` T create([IContext](../../../components/context/icontext) context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### createSchema
Checks if a table exists and if not, it creates the necessary database objects.
> `protected` void createSchema([IContext](../../../components/context/icontext)t context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### defineSchema
Defines database schema via auto create objects or convenience methods.

> `protected` void defineSchema()


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` void deleteByFilter([IContext](../../../components/context/icontext) context, String filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: String - (optional) filter function to filter items.


#### ensureIndex
Adds index definition to create it on opening.

> `protected` void ensureIndex(String name, Map<String, Object> keys, Map<String, Object> options)

- **keys**: Map<String, Object> - index keys (fields)
- **options**: Map<String, Object> - index options


#### ensureSchema
Adds a statement to schema definition.

> `protected` void ensureSchema(String schemaStatement)

- **schemaStatement**: String - statement to be added to the schema


#### generateColumns
Generates a list of column names to use in SQL statements like: *"column1,column2,column3"*.

> `protected` String generateColumns(Map<String, Object> values)

- **values**: Map<String, Object> - array with column values or a key-value map
- **returns**: String - generated list of column names 


#### generateParameters
Generates a list of value parameters to use in SQL statements like: *"$1,$2,$3"*.

> `protected` String generateParameters(Map<String, Object> values)

- **values**: Map<String, Object> - array with values or a key-value map
- **returns**: string - generated list of value parameters


#### generateSetParameters
Generates a list of column sets to use in UPDATE statements like: column1=$1,column2=$2

> `protected` String generateSetParameters(Map<String, Object> values)

- **values**: Map<String, Object> - key-value map with columns and values
- **returns**: String - generated list of column sets


#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` long getCountByFilter([IContext](../../../components/context/icontext) context, Object filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Object - (optional) JSON object filter
- **returns**: long - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` List<T> getListByFilter([IContext](../../../components/context/icontext) context, String filter, String sort, String select)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: String - (optional) filter function to filter items
- **sort**: String - (optional) sorting parameters
- **select**: String - (optional) projection parameters (not used yet)
- **returns**: List<T> - data list of results by filter.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **getOneRandom** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` T getOneRandom(context: [IContext](../../../components/context/icontext), String filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: String - (optional) a filter JSON object
- **returns**: <T> - a random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from the a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` [DataPage<T>](../../../data/query/data_page) getPageByFilter(context: [IContext](../../../components/context/icontext), String filter, paging: PagingParams, String sort, String select)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: String - (optional) filter for JSON objects.
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: String - (optional) sorting JSON object
- **select**: String - (optional) projection JSON object
- **returns**: [DataPage<T>](../../../data/query/data_page) - a data page of result by filter



#### isOpen
Checks if the component is opened.

> `public` boolean isOpen()

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` void open(context: [IContext](../../../components/context/icontext))

- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id used to trace execution through the call chain.


#### quoteIdentifier
Adds single quotes to a string.

> `protected` String quoteIdentifier(value: string)

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### quotedTableName
Joins schema and database name in dot notation

> `protected` String quotedTableName()

- **returns**: string - string with added quotes


#### setReferences
Sets references to dependent components.

> `public` void setReferences(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` void unsetReferences()

### Examples
```java
{@code
public class MyMySqlPersistence extends MySqlPersistence<MyData> {


   public MyMySqlPersistence(Class<MyData> documentClass) {
       super(documentClass, "mydata", null);
   }

   public MyData getByName(IContext context, String name) {
       MyData item;
       var resultMap = new HashMap<String, Object>();

       var query = "SELECT * FROM " + this.quotedTableName() + " WHERE name=" + "'" + name + "'";

       try (var stmt = this._client.createStatement()) {
           var rs = stmt.executeQuery(query);

           if (rs.next())
               for (int columnIndex = 1; columnIndex <= rs.getMetaData().getColumnCount(); columnIndex++)
                   resultMap.put(rs.getMetaData().getColumnName(columnIndex), rs.getObject(columnIndex));
       } catch (SQLException ex) {
           throw new RuntimeException(ex);
       }

       item = this.convertToPublic(resultMap);

       return item;
   }

   public MyData set(IContext context, MyData item) {
       if (item == null)
           return null;

       var row = this.convertFromPublic(item);
       var columns = this.generateColumns(row);
       var params = this.generateParameters(row);
       var setParams = this.generateSetParameters(row);

       var query = "INSERT INTO " + this.quotedTableName() + " (" + columns + ") VALUES (" + params + ")";
       query += " ON DUPLICATE KEY UPDATE " + setParams + ";";

       MyData newItem;
       var resultMap = new HashMap<String, Object>();

       try (var stmt = this._client.createStatement()) {
           stmt.execute(query);

           query = "SELECT * FROM " + this.quotedTableName() + " WHERE id=" + "'" + item.getId().toString() + "'";

           var rs = stmt.executeQuery(query);

           // fetch results
           if (rs.next())
               for (int columnIndex = 1; columnIndex <= rs.getMetaData().getColumnCount(); columnIndex++)
                   resultMap.put(rs.getMetaData().getColumnName(columnIndex), rs.getObject(columnIndex));
       } catch (SQLException ex) {
           throw new RuntimeException(ex);
       }

       newItem = this.convertToPublic(resultMap);
       return newItem;
   }
 }
 ...
 var persistence = new MyMySqlPersistence(MyData.class);
 persistence.configure(ConfigParams.fromTuples(
       "host", "localhost",
       "port", 3306
 ));

 persistence.open(null);

 persistence.set("123", new MyData("1", "ABC", "content"));
 var item = persistence.getByName("123", "ABC");
 System.out.println(item.getName());
 }
   
```

