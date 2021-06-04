---
type: docs
title: "RestOperations"
linkTitle: "RestOperations"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
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
> **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
Counter component
> **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _dependency_resolver
Dependency resolver component
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver) = DependencyResolver()

</span>


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _get_correlation_id
Returns a correlationId from a request

>  _get_correlation_id(): Optional[str]

- **returns**: Optional[str] - returns a correlationId from a request


#### _get_filter_params
Gets the filter parameters.

>  _get_filter_params(): [FilterParams](../../../commons/data/filter_params)

- **returns**: [FilterParams](../../../commons/data/filter_params) - filter paramters

#### _get_paging_params
Gets the paging parameters.

>  _get_paging_params(): [PagingParams](../../../commons/data/paging_params)

- **returns**: [PagingParams](../../../commons/data/paging_params) - paging paramters


#### invoke
Invokes an operation.

> invoke(operation: str): Callable

- **operation**: str - operation to be invoked
- **returns**: Callable - operation


#### _send_bad_request
Sends a bad request error message.

> _send_bad_request(message: str): str

- **message**: str - message
- **returns**: str - bad request error message


#### _send_conflict
Sends a conflict error messge

> _send_conflict(message: str): str

- **message**: str - message
- **returns**: str - conflict error message.


#### _send_created_result
Sends a JSON object with the created result.

> _send_created_result(result: Any = None): Optional[str]

- **result**: Any - result to be sent.
- **returns**: Optional[str] - JSON text response.


#### _send_deleted_result
Sends the deleted result in JSON format.

> _send_deleted_result(): Optional[str]

- **result**: Any - execution result or a promise with execution result.
- **returns**: JSON text response.


#### _send_empty_result
Send an empty result with 204 status code.

> _send_empty_result(result: Any = None): Optional[str]

- **result**: Any - Optional[str] 
- **returns**: Optional[str] - empty result with 204 status code.


#### _send_error
Sends an error serialized as ErrorDescription object and appropriate HTTP status code.

> _send_error(error: Any = None): str

- **error**: Any - error
- **returns**: Optional[str] - error serialized as ErrorDescription object and appropriate HTTP status code.


#### _send_internal_error
Sends an internal error message

> _send_internal_error(message: str): str

- **message**: Any - message
- **returns**: Optional[str] - internal error message


#### _send_not_found
Sends a not found error message.

> _send_not_found(message: str): str

- **message**: Any - message
- **returns**: Optional[str] - not found error message.

#### _send_result
Sends a result as a JSON object.

> _send_result(result: Any = None): Optional[str]

- **result**: Any - result
- **returns**: Optional[str] - result as a JSON object.


#### _send_server_unavailable
Sends a server unavailable error message (Status code 503).

> _send_server_unavailable(message: str): str

- **message**: str - message
- **returns**: str - server unavailable error message (Status code 503).


#### _send_session_expired
Sends a session expired error message (Status code 440).

> _send_session_expired(message: str): str

- **message**: str - message
- **returns**: str -  session expired error message (Status code 440).


#### _send_unauthorized
Sends an unauthorized error message.

> _send_unauthorized(message: str): str

- **message**: str - message
- **returns**: str - unauthorized error message.


#### set_references
Sets the specified references.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - specified references
