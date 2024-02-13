---
type: docs
title: "RestOperations"
linkTitle: "RestOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Handles REST services' operations.
---

### Description

The RestOperations class allows you to handle REST services' operations.

### Constructors

#### NewRestOperations
NewRestOperations creates new instance of RestOperations

> NewRestOperations() [*RestOperations]()

### Fields

<span class="hide-title-link">

#### Logger
Composite logger component
> **Logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### Counters
Counter component
> **Counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### DependencyResolver
Dependency resolver component
> **DependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

</span>


### Methods

#### Configure
Configures a component by passing its configuration parameters.

> (c [*RestOperations]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GetTraceId
Returns a traceId from a request

> (c [*RestOperations]()) GetTraceId(req *http.Request) string

- **req**: *http.Request - an HTTP request
- **returns**: string - traceId from a request


#### GetFilterParams
Gets the filter parameters.

> (c [*RestOperations]()) GetFilterParams(req *http.Request) [*cdata.FilterParams](../../../data/query/filter_params)

- **req**: *http.Request - an HTTP request
- **returns**: [*cdata.FilterParams](../../../data/query/filter_params) - filter paramters

#### getPagingParams
Gets the paging parameters.

> (c [*RestOperations]()) GetPagingParams(req *http.Request) [*cdata.PagingParams](../../../data/query/paging_params)

- **req**: *http.Request - an HTTP request
- **returns**: [*cdata.PagingParams](../../../data/query/paging_params) - paging paramters


#### SendBadRequest
Sends a bad request error message.

> (c [*RestOperations]()) SendBadRequest(res http.ResponseWriter, req *http.Request, message string)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **message**: string - message


#### SendConflict
Sends a conflict error messge

> (c [*RestOperations]()) SendConflict(res http.ResponseWriter, req *http.Request, message string)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **message**: string - message


#### SendCreatedResult
Sends a JSON object with the created result.

> (c [*RestOperations]()) SendCreatedResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**: interface{} - result to be sent
- **error**: error - (optional) error objrct to send


#### SendDeletedResult
Sends the deleted result in JSON format.

> (c [*RestOperations]()) SendDeletedResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**: interface{} - result to be sent
- **error**: error - (optional) error objrct to send


#### SendEmptyResult
Send an empty result with 204 status code.

> (c [*RestOperations]()) SendEmptyResult(res http.ResponseWriter, req *http.Request, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response

#### SendError
Sends an error serialized as ErrorDescription object and appropriate HTTP status code.

> (c [*RestOperations]()) SendError(res http.ResponseWriter, req *http.Request, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **error**: error - (optional) error objrct to send


#### SendInternalError
Sends an internal error message

> (c [*RestOperations]()) SendInternalError(res http.ResponseWriter, req *http.Request, message string)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **message**: string - message


#### SendNotFound
Sends a not found error message.

> (c [*RestOperations]()) SendNotFound(res http.ResponseWriter, req *http.Request, message string)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **message**: string - message


#### SendResult
Sends a result as a JSON object.

> (c [*RestOperations]()) SendResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**: interface{} - result
- **error**: error - (optional) error objrct to send


#### SendServerUnavailable
Sends a server unavailable error message (Status code 503).

> (c [*RestOperations]()) SendServerUnavailable(res http.ResponseWriter, req *http.Request, message string)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **message**: string - message


#### SendSessionExpired
Sends a session expired error message (Status code 440).

> (c [*RestOperations]()) SendSessionExpired(res http.ResponseWriter, req *http.Request, message string)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **message**: string - message


#### SendUnauthorized
Sends an unauthorized error message.

> (c [*RestOperations]()) SendUnauthorized(res http.ResponseWriter, req *http.Request, message string)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **message**: string - message


#### SetReferences
Sets the specified references.

> (c [*RestOperations]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../components/refer/ireferences) - specified references

