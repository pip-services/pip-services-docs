---
type: docs
title: "RestOperations"
linkTitle: "RestOperations"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    Handles REST services' operations.
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The RestOperations class allows you to handle REST services' operations.

### Fields

<span class="hide-title-link">

#### _logger
Composite logger component
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
Counter component
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _dependencyResolver
Dependency resolver component
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver) = DependencyResolver()

</span>


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getCorrelationId
Returns a correlationId from a request

> `protected` getCorrelationId(req: any): any

- **req**: any - an HTTP request
- **returns**: any - correlationId from a request


#### getFilterParams
Gets the filter parameters.

>  `protected` getFilterParams(req: any): [FilterParams](../../../commons/data/filter_params)

- **req**: any - an HTTP request
- **returns**: [FilterParams](../../../commons/data/filter_params) - filter paramters

#### getPagingParams
Gets the paging parameters.

>  `protected` getPagingParams(req: any): [PagingParams](../../../commons/data/paging_params)

- **req**: any - an HTTP request
- **returns**: [PagingParams](../../../commons/data/paging_params) - paging paramters


#### invoke
Invokes an operation.

> `public` invoke(operation: string): (req: any, res: any) => void

- **operation**: string - operation to be invoked
- **returns**: (req: any, res: any) => void - operation


#### sendBadRequest
Sends a bad request error message.

> `protected` sendBadRequest(req: any, res: any, message: string): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **message**: string - message


#### sendConflict
Sends a conflict error messge

> `protected` sendConflict(req: any, res: any, message: string): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **message**: string - message


#### sendCreatedResult
Sends a JSON object with the created result.

> `protected` sendCreatedResult(req: any, res: any, result: any): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **result**: any - result to be sent.


#### sendDeletedResult
Sends the deleted result in JSON format.

> `protected` sendDeletedResult(req: any, res: any, result: any): void 

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **result**: any - execution result or a promise with execution result.


#### sendEmptyResult
Send an empty result with 204 status code.

> `protected` sendEmptyResult(req: any, res: any): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response

#### sendError
Sends an error serialized as ErrorDescription object and appropriate HTTP status code.

> `protected` sendError(req: any, res: any, error: any): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **error**: any - error


#### sendInternalError
Sends an internal error message

> `protected` sendInternalError(req: any, res: any, message: string): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **message**: any - message


#### sendNotFound
Sends a not found error message.

> `protected` sendNotFound(req: any, res: any, message: string): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **message**: any - message


#### sendResult
Sends a result as a JSON object.

> `protected` sendResult(req: any, res: any, result: any): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **result**: any - result


#### sendServerUnavailable
Sends a server unavailable error message (Status code 503).

> `protected` sendServerUnavailable(req: any, res: any, message: string): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **message**: string - message


#### sendSessionExpired
Sends a session expired error message (Status code 440).

> `protected` sendSessionExpired(req: any, res: any, message: string): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **message**: string - message


#### sendUnauthorized
Sends an unauthorized error message.

> `protected` sendUnauthorized(req: any, res: any, message: string): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **message**: string - message


#### setReferences
Sets the specified references.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - specified references
