---
type: docs
title: "CommandableHttpClient"
linkTitle: "CommandableHttpClient"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Commandable services are generated automatically for [ICommandable](../../,,/rpc/commands/icommandable)
   
---

**Extends:** [RestClient](../../clients/rest_client)

### Description

The CommandableHttpClient class allows you to create commandable services. Commandable services are generated automatically for [ICommandable](../../../rpc/commands/icommandable) objects.

Important points

- Each command is exposed as a POST operation that receives all parameters in the body object.

#### Configuration parameters

- **base_route**: base route for a remote URI
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **retries**: number of retries (default: 3)
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../observability/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve a connection




### Constructors
Creates a new instance of the client.

> `public` constructor(baseRoute: string) 

- **baseRoute**: string - base route for a remote service.


### Instance methods

#### callCommand
Calls a remote method via the HTTP commadable protocol. The call is made via a POST operation and all parameters are sent in the body object. The complete route to the remote method is defined as baseRoute + "/" + name.

> (c *CommandableHttpClient) CallCommand(ctx context.Context, name string, params *cdata.AnyValueMap) (*http.Response, error)

- **name**: string - name of the command to call.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **params**: any - command parameters.
- **returns**: (c *CommandableHttpClient) - result of the command.


### Examples

```go
		type MyCommandableHttpClient struct{
			*CommandableHttpClient
			...
		}
		func (c * MyCommandableHttpClient) GetData(ctx context.Context, id string)(result MyData, err error){
			params:= cdata.NewEmptyStringValueMap()
			params.Set("id",id)
			res, err := c.CallCommand(
				prototype
				"get_data",
				params,
			)
			...
			// convert response to MyData
			...
			return result, err
		}


		client = NewMyCommandableHttpClient();
		client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
			"connection.protocol", "http",
			"connection.host", "localhost",
			"connection.port", 8080
		));

		result, err := client.GetData(context.Background(), "123", "1")
...
```

