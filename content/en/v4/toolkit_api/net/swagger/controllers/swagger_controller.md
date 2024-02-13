---
type: docs
title: "SwaggerController"
linkTitle: "SwaggerController"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-swagger-dotnet"
description: >
    Swagger UI controller.
---

**Inherits:** [ISwaggerController](../../../http/controller/iswagger_controller), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IInitializable](../../../rpc/services/iinitializable)

### Description

The SwaggerController class allows you to create a Swagger UI controller.


### Fields

<span class="hide-title-link">

#### _endpoint
The HTTP endpoint that exposes this controller.
> `protected` **_endpoint**: [HttpEndpoint](../../../http/controller/http_endpoint)

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _routes
Routes with swagger doc
> `protected` **_routes**: Dictionary\<string, string\>

</span>


### Instance methods

#### Configure
Configures a component by its passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

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

> `public virtual` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
