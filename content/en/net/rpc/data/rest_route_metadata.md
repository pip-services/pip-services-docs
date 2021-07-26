---
type: docs
title: "RestRouteMetadata"
linkTitle: "RestRouteMetadata"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Describes additional metadata for a route.

---


### Description

The RestRouteMetadata class describes additional metadata for a route.


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
Authentication. Accepted values are "basic" and "bearer".

> `public` string Authentication { get; set; }


### Instance methods


#### SetsMethodAndRoute
Sets the method and route.

> `public` [RestRouteMetadata]() SetsMethodAndRoute(string method, string route)

- **method**: string - method
- **route**: string - route
- **returns**: [RestRouteMetadata]() - instance with defined method and route.


#### SetsTags
Sets the tags.

> `public` [RestRouteMetadata]() SetsTags(params string[] tags)

- **tags**: params string[] -tags
- **returns**: [RestRouteMetadata]() - instance with defined tags.


#### ExpectsHeader
Expects header 

> `public` [RestRouteMetadata]() ExpectsHeader()

- **returns**: [RestRouteMetadata]() - instance of the class.


#### ReceivesQueryParam
Sets the name, type code, required, default value and description.

> `public` [RestRouteMetadata]() ReceivesQueryParam(string name, [TypeCode](../../../commons/convert/type_code) typeCode, bool required = false, object defaultValue = null, string description = null)

- **name**: string - name
- **typeCode**: [TypeCode](../../../commons/convert/type_code) - data type code
- **required**: bool - true if required and false otherwise
- **defaultValue**: object - default value
- **description**: string - description
- **returns**: [RestRouteMetadata]() - instance with defined name, type code, required, default value and description.


#### ReceivesOptionalQueryParam
Sets the parameter as optional.

> `public` [RestRouteMetadata]() ReceivesOptionalQueryParam(string name, [TypeCode](../../../commons/convert/type_code) typeCode, object defaultValue = null, string description = null)

- **name**: string - name
- **typeCode**: [TypeCode](../../../commons/convert/type_code) - data type code
- **defaultValue**: object - default value
- **description**: string - description
- **returns**: [RestRouteMetadata]() - instance with parameter set as optional.


#### ReceivesRequiredQueryParam
Sets a parameter as required.

> `public` [RestRouteMetadata]() ReceivesRequiredQueryParam(string name, [TypeCode](../../../commons/convert/type_code) typeCode, object defaultValue = null, string description = null)


- **name**: string - name
- **typeCode**: [TypeCode](../../../commons/convert/type_code) - data type code
- **defaultValue**: object - default value
- **description**: string - description
- **returns**: [RestRouteMetadata]() - instance with the parameter set as required.


#### ReceivesCorrelationIdParam
Sets the CorrelationId parameter.

> `public` [RestRouteMetadata]() ReceivesCorrelationIdParam()

- **returns**: [RestRouteMetadata]() - instance with correlationId


#### ReceivesBodyFromSchema
Sets the body from a schema.

> `public` [RestRouteMetadata]() ReceivesBodyFromSchema([ObjectSchema](../../../commons/validate/object_schema) schema)


- **schema**: [ObjectSchema](../../../commons/validate/object_schema) - schema
- **returns**: [RestRouteMetadata]() - instance with body.


#### ReceivesFile
Sets  NeedsFile as true.

> `public` [RestRouteMetadata]() ReceivesFile()


- **returns**: [RestRouteMetadata]() - instance with  NeedsFile set as true.


#### SendsData
Sets the status code, description and schema for responses.

> `public` [RestRouteMetadata]() SendsData(int statusCode, string description, object schema = null)


- **statusCode**: int - status code
- **description**: string - description
- **schema**: object - schema
- **returns**: [RestRouteMetadata]() - instance with defined status code, description and schema for responses.


#### SendsData200
Sets SendData to 200 (Success).

> `public` [RestRouteMetadata]() SendsData200(object schema = null)

- **schema**:schema
- **returns**: [RestRouteMetadata]() - instance with SendsData set as 200 (Success).


#### SendsDataPage200
Sets SendData to 200 (Success).

> `public` [RestRouteMetadata]() SendsDataPage200(object schema)

- **schema**: object - schema
- **returns**: [RestRouteMetadata]() - instance with SendsData set as 200 (Success).


#### SendsData400
Sets SendData to 400 (Bad request).

> `public` [RestRouteMetadata]() SendsData400(object schema = null)

- **schema**: object - schema
- **returns**: [RestRouteMetadata]() - instance with SendsData set as 400 (Bad request).


#### UsesBasicAuthentication
Sets Authentication to basic.

> `public` [RestRouteMetadata]() UsesBasicAuthentication()

- **returns**: [RestRouteMetadata]() - instance with Authentication set as basic.


#### UsesBearerAuthentication
Sets Authentication to bearer.

> `public` [RestRouteMetadata]() UsesBearerAuthentication()

- **returns**: [RestRouteMetadata]() - instance with Authentication set as bearer.



