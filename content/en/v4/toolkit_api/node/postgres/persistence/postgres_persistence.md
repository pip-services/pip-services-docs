---
type: docs
title: "PostgresPersistence"
linkTitle: "PostgresPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-postgres-node"
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

> `public` constructor(tableName?: string,  schemaName?: string)

- **tableName**: string - (optional) table name.
- **schemaName**: string - (optional) a schema name.

### Fields

<span class="hide-title-link">

#### _tableName
The PostgreSQL table name.
> `protected` **_tableName**: string

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _connection
The PostgreSQL connection component.
> `protected` **_connection**: [PostgresConnection](../../connect/postgres_connection) 

#### _client
The PostgreSQL connection pool object.
> `protected` **_client**: any 

#### _databaseName 
The PostgreSQL database name.
> `protected` **_databaseName**: string

#### _maxPageSize
The maximum number of records to return from the database.
> `protected` **_maxPageSize** = 100

#### _schemaName
The SQLServer schema object.
> `protected` **_schemaName**: string

</span>


### Instance methods

#### clear
Clears a component's state.

> `public` clear(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext)- a context to trace execution through a call chain.

#### clearSchema
Clears all auto-created objects.

> `protected` clearSchema(): void


#### close
Closes the component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext)- a context to trace execution through a call chain.


#### configure
Configures the component.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to set.


#### convertFromPublic
Converts an object value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertToPublic
Converts an object value from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### create
Creates a data item.

> `public` create(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### createSchema
Checks if a table exists and if it doesn't, it creates the necessary database objects.

> `protected` createSchema(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### defineSchema
Defines database schema via auto create objects or convenience methods.

> `protected` defineSchema(): void


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> deleteByFilter(context: [IContext](../../../components/context/icontext), filter: any): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function used to filter items.


#### ensureIndex
Adds index definition to create it on opening.

> `protected` ensureIndex(name: string, keys: any, options?: any): void

- **keys**: any - index keys (fields)
- **options**: any - index options


#### ensureSchema
Adds a statement to schema definition.

> `protected` ensureSchema(schemaStatement: string): void

- **schemaStatement**: string - statement to be added to the schema


#### generateColumns
Generates a list of column names to use in SQL statements like: "column1,column2,column3".

> `protected` generateColumns(values: any): string

- **values**: any - array with column values or a key-value map
- **returns**: string - generated list of column names 


#### generateParameters
Generates a list of value parameters to use in SQL statements like: *"$1,$2,$3"*.

> `protected` generateParameters(values: any): string

- **values**: any - array with values or a key-value map
- **returns**: string - generated list of value parameters


#### generateSetParameters
Generates a list of column sets to use in UPDATE statements like: *"@1,@2,@3"*.

> `protected` generateSetParameters(values: any): string

- **values**: any - key-value map with columns and values
- **returns**: string - generated list of column sets


#### generateValues
Generates a list of column parameters.

> `protected` generateValues(values: any): any[]

- **values**: any - key-value map with columns and values
- **returns**: any[] - generated list of column values



#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getCountByFilter(context: [IContext](../../../components/context/icontext), filter: any): Promise\<number\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) JSON object filter.
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
- **returns**: Promise\<T[]\> - data list of filtered results.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public getOneRandom method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getOneRandom(context: [IContext](../../../components/context/icontext), filter: any): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter for JSON objects
- **returns**: Promise\<T\> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getPageByFilter(context: [IContext](../../../components/context/icontext), filter: any, paging: PagingParams, sort: any, select: any): Promise<[DataPage<T>](../../../data/query/data_page)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter for JSON objects
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting JSON object
- **select**: any - (optional) projection JSON object
- **returns**: Promise<[DataPage<T>](../../../data/query/data_page)> - data page with filtered result



#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### quoteIdentifier
Adds a single quote to each side of the string.

> `protected` quoteIdentifier(value: string): string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### quotedTableName
Joins schema and database name in dot notation

> `protected` quotedTableName(): string

- **returns**: string - string with added quotes


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Examples

```typescript
export class MyPostgresPersistence extends PostgresPersistence<MyData> {
    public constructor() {
        super("mydata");
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE ' + this._tableName + ' (id TEXT PRIMARY KEY, name TEXT, content TEXT)');
        this.ensureIndex(this._tableName + '_key', { name: 1 }, { unique: true });
    }

    public async set(context: IContext, item: MyData): Promise<MyData> {
        if (item == null)
            return null;
        
        let row = this.convertFromPublic(item);
        let columns = this.generateColumns(row);
        let params = this.generateParameters(row);
        let setParams = this.generateSetParameters(row);
        let values = this.generateValues(row);

        let query = "INSERT INTO " + this.quotedTableName() + " (" + columns + ")"
            + " VALUES (" + params + ")"
            + " ON CONFLICT (\"id\") DO UPDATE SET " + setParams + " RETURNING *";

        let newItem = await new Promise<any>((resolve, reject) => {
            this._client.query(query, values, (err, result) => {
                if (err != null) {
                    reject(err);
                    return;
                }

                let item = result && result.rows && result.rows.length == 1
                    ? result.rows[0] : null;
                resolve(item);
            });
        });

        newItem = this.convertToPublic(newItem);
        return newItem;
    }

    public async getOneByName(context: IContext, name: string): Promise<MyData> {
        let query = "SELECT * FROM " + this.quotedTableName() + " WHERE \"name\"=$1";
        let params = [name];

        let item = await new Promise<any>((resolve, reject) => {
            this._client.query(query, params, (err, result) => {
                if (err != null) {
                    reject(err);
                    return;
                }

                let item = result && result.rows ? result.rows[0] || null : null;
                resolve(item);
            });
        });

        item = this.convertToPublic(item);
        return item;
    }
}

let persistence = new MyPostgresPersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 5432,
    "credential.username", "postgres",
    "credential.password", "postgres",
    "connection.database", "mytestobjects"
));

await persitence.open("123");
let item = await persistence.set("123", { name: "ABC" });
item = await persistence.getByName("123", "ABC");
console.log(item);   // Result: { name: "ABC" }

```
