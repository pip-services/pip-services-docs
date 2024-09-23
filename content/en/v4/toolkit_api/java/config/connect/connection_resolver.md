---
type: docs
title: "ConnectionResolver"
linkTitle: "ConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Helper class used to retrieve component connections.

---

### Description

The ConnectionResolver class is used to retrieve component connections.

Important points

- If the connections are configured to be retrieved from [IDiscovery](../idiscovery), the connection resolver will automatically locate [IDiscovery](../idiscovery) in component references and retrieve the connections from there using the discovery_key parameter.

#### Configuration parameters

**connection**:  
- **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../idiscovery)
- **...** : other connection parameters

**connections**:  alternative to connection
- **[connection params 1]**: first connection parameters
    - **...** :  connection parameters for key 1
- **[connection params N]**: Nth connection parameters
    - **...** : connection parameters for key N

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../idiscovery) services to resolve connections




### Constructors
Creates a new instance of connection resolver.

> `public` ConnectionResolver([ConfigParams](../../../components/config/config_params) config, [IReferences](../../../components/refer/ireferences) references)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../components/refer/ireferences) - (optional) component references


### Instance methods

#### add
Adds a new connection to component connections

> `public` void add([ConnectionParams](../connection_params) connection)

- **connection**: [ConnectionParams](../connection_params) - new connection parameters to be added


#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### getAll
Gets all connections configured in component configuration.
Redirect to Discovery services is not done at this point.
If you need fully fleshed connection use **resolve** method instead.

> `public` List<[ConnectionParams](../connection_params)> getAll()

- **returns**: List<[ConnectionParams](../connection_params)> - a list with connection parameters


#### register
Registers the given connection in all referenced discovery services.
This method can be used for dynamic service discovery.

> `public` void register([IContext](../../../components/context/icontext) context, [ConnectionParams](../connection_params) connection) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **connection**: [ConnectionParams](../connection_params) - a connection to register.


#### resolve
Resolves a single component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> `public` [ConnectionParams](../connection_params) resolve([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **returns**: [ConnectionParams](../connection_params) - resolved connection parameters or null if nothing was found.


#### resolveAll
Resolves all component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> `public` List<ConnectionParams> resolveAll([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **returns**: [ConnectionParams](../connection_params)[] - a list of resolved connections.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples

```java
{
  ConfigParams config = ConfigParams.fromTuples(
       "connection.host", "10.1.1.100",
       "connection.port", 8080
  );
 
  ConnectionResolver connectionResolver = new ConnectionResolver();
  connectionResolver.configure(config);
  connectionResolver.setReferences(references);
 
  connectionResolver.resolve("123");
  }
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
