---
type: docs
title: "CommandableGrpcService"
linkTitle: "CommandableGrpcService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-grpc-dotnet"
description: > 
    Abstract service that receives commands via the gRPC protocol.

---

**Inherits:** [GrpcClient](../clients/grpc_client)


### Description

Abstract service that receives commands via the gRPC protocol
to operations automatically generated for commands defined in [ICommandable](../../../commons/commands/icommandable).

**Important points**

- Each command is exposed as an Invoke method that receives a command name and parameters.
- Commandable services require only 3 lines of code to implement a robust external
gRPC-based remote interface.

#### Configuration parameters

- **dependencies**:    
    - **endpoint**: override for HTTP Endpoint dependency    
    - **controller**: override for Controller dependency    
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number    
    - **uri**: resource URI or connection string with all parameters in it    

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements as specified by the counter's source.
- **\*:endpoint:grpc:*:1.0** - (optional) [GrpcEndpoint](../grpc_endpoint) reference

### Constructors

Creates a new instance of the service.

> `public` CommandableGrpcService(string name = null)

- **name**: string - service name.


### Instance methods

#### InvokeAsync
Accepts a request and waits for the response.

> `protected` Task\<InvokeReply\> InvokeAsync(InvokeRequest request, ServerCallContext context)

- **request**: InvokeRequest - request
- **context**: ServerCallContext - context

#### OnRegister
Registers all service routes in a gRPC endpoint.

> `protected override` void OnRegister()


### Examples

```cs
class MyCommandableHttpService: CommandableHttpService 
{
    public MyCommandableHttpService()
    {
        base();
        this._dependencyResolver.Put(
        "controller", new Descriptor("mygroup", "controller", "*", "*", "1.0") );
    }
}
 
var service = new MyCommandableHttpService();
service.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080 
));

service.SetReferences(References.FromTuples(
    new Descriptor("mygroup","controller","default","default","1.0"), controller ));

service.Open("123");
Console.Out.WriteLine("The REST service is running on port 8080");
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)
- #### [GrpcService](../grpc_service)

 
