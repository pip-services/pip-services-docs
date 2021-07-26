---
type: docs
title: "RestRouteMetadata"
linkTitle: "RestRouteMetadata"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    TODO: add description

---


### Description

TODO: add description


### Properties

#### Method
Method

> `public` string Method { get; set; }


#### Route
Route

> `public` string Route { get; set; }


#### Tags
Tags

> `public` string[] Tags { get; set; }


#### QueryParams
Query paramters

> `public` List<[QueryParam](../query_param)> QueryParams { get; set; } = new List<[QueryParam](../query_param)>()


#### BodySchema
Body schema

> `public` [ObjectSchema](../../../commons/validate/object_schema) BodySchema { get; set; }


#### NeedsFile
Needs a file option

> `public` bool NeedsFile { get; set; }


#### Responses
List containing responses.

> `public` List<[ResponseData](../response_data)> Responses { get; set; } = new List<[ResponseData](../response_data)>()


#### Authentication
Authentication

> `public` string Authentication { get; set; }


### Instance methods


#### SetsMethodAndRoute
Sets the method and route.

> `public` [RestRouteMetadata]() SetsMethodAndRoute(string method, string route)

- **method**: string - method
- **route**: string - route
- **returns**: [RestRouteMetadata]() - TODO: add description


#### SetsTags
TODO: add description

> `public` [RestRouteMetadata]() SetsTags(params string[] tags)

- **tags**: params string[] - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### ExpectsHeader
Expects header 

> `public` [RestRouteMetadata]() ExpectsHeader()

- **returns**: [RestRouteMetadata]() - TODO: add description


#### ReceivesQueryParam
TODO: add description

> `public` [RestRouteMetadata]() ReceivesQueryParam(string name, [TypeCode](../../../commons/convert/type_code) typeCode, bool required = false, object defaultValue = null, string description = null)

- **name**: string - TODO: add description
- **typeCode**: [TypeCode](../../../commons/convert/type_code) - TODO: add description
- **required**: bool - TODO: add description
- **defaultValue**: object - TODO: add description
- **description**: string - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### ReceivesOptionalQueryParam
TODO: add description

> `public` [RestRouteMetadata]() ReceivesOptionalQueryParam(string name, [TypeCode](../../../commons/convert/type_code) typeCode, object defaultValue = null, string description = null)

- **name**: string - TODO: add description
- **typeCode**: [TypeCode](../../../commons/convert/type_code) - TODO: add description
- **defaultValue**: object - TODO: add description
- **description**: string - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### ReceivesRequiredQueryParam
TODO: add description

> `public` [RestRouteMetadata]() ReceivesRequiredQueryParam(string name, [TypeCode](../../../commons/convert/type_code) typeCode, object defaultValue = null, string description = null)


- **name**: string - TODO: add description
- **typeCode**: [TypeCode](../../../commons/convert/type_code) - TODO: add description
- **defaultValue**: object - TODO: add description
- **description**: string - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### ReceivesCorrelationIdParam
TODO: add description

> `public` [RestRouteMetadata]() ReceivesCorrelationIdParam()

- **returns**: [RestRouteMetadata]() - TODO: add description


#### ReceivesBodyFromSchema
TODO: add description

> `public` [RestRouteMetadata]() ReceivesBodyFromSchema([ObjectSchema](../../../commons/validate/object_schema) schema)


- **schema**: [ObjectSchema](../../../commons/validate/object_schema) - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### ReceivesFile
TODO: add description

> `public` [RestRouteMetadata]() ReceivesFile()


- **returns**: [RestRouteMetadata]() - TODO: add description


#### SendsData
TODO: add description

> `public` [RestRouteMetadata]() SendsData(int statusCode, string description, object schema = null)


- **statusCode**: int - TODO: add description
- **description**: string - TODO: add description
- **schema**: object - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### SendsData200
TODO: add description

> `public` [RestRouteMetadata]() SendsData200(object schema = null)

- **schema**: object - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### SendsDataPage200
TODO: add description

> `public` [RestRouteMetadata]() SendsDataPage200(object schema)

- **schema**: object - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### SendsData400
TODO: add description

> `public` [RestRouteMetadata]() SendsData400(object schema = null)

- **schema**: object - TODO: add description
- **returns**: [RestRouteMetadata]() - TODO: add description


#### UsesBasicAuthentication
TODO: add description

> `public` [RestRouteMetadata]() UsesBasicAuthentication()

- **returns**: [RestRouteMetadata]() - TODO: add description


#### UsesBearerAuthentication
TODO: add description

> `public` [RestRouteMetadata]() UsesBearerAuthentication()

- **returns**: [RestRouteMetadata]() - TODO: add description



