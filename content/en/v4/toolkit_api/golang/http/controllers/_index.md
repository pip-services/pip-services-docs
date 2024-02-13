---
type: docs
title: "Controllers"
linkTitle: "Controllers"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-http-node"
description: >
    This package contains a set of interfaces and classes used to create services and handle their operations.
---
---

<div class="module-body"> 


### Interfaces

#### [IRegisterable](iregisterable)
Interface to perform on-demand registrations.


#### [ISwaggerController](iswagger_controller)
Interface to perform Swagger registrations.

<br>

### Classes

#### [AboutOperations](about_operations)
Obtains information about running services


#### [CommandableHttpController](commandable_http_controller)
Abstract service that receives remote calls via HTTP protocol
to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable).
Each command is exposed as a POST operation that receives all parameters in body object.

Commandable services require only three lines of code to implement a robust external
HTTP-based remote interface.


#### [CommandableSwaggerDocument](commandable_swagger_document)
Generates Swagger code that describes created REST API methods and their parameters.


#### [HeartbeatOperations](heartbeat_operations)
Handles the operations of a heartbeat service.


#### [HeartbeatRestController](heartbeat_rest_controller)
Service returns heartbeat via HTTP/REST protocol.

The service responds on /heartbeat route (can be changed)
with a string with the current time in UTC.

This service route can be used to perform health checks by loadbalancers and
container orchestrators.


#### [HttpEndpoint](http_endpoint)
Used for creating HTTP endpoints. An endpoint is a URL, at which a given service can be accessed by a client. 


#### [HttpRequestDetector](http_request_detector)
Helper class that retrieves parameters from HTTP requests.


#### [HttpResponseSender](http_response_sender)
Helper class that handles HTTP-based responses.

#### [RestOperations](rest_operations)
Handles REST services operations.


#### [RestController](rest_controller)
Abstract service that receives remove calls via HTTP/REST protocol.


#### [StatusOperations](status_operations)
Handles status requests for REST operations.

#### [StatusRestController](status_rest_controller)
Service that returns microservice status information via HTTP/REST protocol.


</div>

