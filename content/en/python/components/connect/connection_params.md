---
type: docs
title: "ConnectionParams"
linkTitle: "ConnectionParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
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

- **discovery_key**: key to retrieve parameters from discovery service
- **protocol**: connection protocol like http, https, tcp, udp
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

In addition to standard parameters ConnectionParams may contain any number of custom parameters.


### Constructors
Creates a new connection parameters and fills it with values.

> ConnectionParams(map: Any = None)

- **map**: Any - (optional) an object to be converted into key-value pairs to initialize this connection.

### Instance methods

#### get_discovery_key
Gets the key to retrieve this connection from DiscoveryService.
If this key is None, then all parameters are already present.

>  get_discovery_key(): str

- **returns**: str - resolved options or error.


#### get_host
Gets the host name or IP address.

>  get_host(): str

- **returns**: str - the host name or IP address.


#### get_port
Gets the port number.

>  get_port(): int

- **returns**: int - the port number.


#### get_port_with_default
Gets the port number with default value.

>  get_port_with_default(default_port: int): int

- **default_port**: int - a default port number.
- **returns**: int - the port number.


#### get_protocol
Gets the connection protocol.

>  get_protocol(): str

- **returns**: str - the connection protocol or the default value if it's not set.


#### get_protocol_with_default
Gets the connection protocol with default value.

>  get_protocol_with_default(default_value: str = None): str

- **default_value**: str - (optional) the default protocol
- **returns**: str - the connection protocol or the default value if it's not set.


#### get_uri
Gets the resource URI or connection string. Usually it includes all connection parameters in it.

>  get_uri(): str

- **returns**: str - the resource URI or connection string.


#### set_discovery_key
Sets the key to retrieve these parameters from DiscoveryService.

>  set_discovery_key(value: str)

- **value**: str - a new key to retrieve connection.


#### set_host
Sets the host name or IP address.

>  set_host(value: str)

- **value**: str - a new host name or IP address.


#### set_port
Sets the port number.

>  set_port(value: int)

- **value**: int - a new port number.


#### set_protocol
Sets the connection protocol.

>  set_protocol(value: str)

- **value**: str - a new connection protocol.


#### set_uri
Sets the resource URI or connection string.

>  set_uri(value: str)

- **value**: str - a new resource URI or connection string.


#### use_discovery
Checks if these connection parameters shall be retrieved from DiscoveryService.
The connection parameters are redirected to DiscoveryService when discovery_key parameter is set.

>  use_discovery(): bool

- **returns**: bool - true if connection shall be retrieved from DiscoveryService

### Static methods

#### from_config
Retrieves a single ConnectionParams from configuration parameters
from "connection" section. If "connections" section is present instead,
then it returns only the first connection element.

> `static` from_config(config: [ConfigParams](../../../commons/config/config_params)): [ConnectionParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) - ConnectionParams, containing a section named "connection(s)".
- **returns**: [ConnectionParams]() - the generated ConnectionParams object.


#### from_string
Creates a new ConnectionParams object filled with key-value pairs serialized as a string.

> `static` from_string(line: str): [ConnectionParams]()

- **line**: string - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**

- **returns**: [ConnectionParams]() - a new ConnectionParams object.


#### from_tuples
Creates a new ConnectionParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `static` from_tuples(*tuples: Any): [ConnectionParams]()

- **tuples**: Any - the tuples to fill a new ConnectionParams object.

- **returns**: [ConnectionParams]() - a new ConnectionParams object.


#### many_from_config
Retrieves all ConnectionParams from configuration parameters
from "connections" section. If "connection" section is present instead,
then it returns a list with only one ConnectionParams.

> `static` many_from_config(config: [ConfigParams](../../../commons/config/config_params)): List[[ConnectionParams]()]

- **config**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters to retrieve connections

- **returns**: List[[ConnectionParams]()] - a list of retrieved ConnectionParams

### Examples

```python
connection = ConnectionParams.from_tuples("protocol", "http",
    "host", "10.1.1.100",
    "port", "8080",
    "cluster", "mycluster")

host = connection.get_host()                              # Result: "10.1.1.100"
port = connection.get_port()                              # Result: 8080
cluster = connection.get_as_nullable_string("cluster")    # Result: "mycluster"
```

### See also
- #### [ConfigParams](../../../commons/config/config_params)
- #### [CredentialParams](../../auth/credential_params)
- #### [ConnectionResolver](../connection_resolver)
- #### [IDiscovery](../idiscovery)
