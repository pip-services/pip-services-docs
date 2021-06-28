---
type: docs
title: "RestOperations"
linkTitle: "RestOperations"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Handles REST services' operations.
---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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

#### Configure
Configures a component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetCorrelationId
Returns a correlationId from a request

> `protected` string GetCorrelationId(HttpRequest request)

- **request**: HttpRequest - an HTTP request
- **returns**: string - correlationId from a request


#### GetFilterParams
Gets the filter parameters.

>  `protected` [FilterParams](../../../commons/data/filter_params) GetFilterParams(HttpRequest request)

- **request**: HttpRequest - an HTTP request
- **returns**: [FilterParams](../../../commons/data/filter_params) - filter paramters

#### GetPagingParams
Gets the paging parameters.

> `protected` [PagingParams](../../../commons/data/paging_params) GetPagingParams(HttpRequest request)

- **request**: HttpRequest - an HTTP request
- **returns**: [PagingParams](../../../commons/data/paging_params) - paging paramters


#### InvokeAsync
Invokes an operation.

> `public` Task InvokeAsync(string operation, object[] parameters)

- **operation**: string - operation to be invoked.
- **parameters**: object[] - TODO: add description.


#### InvokeWithResponseAsync
Invokes an operation with returning response.

> `public` Task\<dynamic\> InvokeWithResponseAsync(string operation, object[] parameters)

- **operation**: string - operation to be invoked.
- **parameters**: object[] - TODO: add description.
- **returns**: Task\<dynamic\> - operation.


#### SendBadRequestAsync
Sends a bad request error message.

> `protected` Task SendBadRequestAsync(HttpRequest request, HttpResponse response, string message)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **message**: string - message


#### SendConflictAsync
Sends a conflict error messge

> `protected` Task SendConflictAsync(HttpRequest request, HttpResponse response, string message)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **message**: string - message


#### SendCreatedResultAsync
Sends a JSON object with the created result.

> `protected` Task SendCreatedResultAsync(HttpResponse response, object result)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **message**: string - message


#### SendDeletedResultAsync
Sends the deleted result in JSON format.

> `protected` Task SendDeletedResultAsync(HttpResponse response, object result)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.


#### SendEmptyResultAsync
Send an empty result with 204 status code.

> `protected` Task SendEmptyResultAsync(HttpResponse response)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.

#### SendErrorAsync
Sends an error serialized as ErrorDescription object and appropriate HTTP status code.

> `protected` Task SendErrorAsync(HttpResponse response, Exception error)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **error**: Exception - error


#### SendInternalErrorAsync
Sends an internal error message

> `protected` Task SendInternalErrorAsync(HttpRequest request, HttpResponse response, string message)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **message**: string - message


#### SendNotFoundAsync
Sends a not found error message.

> `protected` Task SendNotFoundAsync(HttpRequest request, HttpResponse response, string message)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **message**: string - message


#### SendResultAsync
Sends a result as a JSON object.

> `protected` Task SendResultAsync(HttpResponse response, object result)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **result**: object - result.


#### SendServerUnavailable
Sends a server unavailable error message (Status code 503).

> `protected` Task SendServerUnavailableAsync(HttpRequest request, HttpResponse response, string message)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **message**: string - message


#### SendSessionExpiredASync
Sends a session expired error message (Status code 440).

> `protected` Task SendSessionExpiredASync(HttpRequest request, HttpResponse response, string message)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **message**: string - message


#### SendUnauthorizedAsync
Sends an unauthorized error message.

> `protected` Task SendUnauthorizedAsync(HttpRequest request, HttpResponse response, string message)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP request.
- **message**: string - message


#### SetReferences
Sets the specified references.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - specified references
