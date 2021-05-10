---
type: docs
title: "CommandableHttpService"
linkTitle: "CommandableHttpService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Abstract service that receives remove calls via HTTP/REST protocol to operations automatically generated for commands defined in ICommandable components. Each command is exposed as POST operation that receives all parameters in body object. Commandable services require only 3 lines of code to implement a robust external HTTP-based remote interface.
---

**Implements:** [RestService](../rest_service)

See also [RestService](../rest_service), [CommandableHttpClient](../../clients/commandable_http_client)


##### Configuration parameters

- **base_route**:              base route for remote URI
- **dependencies**:
    - **endpoint**:              override for HTTP Endpoint dependency
    - **controller**:            override for Controller dependency
- **connection(s)**:           
    - **discovery_key**:         (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**:              connection protocol: http or https
    - **host**:                  host name or IP address
    - **port**:                  port number
    - **uri**:                   resource URI or connection string with all parameters in it


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection



**Example:**

```python
class MyCommandableHttpService(CommandableHttpService):
    def __init__(self):
        super(MyCommandableHttpService, self).__init__()
        self._dependencyResolver.put("controller", Descriptor("mygroup","controller","*","*","1.0"))

    # ...

service = MyCommandableHttpService()
service.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                          "connection.host", "localhost",
                                          "connection.port", 8080))
service.set_references(References.from_tuples(Descriptor("mygroup","controller","default","default","1.0"), controller))
service.open("123")
# ...
```

### Constructors
Creates a new instance of the service.

>  CommandableHttpService(base_route: str)

- **base_route**: str - a service base route.


### Fields

<span class="hide-title-link">

#### _connection_resolver
Create connection resolver.
> **_connection_resolver**: [ConnectionResolver](../../../components/connect/connection_resolver) = ConnectionResolver()

#### _command_set
TODO add description
> **_command_set**: [CommandSet](../../../commons/commands/command_set)

#### _swagger_auto
TODO add description
> **_swagger_auto**: bool = True

#### _base_route
TODO add description
> **_base_route**: str

</span>


### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### register
Registers all service routes in HTTP endpoint.

> register()




### See also
- #### [RestService](../rest_service)
- #### [CommandableHttpClient](../../clients/commandable_http_client)
