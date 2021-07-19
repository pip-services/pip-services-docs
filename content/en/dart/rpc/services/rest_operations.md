---
type: docs
title: "RestOperations"
linkTitle: "RestOperations"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Handles REST services' operations.
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The RestOperations class allows you to handle REST services' operations.

### Fields

<span class="hide-title-link">

#### logger
Composite logger component
> **logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### counters
Counter component
> **counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### dependencyResolver
Dependency resolver component
> **dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver) = DependencyResolver()

</span>


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getCorrelationId
Returns a correlationId from a request

> dynamic getCorrelationId(angel.RequestContext req)

- **req**: angel.RequestContext - an HTTP request
- **returns**: dynamic - correlationId from a request


#### getFilterParams
Gets the filter parameters.

>  [FilterParams](../../../commons/data/filter_params) getFilterParams(angel.RequestContext req)

- **req**: angel.RequestContext - an HTTP request
- **returns**: [FilterParams](../../../commons/data/filter_params) - filter paramters

#### getPagingParams
Gets the paging parameters.

> [PagingParams](../../../commons/data/paging_params) getPagingParams(angel.RequestContext req)

- **req**: angel.RequestContext - an HTTP request
- **returns**: [PagingParams](../../../commons/data/paging_params) - paging paramters


#### invoke
Invokes an operation.

> Function(angel.RequestContext req, angel.ResponseContext res) invoke(String operation)

- **operation**: String - operation to be invoked
- **returns**: Function(angel.RequestContext req, angel.ResponseContext res) - operation


#### sendBadRequest
Sends a bad request error message.

> sendBadRequest(req: any, res: any, message: String): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **message**: String - message


#### sendConflict
Sends a conflict error messge

> void sendBadRequest(angel.RequestContext req, angel.ResponseContext res, String message)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext res - an HTTP response context
- **message**: String - message


#### sendCreatedResult
Sends a JSON object with the created result.

> void sendCreatedResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - error to be sent.
- **result**: dynamic - result to be sent.


#### sendDeletedResult
Sends the deleted result in JSON format.

> void sendDeletedResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - error to be sent.
- **result**: dynamic - result to be sent.


#### sendEmptyResult
Send an empty result with 204 status code.

> void sendEmptyResult(angel.RequestContext req, angel.ResponseContext res, err)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - error to be sent.

#### sendError
Sends an error serialized as ErrorDescription object and appropriate HTTP status code.

> void sendError(angel.RequestContext req, angel.ResponseContext res, error)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - error to be sent.


#### sendInternalError
Sends an internal error message

> void sendInternalError(angel.RequestContext req, angel.ResponseContext res, String message)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **message**: String - message


#### sendNotFound
Sends a not found error message.

> void sendNotFound(angel.RequestContext req, angel.ResponseContext res, String message)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **message**: String - message


#### sendResult
Sends a result as a JSON object.

> void sendResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - error to be sent.
- **result**: dynamic - result to be sent.


#### sendServerUnavailable
Sends a server unavailable error message (Status code 503).

> void sendServerUnavailable(angel.RequestContext req, angel.ResponseContext res, String message)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **message**: String - message


#### sendSessionExpired
Sends a session expired error message (Status code 440).

> void sendSessionExpired(angel.RequestContext req, angel.ResponseContext res, String message)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **message**: String - message


#### sendUnauthorized
Sends an unauthorized error message.

> void sendUnauthorized(angel.RequestContext req, angel.ResponseContext res, String message)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **message**: String - message


#### setReferences
Sets the specified references.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - specified references
