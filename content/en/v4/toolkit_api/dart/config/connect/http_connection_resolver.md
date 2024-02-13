---
type: docs
title: "HttpConnectionResolver"
linkTitle: "HttpConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-config-dart"
description: >
    Helper class used to retrieve connections for HTTP-based services and clients.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The HttpConnectionResolver class is used to retrieve connections for HTTP-based services and clients.

**Important points**

- In addition to its regular functions, ConnectionResolver is able to parse http:// URIs and validate connection parameters before returning them.

#### Configuration parameters

- **connection**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **...** : other connection parameters
- **connections**: alternative to connection
    - **[connection params 1]**: first connection parameters
    -  **...**
    - **[connection params N]**: Nth connection parameters
    -  **...**


#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve a connection



### Fields

<span class="hide-title-link">

#### connectionResolver
Creates a connection resolver.
> `final` **connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) = ConnectionResolver()

#### credentialResolver
The base credential resolver.
> `final` **credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver) = CredentialResolver()

</span>


### Instance methods

#### configure
Configures component by passing configuration parameters.

`@override`
void configure([ConfigParams](../../../components/config/config_params) config)
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### register
Registers the given connection in all referenced discovery services. This method can be used for dynamic service discovery.

> Future register(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### resolve
Resolves a single component connection. If the connections are configured to be retrieved from Discovery service,
it finds a IDiscovery and resolves the connection there.

> Future<[ConnectionParams?](../../../config/connect/connection_params)> resolve(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Future<[ConnectionParams?](../../../config/connect/connection_params)>  - resolved connection.


#### resolveAll
Resolves all component connections. If the connections are configured to be retrieved from Discovery service, it finds a IDiscovery and resolves the connection there.

> Future\<List\<[ConnectionParams](../../../config/connect/connection_params)\>\> resolveAll(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Future\<List\<[ConnectionParams](../../../config/connect/connection_params)\>\> - resolved connections.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

### Examples

```dart
var config = ConfigParams.fromTuples([
     'connection.host', '10.1.1.100',
     'connection.port', 8080
]);

var connectionResolver = HttpConnectionResolver();
connectionResolver.configure(config);
connectionResolver.setReferences(references);
var connection = connectionResolver.resolve('123',
      // Now use connection...
```


### See also
- #### [ConnectionParams](../../../config/connect/connection_params)
- #### [ConnectionResolver](../../../config/connect/connection_resolver)
