---
type: docs
title: "CommandableGrpcClient"
linkTitle: "CommandableGrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-grpc-java"
description: > 
    Abstract client that calls a commandable GRPC service.

---

**Extends:** [GrpcClient](../grpc_client)

### Description

The CommandableGrpcClient class allows you to create clients that call a commandable GRPC service.

Important points

- Commandable services are generated automatically for [ICommandable](../../../rpc/commands/icommandable). Each command is exposed as an Invoke method that receives all parameters as args.

#### Configuration parameters

- **connection(s)**:   
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)   
    - **protocol**: connection protocol: http or https   
    - **host**: host name or IP address   
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it   
- **options**:   
    - **retries**: number of retries (default: 3)   
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)   
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)   

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements and specify the counter's source.

### Constructors

Creates a new instance of the client.

> `public` CommandableGrpcClient(String name)

- **name**: String - service name.


### Fields

<span class="hide-title-link">

#### name
A service name.
> `protected` String **_name**

</span>


### Instance methods

#### callCommand
Calls a remote method via the GRPC commadable protocol.
The call is made via Invoke method and all parameters are sent in args object.
The complete route to remote method is defined as serviceName + '.' + name.

> `protected` <T> T callCommand(Class<T> returnType, String name, [IContext](../../../components/context/icontext) context, Object params)

- **returnType**: Class<T> - return type.
- **name**: String - name of the command to call.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Object - command parameters.
- **returns**: <T> T - feature that receives the result



### Examples

```java
{@code
  class MyCommandableGrpcClient extends CommandableGrpcClient implements IMyClient {
 
      public MyCommandableGrpcClient() {
          super("mydata");
      }
 
      // ...
 
      @Override
      public MyData getData(IContext context, String id) {
          return this.callCommand(MyData.class,
                  "get_data",
                  context,
                  Map.of("id", id)
          );
      }
 
      public static void main(String[] args) throws ConfigException {
          var client = new MyCommandableGrpcClient();
          client.configure(ConfigParams.fromTuples(
                  "connection.protocol", "http",
                  "connection.host", "localhost",
                  "connection.port", 8080
          ));
 
          var result = client.getData("123", "1");
      }
  }
  }
```
