---
type: docs
title: "ConnectionParams"
linkTitle: "ConnectionParams"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Contains connection parameters used to connect to external services.

---

**Implements**: [ConfigParams](../../../commons/config/config_params)

### Description

The ConnectionParams class allows you to create connection parameters used to connect to external services.

 Important points
    
 - Usually, connection parameters are used together with credential parameters, but are stored
    separately from these more protected and sensitive values.

#### Configuration parameters

- **discovery_key**: key to retrieve parameters from a discovery service
- **protocol**: connection protocol like http, https, tcp, udp
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

In addition to standard parameters ConnectionParams may contain any number of custom parameters.


### Constructors

#### NewConnectionParams
Creates a new ConnectionParams object and fills it with values.

> NewConnectionParams(values map[string]string) [*ConnectionParams]()

- **map**: map[string]string - (optional) object to be converted into key-value pairs to initialize this connection.

#### NewEmptyConnectionParams
Creates a new ConnectionParams object and fills it with values.

> NewEmptyConnectionParams() [*ConnectionParams]()


#### NewManyConnectionParamsFromConfig
Retrieves a single ConnectionParams from configuration parameters
from "connection" section. If "connections" section is present instead,
then it returns only the first connection element.

> NewManyConnectionParamsFromConfig(config [*config.ConfigParams](../../../commons/config/config_params)) [][*ConnectionParams]()

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - ConnectionParams, containing a section named "connection(s)".
- **returns**: [][*ConnectionParams]() - generated ConnectionParams object.


#### NewConnectionParamsFromString
Creates a new ConnectionParams object filled with key-value pairs serialized as a string.

> NewConnectionParamsFromString(line string) [*ConnectionParams]()

- **line**: string - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**

- **returns**: [*ConnectionParams]() - new ConnectionParams object.


#### NewConnectionParamsFromTuples
Creates a new ConnectionParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> NewConnectionParamsFromTuples(tuples ...interface{}) [*ConnectionParams]()

- **tuples**: ...interface{} - the tuples to fill a new ConnectionParams object.

- **returns**: [*ConnectionParams]() - new ConnectionParams object.


#### NewManyConnectionParamsFromConfig
Retrieves all ConnectionParams from configuration parameters
from "connections" section. If "connection" section is present instead,
then it returns a list with only one ConnectionParams.

> NewManyConnectionParamsFromConfig(config [*config.ConfigParams](../../../commons/config/config_params)) [][*ConnectionParams]()

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to retrieve connections

- **returns**: [][*ConnectionParams]() - list of retrieved ConnectionParams


### Methods

#### DiscoveryKey
Gets the key to retrieve this connection from DiscoveryService.
If this key is nil, then all parameters are already present.

> (c [*ConnectionParams]()) DiscoveryKey() string

- **returns**: string - resolved options or error.


#### Host
Gets the host name or IP address.

> (c [*ConnectionParams]()) Host() string

- **returns**: string - host name or IP address.


#### Port
Gets the port number.

> (c [*ConnectionParams]()) Port() int

- **returns**: int - port number.


#### PortWithDefault
Gets the port number with default value.

> (c [*ConnectionParams]()) PortWithDefault(defaultValue int) int

- **defaultPort**: int - default port number.
- **returns**: int - port number.


#### Protocol
Gets the connection protocol.

> (c [*ConnectionParams]()) Protocol() string

- **returns**: string - connection protocol or the default value if it's not set.


#### ProtocolWithDefault
Gets the connection protocol with default value.

> (c [*ConnectionParams]()) ProtocolWithDefault(defaultValue string) string

- **defaultValue**: string - (optional) default protocol
- **returns**: string - connection protocol or the default value if it's not set.


#### Uri
Gets the resource URI or connection string. Usually it includes all connection parameters in it.

> (c [*ConnectionParams]()) Uri() string

- **returns**: string - resource URI or connection string.


#### SetDiscoveryKey
Sets the key to retrieve these parameters from DiscoveryService.

> (c [*ConnectionParams]()) SetDiscoveryKey(value string)

- **value**: string - new key to retrieve connection.


#### SetHost
Sets the host name or IP address.

> (c [*ConnectionParams]()) SetHost(value string)

- **value**: string - new host name or IP address.


#### SetPort
Sets the port number.

> (c [*ConnectionParams]()) SetPort(value int)

- **value**: int - new port number.


#### SetProtocol
Sets the connection protocol.

> (c [*ConnectionParams]()) SetProtocol(value string)

- **value**: string - new connection protocol.


#### SetUri
Sets the resource URI or connection string.

> (c [*ConnectionParams]()) SetUri(value string)

- **value**: string - new resource URI or connection string.


#### UseDiscovery
Checks if these connection parameters shall be retrieved from DiscoveryService.
The connection parameters are redirected to DiscoveryService when discovery_key parameter is set.

> (c [*ConnectionParams]()) UseDiscovery() bool

- **returns**: bool - true if the connection shall be retrieved from DiscoveryService



### Examples

```go
connection := NewConnectionParamsFromTuples(
    "protocol", "http",
    "host", "10.1.1.100",
    "port", "8080",
    "cluster", "mycluster"
);
  
host := connection.Host();                             // Result: "10.1.1.100"
port := connection.Port();                             // Result: 8080
cluster := connection.GetAsNullableString("cluster");     // Result: "mycluster"
```

### See also
- #### [ConfigParams](../../../commons/config/config_params)
- #### [CredentialParams](../../auth/credential_params)
- #### [ConnectionResolver](../connection_resolver)
- #### [IDiscovery](../idiscovery)
