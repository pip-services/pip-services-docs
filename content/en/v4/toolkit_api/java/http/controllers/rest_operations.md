---
type: docs
title: "RestOperations"
linkTitle: "RestOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Handles REST services' operations.
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The RestOperations class allows you to handle REST services' operations.

### Fields

<span class="hide-title-link">

#### _logger
Composite logger component
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger()

#### _counters
Counter component
> `protected` [CompositeCounters](../../../observability/count/composite_counters) **_counters** = new CompositeCounters()

#### _dependencyResolver
Dependency resolver component
> `protected` [DependencyResolver](../../../components/refer/dependency_resolver) **_dependencyResolver** = new DependencyResolver()

</span>


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### getTraceId
Returns a traceId from a request

> `protected` String getTraceId(ContainerRequestContext req)

- **req**: ContainerRequestContext - an HTTP request
- **returns**: String - traceId from a request


#### getFilterParams
Gets the filter parameters.

>  `protected` [FilterParams](../../../data/query/filter_params) getFilterParams(ContainerRequestContext req)

- **req**: ContainerRequestContext - an HTTP request
- **returns**: [FilterParams](../../../data/query/filter_params) - filter paramters

#### getPagingParams
Gets the paging parameters.

>  `protected` [PagingParams](../../../data/query/paging_params) getPagingParams(ContainerRequestContext req)

- **req**: ContainerRequestContext - an HTTP request
- **returns**: [PagingParams](../../../data/query/paging_params) - paging paramters


#### invoke
Invokes an operation.

> `public` Method invoke(String operation)

- **operation**: String - operation to be invoked
- **returns**: Method - operation


#### sendBadRequest
Sends a bad request error message.

> `protected` Response sendBadRequest(ContainerRequestContext req, String message)

- **req**: ContainerRequestContext - an HTTP request
- **message**: String - message
- **returns**: Response - response

#### sendConflict
Sends a conflict error messge

> `protected` Response sendConflict(ContainerRequestContext req, String message)

- **req**: ContainerRequestContext - an HTTP request
- **message**: String - message
- **returns**: Response - response

#### sendCreatedResult
Sends a JSON object with the created result.

> `protected` Response sendCreatedResult(Object result)

- **result**: Object - result to be sent.
- **returns**: Response - response

#### sendDeletedResult
Sends the deleted result in JSON format.

> `protected` Response sendDeletedResult(Object result) 

- **result**: Object - execution result or a Response with execution result.
- **returns**: Response - response

#### sendEmptyResult
Send an empty result with 204 status code.

> `protected` Response sendEmptyResult()

- **returns**: Response - response

#### sendError
Sends an error serialized as ErrorDescription object and appropriate HTTP status code.

> `protected` Response sendError(Exception error)

- **error**: Exception - error
- **returns**: Response - response

#### sendInternalError
Sends an internal error message

> `protected` Response sendInternalError(ContainerRequestContext req, String message)

- **req**: ContainerRequestContext - an HTTP request
- **message**: String - message
- **returns**: Response - response

#### sendNotFound
Sends a not found error message.

> `protected` Response sendNotFound(ContainerRequestContext req, String message)

- **req**: ContainerRequestContext - an HTTP request
- **message**: String - message
- **returns**: Response - response

#### sendResult
Sends a result as a JSON object.

> `protected` Response sendResult(Object result)

- **result**: Object - an HTTP response
- **returns**: Response - response


#### sendServerUnavailable
Sends a server unavailable error message (Status code 503).

> `protected` Response sendServerUnavailable(ContainerRequestContext req, String message)

- **req**: ContainerRequestContext - an HTTP request
- **message**: String - message
- **returns**: Response - response


#### sendSessionExpired
Sends a session expired error message (Status code 440).

> `protected` Response sendSessionExpired(ContainerRequestContext req, String message)

- **req**: ContainerRequestContext - an HTTP request
- **message**: String - message
- **returns**: Response - response


#### sendUnauthorized
Sends an unauthorized error message.

> `protected` Response sendUnauthorized(ContainerRequestContext req, String message)

- **req**: ContainerRequestContext - an HTTP request
- **message**: String - message
- **returns**: Response - response


#### setReferences
Sets the specified references.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - specified references
