---
type: docs
no_list: true
title: "Connectivity"
linkTitle: "Connectivity"
weight: 30
     
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Microservices systems are distributed by design, and connecting services to each other and the infrastructure is an important task. Pip.Services provides a few abstractions and patterns to make this easier.

### Connection parameters

ConnectionParams is an object in the Pip.Services toolkit that holds connection information. It is based on ConfigParams and offers a few convenient methods to get and set the most common connection parameters like protocol, host or port number. It is defined in the connect package in the components module.

The same package contains an IDiscovery interface that shall be implemented by components that connect to discovery services. Through this interface, developers can retrieve a ConnectionParams object to connect to a particular service or a list of ConnectionParams to connect to cluster nodes. Also, this interface allows registering connection endpoints for starting services, so they can be stored in the discovery service and then retrieved by consumers.

MemoryDiscovery is the simplest implementation of a discovery component. It allows storing connection information in a single place in the config file. 
Typically, connection parameters are set in the connection (or connections for clusters) section in configuration parameters and passed to components via the configure method. Components can read that information by themselves. 

```yml
# MongoDb persistence component
descriptor: "myservice:mypersistance:mongodb:default:1.0"
connection:
  host: mongo
  port: 27017
```

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Hardcoding connection parameters in the component configurations works well for static connections. However, when the connection information is dynamic and has to be retrieved from a discovery service, a discovery_key parameter shall be used to specify the key that shall be employed to get the desired connection parameters. Pip.Services has the ConnectionResolver helper class to make this scenario easier.

The example below is similar to the previous one but shows how to get mongo connection parameters from the in-memory discovery service using the ConnectionResolver helper.

```yml
# In-memory discovery service
descriptor: "pip-services:discovery:memory:default:1.0"
mongo:
  host: mongo
  port: 27017

# MongoDb persistence component
descriptor: "myservice:mypersistance:mongodb:default:1.0"
connection:
  discovery_key: mongo
```

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Credential parameters

It is a good practice to store sensitive data, like usernames, passwords and API keys in a protected vault where they cannot be easily found by hackers. To support this scenario, the Pip.Services toolkit offers a set of abstractions that work similarly to connections. These are the CredentialParams class and the IcredentialStore interface.

CredentialParams is an object in the Pip.Services toolkit that holds the credentials required to connect to external services. Just like ConnectionParams, it is based on ConfigParams and offers a few convenient methods to get and set common credentials like username, password, access id, access key, and so on. It is defined in the auth package in the components module.

The IcredentialStore interface in the auth package is used to connect to vaults. Through this interface, developers can retrieve CredentialParams with the required credentials.

The MemoryCredentialStore class is the simplest implementation of a credential store component. It allows storing credential information in a single place in the config file and then sharing it across other components. 

Similar to connection parameters, credentials are set in the credential section of the configuration parameters and passed to components via the configure method. Components can read that information by themselves. 

```yml
# MongoDb persistence component
descriptor: "myservice:mypersistance:mongodb:default:1.0"
credential:
  username: admin
  password: pass123
```

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

When credentials have to be retrieved from an external credential store, a store_key parameter shall be applied to specify the key that shall be used to get the desired credential parameters. Pip.Services has the CredentialResolver helper class to make this scenario easier.

The example below demonstrates how to get mongo credentials from an in-memory credential store using the CredentialResolver helper.

```yml
# In-memory credential store
descriptor: "pip-services:credential-store:memory:default:1.0"
mongo:
  username: admin
  password: pass123

# MongoDb persistence component
descriptor: "myservice:mypersistance:mongodb:default:1.0"
connection:
  ...
credential:
  discovery_key: mongo
```

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Specialized connection resolvers
Similar to standard ConnectionResolver and CredentialResolver, different modules contain specialized resolvers that can provide both connection and credential information, check for completeness and generate technology-specific connection URLs. Some examples are:

- HttpConnectionResolver defined in RPC module
- AwsConnectionResolver defined in AWS module
- AzureFunctionConnectionResolver defined in the Azure module
- MongoDbConnectionResolver defined in Mongo module
- PostgresConnectionResolver defined in Postgres module
- KafkaConnectionResolver defined in Kafka module
- MqttConnectionResolver defined MQTT module

### References

For more information about connectivity see:
- #### [Connection utils](../../../tutorials/beginner_tutorials/communications/connection_utils/)
- #### [Configuring connections](../../../tutorials/beginner_tutorials/configuration/configuring_connections/)
