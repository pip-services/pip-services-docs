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


### Constructors
Create instance of rest operations

> RestOperations()

Creates rest operations with name

> RestOperations.withName(String name)

- **name**: String - component name

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
void configure([ConfigParams](../../../commons/config/config_params) config)
- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getCorrelationId
Returns a correlationId from a request

> String? getCorrelationId(shelf.Request req)

- **req**: shelf.Request - an HTTP request
- **returns**: String? - correlationId from a request


#### getFilterParams
Gets the filter parameters.

>  [FilterParams](../../../commons/data/filter_params) getFilterParams(shelf.Request req)

- **req**: shelf.Request - an HTTP request
- **returns**: [FilterParams](../../../commons/data/filter_params) - filter paramters

#### getPagingParams
Gets the paging parameters.

> [PagingParams](../../../commons/data/paging_params) getPagingParams(shelf.Request req)

- **req**: shelf.Request - an HTTP request
- **returns**: [PagingParams](../../../commons/data/paging_params) - paging paramters


#### invoke
Invokes an operation.

> Function(shelf.Request req) invoke(String operation)

- **operation**: String - operation to be invoked
- **returns**: Function(shelf.Request req) - operation

#### instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

>  [CounterTiming](../../../components/count/counter_timing) instrument(String correlationId, String name)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **name**: String - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - object to end the time measurement.

#### sendBadRequest
Sends a bad request error message.

> FutureOr\<shelf.Response\> sendBadRequest(shelf.Request req, String message)

- **req**: any - HTTP request
- **message**: String - message
- **returns**: FutureOr\<shelf.Response\> - HTTP response


#### sendConflict
Sends a conflict error messge

> FutureOr\<shelf.Response\> sendBadRequest(shelf.Request req, String message)

- **req**: shelf.Request - HTTP request context
- **message**: String - message
- **returns**: FutureOr\<shelf.Response\> - HTTP response


#### sendCreatedResult
Sends a JSON object with the created result.

> FutureOr\<shelf.Response\> sendCreatedResult(shelf.Request req, err, result)

- **req**: shelf.Request - HTTP request context
- **err**: dynamic - error to be sent.
- **result**: dynamic - result to be sent.
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### sendDeletedResult
Sends the deleted result in JSON format.

> FutureOr\<shelf.Response\> sendDeletedResult(shelf.Request req, err, result)

- **req**: shelf.Request - HTTP request context
- **err**: dynamic - error to be sent.
- **result**: dynamic - result to be sent.
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### sendEmptyResult
Send an empty result with 204 status code.

> FutureOr\<shelf.Response\> sendEmptyResult(shelf.Request req, err)

- **req**: shelf.Request - HTTP request context
- **err**: dynamic - error to be sent.
- **returns**: FutureOr\<shelf.Response\> - HTTP response context

#### sendError
Sends an error serialized as ErrorDescription object and appropriate HTTP status code.

> FutureOr\<shelf.Response\> sendError(shelf.Request req, error)

- **req**: shelf.Request - HTTP request context
- **err**: dynamic - error to be sent.
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### sendInternalError
Sends an internal error message

> FutureOr\<shelf.Response\> sendInternalError(shelf.Request req,, String message)

- **req**: shelf.Request - HTTP request context
- **message**: String - message
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### sendNotFound
Sends a not found error message.

> FutureOr\<shelf.Response\> sendNotFound(shelf.Request req, String message)

- **req**: shelf.Request - HTTP request context
- **message**: String - message
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### sendResult
Sends a result as a JSON object.

> FutureOr\<shelf.Response\> sendResult(shelf.Request req, err, result)

- **req**: shelf.Request - HTTP request context
- **err**: dynamic - error to be sent.
- **result**: dynamic - result to be sent.
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### sendServerUnavailable
Sends a server unavailable error message (Status code 503).

> FutureOr\<shelf.Response\> sendServerUnavailable(shelf.Request req,, String message)

- **req**: shelf.Request - HTTP request context
- **message**: String - message
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### sendSessionExpired
Sends a session expired error message (Status code 440).

> FutureOr\<shelf.Response\> sendSessionExpired(shelf.Request req,, String message)

- **req**: shelf.Request - HTTP request context
- **message**: String - message
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### sendUnauthorized
Sends an unauthorized error message.

> FutureOr\<shelf.Response\> sendUnauthorized(shelf.Request req, String message)

- **req**: shelf.Request - HTTP request context
- **message**: String - message
- **returns**: FutureOr\<shelf.Response\> - HTTP response context


#### setReferences
Sets the specified references.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - specified references
