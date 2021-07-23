---
type: docs
title: "ConnectionParams"
linkTitle: "ConnectionParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Contains connection parameters used to connect to external services.

---

**Inherits**: [ConfigParams](../../../commons/config/config_params)

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

> `public` ConnectionParams(IDictionary\<string, string\> map)

- **map**: IDictionary\<string, string\> - (optional) an object to be converted into key-value pairs to initialize this connection.


Creates a new connection parameters and fills it with values.

> `public` ConnectionParams(IDictionary\<string, string\> map)


### Properties

#### UseDiscovery
Checks if these connection parameters shall be retrieved from DiscoveryService.The connection parameters are redirected to DiscoveryService when discovery_key parameter is set.

> `public` bool UseDiscovery { get; }

#### DiscoveryKey
Gets or sets the key to retrieve this connection from DiscoveryService.

> `public` string 	DiscoveryKey { get; set; }

#### Protocol
Gets or sets the connection protocol

> `public` string Protocol { get; set; }

#### Host
Gets or sets the service host name or IP address.

> `public` string Host { get; set; }

#### Port
Gets or sets the service port number

> `public` int Port { get; set; }

#### Uri
Gets the resource URI or connection string. Usually it includes all connection parameters in it.

> `public` string Uri { get; set; }



### Instance methods


#### GetPort
Gets the port number.

> `public` int GetPort()

- **returns**: int - the port number.


#### GetPortWithDefault
Gets the port number with default value.

> `public` int GetPortWithDefault(int defaultPort)

- **defaultPort**: int - a default port number.
- **returns**: int - the port number.


#### GetProtocol
Gets the connection protocol.

> `public` string GetProtocol()

- **returns**: string - the connection protocol or the default value if it's not set.


#### GetProtocolWithDefault
Gets the connection protocol with default value.

> `public` string GetProtocolWithDefault(string defaultValue)

- **defaultValue**: string - (optional) the default protocol
- **returns**: string - the connection protocol or the default value if it's not set.


### Static methods

#### FromConfig
Retrieves a single ConnectionParams from configuration parameters
from "connection" section. If "connections" section is present instead,
then it returns only the first connection element.

> `public static` [ConnectionParams]() FromConfig([ConfigParams](../../../commons/config/config_params) config, bool configAsDefault = True)

- **config**: [ConfigParams](../../../commons/config/config_params) - ConnectionParams, containing a section named "connection(s)".
- **configAsDefault**: bool - boolean parameter for default configuration. If "true" the default value will be added to the result.

- **returns**: [ConnectionParams]() - the generated ConnectionParams object.


#### FromString
Creates a new ConnectionParams object filled with key-value pairs serialized as a string.

> `public new static` [ConnectionParams]() FromString(string line)

- **line**: string - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**

- **returns**: [ConnectionParams]() - a new ConnectionParams object.


#### FromTuples

Creates a new ConnectionParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `public static` [ConnectionParams]() FromTuples(params object[] tuples)

- **tuples**: object[] - the tuples to fill a new ConnectionParams object.

- **returns**: [ConnectionParams]() - a new ConnectionParams object.


#### ManyFromConfig

Retrieves all ConnectionParams from configuration parameters
from "connections" section. If "connection" section is present instead,
then it returns a list with only one ConnectionParams.

> `public static` List<[ConnectionParams]()> ManyFromConfig([ConfigParams](../../../commons/config/config_params) config, bool configAsDefault = true)

- **config**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters to retrieve connections

- **returns**: List<[ConnectionParams]()> - a list of retrieved ConnectionParams

### Examples

```cs
//Example ConnectionParams object usage:
var connection = ConnectionParams.FromTuples(
"protocol", "http",
"host", "10.1.1.100",
"port", "8080",
"cluster", "mycluster"
);
var host = connection.Host;                             // Result: "10.1.1.100"
var port = connection.Port;                             // Result: 8080
var cluster = connection.GetAsNullableString("cluster");     // Result: "mycluster" 
```

### See also
- #### [ConfigParams](../../../commons/config/config_params)
- #### [CredentialParams](../../auth/credential_params)
- #### [ConnectionResolver](../connection_resolver)
- #### [IDiscovery](../idiscovery)
