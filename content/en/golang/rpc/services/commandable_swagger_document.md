---
type: docs
title: "CommandableSwaggerDocument"
linkTitle: "CommandableSwaggerDocument"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Class used to generate Swagger code that describes created REST API methods and their parameters. 
---

### Description

The CommandableSwaggerDocument class allows you to generate Swagger code that describes created REST API methods and their parameters. 

### Constructors

#### NewCommandableSwaggerDocument
Creates a new instance of the service.

> NewCommandableSwaggerDocument(baseRoute string, config [*cconf.ConfigParams](../../../commons/config/config_params), commands [][ccomands.ICommand](../../../commons/commands/icommand)) [*CommandableSwaggerDocument]()

- **baseRoute**: string - base route of the service
- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters 
- **commands**: [][ccomands.ICommand](../../../commons/commands/icommand) - list of commmands.

### Fields

<span class="hide-title-link">

#### Commands
List of commmands.
> **Commands**: [][ICommand](../../../commons/commands/icommand)[]

#### Version
Version number.
> **Version**: string

#### BaseRoute
Base route.
> **BaseRoute**: string

#### InfoTitle
Title.
> **InfoTitle**: string

#### InfoDescription
API description
> **InfoDescription**: string

#### InfoVersion
API version
> **InfoVersion**: string

#### InfoTermsOfService
Terms of service information.
> **InfoTermsOfService**: string

#### InfoContactName
Contact name.
> **InfoContactName**: string

#### InfoContactUrl
Contact URL.
> **InfoContactUrl**: string

#### InfoContactEmail
Contact email.
> **InfoContactEmail**: string

#### InfoLicenseName
License name.
> **InfoLicenseName**: string

#### InfoLicenseUrl
License information URL.
> **InfoLicenseUrl**: string

</span>


### Methods

#### GetCorrelationId
GetCorrelationId method returns CorrelationId from request

> (c [*HttpEndpoint]()) GetCorrelationId(req *http.Request) string

- **req**: *http.Request - an HTTP request
- **returns**: string - correlation_id or empty string

#### GetSpaces
Returns a string with spaces.

> (c [*CommandableSwaggerDocument]()) GetSpaces(length int) string

- **length**: int - determines the length of the string with spaces.
- **returns**: string - string containing spaces.


#### ToString
Returns string with Swagger code that describe service methods.

> (c [*CommandableSwaggerDocument]()) ToString() string

- **returns**: string - string with the API information.


#### typeToString
Returns a string with the type name.

> (c [*CommandableSwaggerDocument]()) typeToString(tp [cconv.TypeCode](../../../commons/convert/type_code)) string

- **tp**: [cconv.TypeCode](../../../commons/convert/type_code) - type (e.g. Integer)
- **returns**: string - name of the type (e.g. 'integer')


#### WriteArrayItem
Writes an array item to Swagger code.

> (c [*CommandableSwaggerDocument]()) writeArrayItem(indent int, name string, isObjectItem bool)

- **indent**: int - number of spaces
- **name**: string - item's name
- **isObjectItem**: bool - True is the item is an object. false otherwise.


#### WriteAsObject
Adds a property and its value.

> (c [*CommandableSwaggerDocument]()) writeAsObject(indent int, name string, value interface{})

- **indent**: int - number of spaces
- **name**: string - name of the property
- **value**: interface{} - value of the property


#### WriteData
Adds data to the Swagger code.

> (c [*CommandableSwaggerDocument]()) WriteData(indent int, data map[string]interface{})

- **indent**: int - number of spaces
- **name**: string - name
- **data**: map[string]interface{} - data to be added

#### WriteName
Write a property or object name.

> (c [*CommandableSwaggerDocument]()) WriteName(indent int, name string)

- **indent**: int - number of spaces
- **name**: string - string with added identation
