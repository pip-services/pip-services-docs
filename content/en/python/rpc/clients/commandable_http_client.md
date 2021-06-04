---
type: docs
title: "CommandableHttpClient"
linkTitle: "CommandableHttpClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable)
   
---

**Implements:** [RestClient](../../clients/rest_client)

### Description

The CommandableHttpClient class allows you to create commandable services. Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable) objects.

Important points

- Each command is exposed as POST operation that receives all parameters in the body object.

##### Configuration parameters

- **base_route**: base route for a remote URI
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **retries**: number of retries (default: 3)
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection




### Constructors
Creates a new instance of the client.

> CommandableHttpClient(base_route: str)

- **base_route**: str - base route for remote service.



### Instance methods

#### call_command
Calls a remote method via the HTTP commadable protocol. The call is made via POST operation and all parameters are sent in body object. The complete route to the remote method is defined as baseRoute + "/" + name.

> call_command(name: str, correlation_id: Optional[str], params: Any): Any

- **name**: str - name of the command to call.
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **params**: Any - command parameters.
- **returns**: Any - result of the command.


### Examples

```python
class MyCommandableHttpClient(CommandableHttpClient, IMyClient):
    # ...

    def get_data(self, correlation_id, id):
        return self.call_command("get_data", correlation_id, MyData(id))

        # ...

    client = MyCommandableHttpClient()
    client.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                 "connection.host", "localhost",
                                                 "connection.port", 8080))
    data = client.getData("123", "1")
     # ...
```
