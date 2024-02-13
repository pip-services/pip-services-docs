---
type: docs
title: "GrpcController"
linkTitle: "GrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-grpc-go"
description: > 
    Abstract controller that receives remote calls via the GRPC protocol.

---

### Description

The GrpcController class allows you to create controllers that receive remote calls via the GRPC protocol.

#### Configuration parameters
- **dependencies**:   
    - **endpoint**: override for GRPC Endpoint dependency    
    - **controller**: override for Controller dependency    
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it    
- **credentials**:   
    - **ssl_key_file**: SSL private key in PEM    
    - **ssl_crt_file**: SSL certificate in PEM    
    - **ssl_ca_file**: certificate authorities (root cerfiticates) in PEM    
 
#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurementsand as specified by the counter's source.
 


### Constructors

InheritGrpcController methods are creates new instance NewGrpcController

> InheritGrpcController(overrides IGrpcControllerOverrides, controllerName string) [*GrpcController]()

- **overrides**: IGrpcControllerOverrides - a reference to child class that overrides virtual methods
- **controllerName**: string - controller name from XYZ.pb.go, set "" for use default gRPC commandable protobuf


### Fields

<span class="hide-title-link">

#### Endpoint
The GRPC endpoint that exposes this controller.
> **Endpoint**: [*GrpcEndpoint](../grpc_endpoint)

#### DependencyResolver
The dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Counters
The Counters counters.
> **Counters**: [*CompositeCounters](../../../observability/count/composite_counters)

#### Tracer
The tracer.
> **Tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)

</span>



### Methods


#### Close
Closes the component and frees used resources.

> (c [*GrpcController]()) Close(context [IContext](../../../components/context/icontext)) (err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil no errors occured.


#### Configure
Configures component by passing configuration parameters.

> (c [*GrpcController]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> (c [*GrpcController]()) IsOpen() bool

- **returns**: bool -True if the endpoint is open with an actively listening GRPC server.


#### Instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> (c [*GrpcController]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*rpcserv.InstrumentTiming](../../../rpc/trace/instrument_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*rpcserv.InstrumentTiming](../../../rpc/trace/instrument_timing) -Timing object to end the time measurement.


#### Open
Opens the component.

> (c [*GrpcController]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil no errors occured.

#### Register
Register method are registers all controller routes in HTTP endpoint.

> (c [*GrpcController]()) Register()


#### RegisterUnaryInterceptor
Registers a middleware for methods in GRPC endpoint.

> (c [*GrpcController]()) RegisterUnaryInterceptor(action func(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (any, error) )

- **action**: func(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (any, error) - an action function that is called when middleware is invoked.


#### RegisterCommandableMethod

RegisterCommandableMethod method registers a commandable method in c objects GRPC controller by the given name.

> (c [*GrpcController]()) RegisterCommandableMethod(method string, schema [*cvalid.Schema](../../../data/validate/schema), action func(ctx context.Context, context [IContext](../../../components/context/icontext), data [*crun.Parameters](../../../components/exec/parameters)) (result any, err error))

- **method**: string - the GRPC method name.
- **schema**: [*cvalid.Schema](../../../data/validate/schema) - validation schema to validate received parameters.
- **action**: func(ctx context.Context, context [IContext](../../../components/context/icontext), data [*crun.Parameters](../../../components/exec/parameters)) (result any, err error) - action function that is called when operation is invoked.


#### SetReferences
Sets references to dependent components.

> (c [*GrpcController]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*GrpcController]()) UnsetReferences()


### Examples

```go
type MyGrpcController struct {
   *GrpcController
   controller IMyController
}
...

func NewMyGrpcController() *MyGrpcController {
	c := NewMyGrpcController{}
	c.GrpcController = grpccontrollers.NewGrpcController("Mydata.Mydatas")
	c.GrpcController.IRegisterable = &c
	c.numberOfCalls = 0
	c.DependencyResolver.Put(context.Context(), "controller", cref.NewDescriptor("mygroup", "controller", "*", "*", "*"))
	return &c
}

func (c*MyGrpcController) SetReferences(ctx context.Context, references: IReferences) {
	c.GrpcController.SetReferences(references);
	resolv, err := c.DependencyResolver.GetOneRequired("controller")
	if err == nil && resolv != nil {
	    c.controller = resolv.(grpctest.IMyController)
	    return
	}
	panic("Can't resolve 'controller' reference")
}

func (c*MyGrpcController) Register() {
	protos.RegisterMyDataServer(c.Endpoint.GetServer(), c)
	...
}

controller := NewMyGrpcController();
controller.Configure(ctx, cconf.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
))
controller.SetReferences(ctx, cref.NewReferencesFromTuples(
   cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller
))

err := controller.Open(ctx, "123")
if  err == nil {
   fmt.Println("The GRPC controller is running on port 8080");
}
```



