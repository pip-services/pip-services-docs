---
type: docs
title: "GrpcEndpoint"
linkTitle: "GrpcEndpoint"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-grpc-java"
description: > 
    Used for creating GRPC endpoints. 

---

**Implements:** [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)


### Description
The GrpcEndpoint class allows you to create GRPC endpoints. An endpoint is a URL, at which a given service can be accessed by a client.

#### Configuration parameters
Parameters to pass to the :func:`configure` method for component configuration:

**connection(s)**: the connection resolver's connections:
- **"connection.discovery_key"**: key used for connection resolving in a discovery service;
- **"connection.protocol"**: connection's protocol;
- **"connection.host"**: target host;
- **"connection.port"**: target port;
- **"connection.uri"**: target URI.
**credential**: HTTPS credentials:
- **"credential.ssl_key_file"**: SSL private key in PEM
- **"credential.ssl_crt_file"**: SSL certificate in PEM
- **"credential.ssl_ca_file"**: certificate authorities (root cerfiticates) in PEM

#### References
A logger, counters, and a connection resolver can be referenced by passing the
following references to the object's [set_references](#setreferences)

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurementsand as specified by the counter's source.


### Instance methods


#### close
Closes this endpoint and the GRPC server (service) that was opened earlier.

> `public` void close([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain
.

#### configure
Configures this HttpEndpoint using the given configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - whether or not this endpoint is open with an actively listening GRPC server.


#### open
Opens a connection using the parameters resolved by the referenced connection resolver and creates a GRPC server (service) using the set options and parameters.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### register
Registers a registerable object for dynamic endpoint discovery.

> `public` void register([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - registration to be added.

#### registerService
Registers a service with related implementation

> `public` void registerService(ServerServiceDefinition service)

- **service**: ServerServiceDefinition - a GRPC service object.


#### registerService
Registers a service with related implementation

> `public` void registerService(ServerServiceDefinition service)

- **service**: ServerServiceDefinition - a GRPC service object.

#### setReferences
Sets references to this endpoint's logger, counters, and connection resolver.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - an IReferences object, containing references to a logger, counters, and a connection resolver.

#### unregister
Unregisters a registerable object, so that it is no longer used in dynamic 

> `public` void unregister([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - the registration to remove.


### Examples

```java
{@code
  public MyMethod(ConfigParams config, IReferences references) {
      let endpoint = new HttpEndpoint();
      if (this._config)
          endpoint.configure(this._config);
      if (this._references)
          endpoint.setReferences(this._references);
      ...
      this._endpoint.open(context);
  }
  }
```


