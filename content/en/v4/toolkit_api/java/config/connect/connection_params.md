---
type: docs
title: "ConnectionParams"
linkTitle: "ConnectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Contains connection parameters used to connect to external services.

---

**Extends**: [ConfigParams](../../../components/config/config_params)

### Description

The ConnectionParams class allows you to create connection parameters used to connect to external services.

 Important points
    
 - Usually, connection parameters are used together with credential parameters, but are stored
    separately from these more protected and sensitive values.

#### Configuration parameters

- **discovery_key**: key to retrieve parameters from discovery service
- **protocol**: connection protocol like http, https, tcp, udp
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

In addition to standard parameters ConnectionParams may contain any number of custom parameters.


### Constructors
Creates a new connection parameters and fills it with values.

> `public` ConnectionParams(Map<?, ?> map)

- **map**: Map<?, ?> - (optional) an object to be converted into key-value pairs to initialize this connection.

### Instance methods

#### getDiscoveryKey
Gets the key to retrieve this connection from DiscoveryService.
If this key is null, then all parameters are already present.

> `public` String getDiscoveryKey()

- **returns**: String - resolved options or error.


#### getHost
Gets the host name or IP address.

> `public` String getHost()

- **returns**: String - the host name or IP address.


#### getPort
Gets the port number.

> `public` int getPort()

- **returns**: int - the port number.


#### getPortWithDefault
Gets the port number with default value.

> `public` int getPortWithDefault(int defaultPort)

- **defaultPort**: int - a default port number.
- **returns**: int - the port number.


#### getProtocol
Gets the connection protocol.

> `public` String getProtocol()

- **returns**: String - the connection protocol or the default value if it's not set.


#### getProtocolWithDefault
Gets the connection protocol with default value.

> `public` String getProtocolWithDefault(String defaultValue)

- **defaultValue**: String - (optional) the default protocol
- **returns**: String - the connection protocol or the default value if it's not set.


#### getUri
Gets the resource URI or connection string. Usually it includes all connection parameters in it.

> `public` String getUri()

- **returns**: String - the resource URI or connection string.


#### setDiscoveryKey
Sets the key to retrieve these parameters from DiscoveryService.

> `public` void setDiscoveryKey(String value)

- **value**: String - a new key to retrieve connection.


#### setHost
Sets the host name or IP address.

> `public` void setHost(String value)

- **value**: String - a new host name or IP address.


#### setPort
Sets the port number.

> `public` void setPort(int value)

- **value**: int - a new port number.


#### setProtocol
Sets the connection protocol.

> `public` void setProtocol(String value)

- **value**: String - a new connection protocol.


#### setUri
Sets the resource URI or connection string.

> `public` void setUri(String value)

- **value**: String - a new resource URI or connection string.


#### useDiscovery
Checks if these connection parameters shall be retrieved from DiscoveryService.
The connection parameters are redirected to DiscoveryService when discovery_key parameter is set.

> `public` boolean useDiscovery()

- **returns**: boolean - true if connection shall be retrieved from DiscoveryService

### Static methods

#### fromConfig
Retrieves a single ConnectionParams from configuration parameters
from "connection" section. If "connections" section is present instead,
then it returns only the first connection element.

> `public static` [ConnectionParams]() fromConfig([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - ConnectionParams, containing a section named "connection(s)".
- **returns**: [ConnectionParams]() - the generated ConnectionParams object.


#### fromString
Creates a new ConnectionParams object filled with key-value pairs serialized as a string.

> `public static` [ConnectionParams]() fromString(String line)

- **line**: String - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**

- **returns**: [ConnectionParams]() - a new ConnectionParams object.


#### fromTuples
Creates a new ConnectionParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `public static` [ConnectionParams]() fromTuples(Object... tuples)

- **tuples**: Object... - the tuples to fill a new ConnectionParams object.

- **returns**: [ConnectionParams]() - a new ConnectionParams object.


#### manyFromConfig
Retrieves all ConnectionParams from configuration parameters
from "connections" section. If "connection" section is present instead,
then it returns a list with only one ConnectionParams.

> `public static` List<[ConnectionParams]()> manyFromConfig([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - a configuration parameters to retrieve connections

- **returns**: [ConnectionParams]()[] - a list of retrieved ConnectionParams

### Examples

```java
{
  Example ConnectionParams object usage:
 
  ConnectionParams connection = ConnectionParams.fromTuples(
   "protocol", "http",
   "host", "10.1.1.100",
   "port", "8080",
   "cluster", "mycluster"
  );
 
  String host = connection.getHost();                             // Result: "10.1.1.100"
  int port = connection.getPort();                             // Result: 8080
  String cluster = connection.getAsNullableString("cluster");     // Result: "mycluster"
  } 
```

### See also
- #### [ConfigParams](../../../components/config/config_params)
- #### [CredentialParams](../../auth/credential_params)
- #### [ConnectionResolver](../connection_resolver)
- #### [IDiscovery](../idiscovery)
