---
type: docs
title: "Services"
linkTitle: "Services"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    This package contains a set of interfaces and classes used to create services and handle their operations.
---
---

<div class="module-body"> 


### Interfaces

#### [IRegisterable](iregisterable)
Interface to perform on-demand registrations.


#### [ISwaggerService](iswagger_service)
Interface to perform Swagger registrations.


### Classes

#### [AboutOperations](about_operations)
TODO add description


#### [CommandableHttpService](commandable_http_service)
Abstract service that receives remove calls via HTTP protocol
to operations automatically generated for commands defined in [ICommandable](../../../commons/command/icommandable).
Each command is exposed as POST operation that receives all parameters in body object.

Commandable services require only 3 lines of code to implement a robust external
HTTP-based remote interface.


#### [CommandableSwaggerDocument](commandable_swagger_document)
TODO add description


#### [HeartbeatOperations](heartbeat_operations)
TODO add description


#### [HeartbeatRestService](heartbeat_rest_service)
Service returns heartbeat via HTTP/REST protocol.

The service responds on /heartbeat route (can be changed)
with a string with the current time in UTC.

This service route can be used to health checks by loadbalancers and
container orchestrators.


#### [HttpEndpoint](http_endpoint)
Used for creating HTTP endpoints. An endpoint is a URL, at which a given service can be accessed by a client. 


#### [HttpRequestDetector](http_request_detector)
Helper class that retrieves parameters from HTTP requests.


#### [HttpResponseSender](http_response_sender)
Helper class that handles HTTP-based responses.


#### [InstrumentTiming](instrument_timing)
TODO add description


#### [RestOperations](rest_operations)
TODO add description


#### [RestService](rest_service)
Abstract service that receives remove calls via HTTP/REST protocol.


#### [StatusOperations](status_operations)
TODO add description

#### [StatusRestService](status_rest_service)
Service that returns microservice status information via HTTP/REST protocol.


</div>
