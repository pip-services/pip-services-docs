---
type: docs
title: "SwaggerService"
linkTitle: "SwaggerService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-swagger-dotnet"
description: >
    Swagger UI service.
---

**Inherits:** [ISwaggerService](../../../rpc/services/iswagger_service), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IInitializable](../../../rpc/services/iinitializable)

### Description

The SwaggerService class allows you to create a Swagger UI service.


### Fields

<span class="hide-title-link">

#### _endpoint
The HTTP endpoint that exposes this service.
> `protected` **_endpoint**: [HttpEndpoint](../../../rpc/services/http_endpoint)

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _routes
Routes with swagger doc
> `protected` **_routes**: Dictionary\<string, string\>

</span>


### Instance methods

#### Configure
Configures a component by its passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../config_params) config)

- **config**: [ConfigParams](../config_params) - configuration parameters to be set.

#### Initialize
TODO: add description
> `public` void Initialize(IApplicationBuilder applicationBuilder)

- **applicationBuilder**: IApplicationBuilder - TODO: add description


#### RegisterOpenApiSpec
Performs the required Swagger registration steps.

> `public` void RegisterOpenApiSpec(string baseRoute, string swaggerRoute)

- **baseRoute**: string - base route
- **swaggerRoute**: string - Swagger route 

#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.