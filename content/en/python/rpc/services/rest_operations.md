---
type: docs
title: "RestOperations"
linkTitle: "RestOperations"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    TODO add description
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)


### Fields

<span class="hide-title-link">

#### _logger
TODO add description
> **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
TODO add description
> **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _dependency_resolver
TODO add description
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver) = DependencyResolver()

</span>


### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _get_correlation_id
Returns correlationId from request

>  _get_correlation_id(): Optional[str]

- **returns**: Optional[str] - Returns correlationId from request


#### _get_filter_params
TODO add description

>  _get_filter_params(): [FilterParams](../../../commons/data/filter_params)

- **returns**: [FilterParams](../../../commons/data/filter_params) - TODO add description


#### _get_paging_params
TODO add description

>  _get_paging_params(): [PagingParams](../../../commons/data/paging_params)

- **returns**: [PagingParams](../../../commons/data/paging_params) - TODO add description


#### invoke
TODO add description

> invoke(operation: str): Callable

- **operation**: str - TODO add description
- **returns**: Callable - TODO add description


#### _send_bad_request
TODO add description

> _send_bad_request(message: str): str

- **message**: str - TODO add description
- **returns**: str - TODO add description


#### _send_conflict
TODO add description

> _send_conflict(message: str): str

- **message**: str - TODO add description
- **returns**: str - TODO add description


#### _send_created_result
TODO add description

> _send_created_result(result: Any = None): Optional[str]

- **result**: Any - TODO add description
- **returns**: Optional[str] - TODO add description


#### _send_deleted_result
TODO add description

> _send_deleted_result(): Optional[str]

- **result**: Any - TODO add description
- **returns**: Optional[str] - TODO add description


#### _send_empty_result
TODO add description

> _send_empty_result(result: Any = None): Optional[str]

- **result**: Any - TODO add description
- **returns**: Optional[str] - TODO add description


#### _send_error
TODO add description

> _send_error(error: Any = None): str

- **error**: Any - TODO add description
- **returns**: Optional[str] - TODO add description


#### _send_internal_error
TODO add description

> _send_internal_error(message: str): str

- **message**: Any - TODO add description
- **returns**: Optional[str] - TODO add description


#### _send_not_found
TODO add description

> _send_not_found(message: str): str

- **message**: Any - TODO add description
- **returns**: Optional[str] - TODO add description


#### _send_result
TODO add description

> _send_result(result: Any = None): Optional[str]

- **result**: Any - TODO add description
- **returns**: Optional[str] - TODO add description


#### _send_server_unavailable
TODO add description

> _send_server_unavailable(message: str): str

- **message**: str - TODO add description
- **returns**: str - TODO add description


#### _send_session_expired
TODO add description

> _send_session_expired(message: str): str

- **message**: str - TODO add description
- **returns**: str - TODO add description


#### _send_session_expired
TODO add description

> _send_session_expired(message: str): str

- **message**: str - TODO add description
- **returns**: str - TODO add description


#### _send_unauthorized
TODO add description

> _send_unauthorized(message: str): str

- **message**: str - TODO add description
- **returns**: str - TODO add description


#### _send_unauthorized
TODO add description

> _send_unauthorized(message: str): str

- **message**: str - TODO add description
- **returns**: str - TODO add description


#### set_references
TODO add description

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - TODO add description
