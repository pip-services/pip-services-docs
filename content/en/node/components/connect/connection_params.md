---
type: docs
title: "ConnectionParams"
linkTitle: "ConnectionParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Contains connection parameters used to connect to external services.

---

**Extends**: [ConfigParams](../../../commons/config/config_params)

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

> `public` constructor(map: any = null)

- **map**: any - (optional) an object to be converted into key-value pairs to initialize this connection.

### Instance methods

#### getDiscoveryKey
Gets the key to retrieve this connection from DiscoveryService.
If this key is None, then all parameters are already present.

> `public` get_discovery_key(): string

- **returns**: string - resolved options or error.


#### getHost
Gets the host name or IP address.

> `public` getHost(): string

- **returns**: string - the host name or IP address.


#### getPort
Gets the port number.

> `public` getPort(): number

- **returns**: number - the port number.


#### getPortWithDefault
Gets the port number with default value.

> `public` getPortWithDefault(defaultPort: number): number

- **defaultPort**: number - a default port number.
- **returns**: number - the port number.


#### getProtocol
Gets the connection protocol.

> `public` getProtocol(): string

- **returns**: string - the connection protocol or the default value if it's not set.


#### getProtocolWithDefault
Gets the connection protocol with default value.

> `public` getProtocolWithDefault(defaultValue: string = null): string

- **defaultValue**: string - (optional) the default protocol
- **returns**: string - the connection protocol or the default value if it's not set.


#### getUri
Gets the resource URI or connection string. Usually it includes all connection parameters in it.

> `public` getUri(): string

- **returns**: string - the resource URI or connection string.


#### setDiscoveryKey
Sets the key to retrieve these parameters from DiscoveryService.

> `public` setDiscoveryKey(value: string): void

- **value**: string - a new key to retrieve connection.


#### setHost
Sets the host name or IP address.

> `public` setHost(value: string): void

- **value**: string - a new host name or IP address.


#### setPort
Sets the port number.

> `public` setPort(value: number): void

- **value**: number - a new port number.


#### setProtocol
Sets the connection protocol.

> `public` setProtocol(value: string): void

- **value**: string - a new connection protocol.


#### setUri
Sets the resource URI or connection string.

> `public` setUri(value: string): void

- **value**: string - a new resource URI or connection string.


#### useDiscovery
Checks if these connection parameters shall be retrieved from DiscoveryService.
The connection parameters are redirected to DiscoveryService when discovery_key parameter is set.

> `public` useDiscovery(): boolean

- **returns**: boolean - true if connection shall be retrieved from DiscoveryService

### Static methods

#### fromConfig
Retrieves a single ConnectionParams from configuration parameters
from "connection" section. If "connections" section is present instead,
then it returns only the first connection element.

> `public static` fromConfig(config: [ConfigParams](../../../commons/config/config_params)): [ConnectionParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) - ConnectionParams, containing a section named "connection(s)".
- **returns**: [ConnectionParams]() - the generated ConnectionParams object.


#### fromString
Creates a new ConnectionParams object filled with key-value pairs serialized as a string.

> `public static` fromString(line: string): [ConnectionParams]()

- **line**: [ConfigParams](../../../commons/config/config_params) - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**

- **returns**: [ConnectionParams]() - a new ConnectionParams object.


#### fromTuples
Creates a new ConnectionParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `public static` from_tuples(...tuples: any[]): [ConnectionParams]()

- **tuples**: any[] - the tuples to fill a new ConnectionParams object.

- **returns**: [ConnectionParams]() - a new ConnectionParams object.


#### manyFromConfig
Retrieves all ConnectionParams from configuration parameters
from "connections" section. If "connection" section is present instead,
then it returns a list with only one ConnectionParams.

> `public static` many_from_config(config: [ConfigParams](../../../commons/config/config_params)): [ConnectionParams]()[]

- **config**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters to retrieve connections

- **returns**: [ConnectionParams]()[] - a list of retrieved ConnectionParams

### Examples

```typescript
let connection = ConnectionParams.fromTuples(
    "protocol", "http",
    "host", "10.1.1.100",
    "port", "8080",
    "cluster", "mycluster"
);
   
let host = connection.getHost();                             // Result: "10.1.1.100"
let port = connection.getPort();                             // Result: 8080
let cluster = connection.getAsNullableString("cluster");     // Result: "mycluster"   
```

### See also
- #### [ConfigParams](../../../commons/config/config_params)
- #### [CredentialParams](../../auth/credential_params)
- #### [ConnectionResolver](../connection_resolver)
- #### [IDiscovery](../idiscovery)
