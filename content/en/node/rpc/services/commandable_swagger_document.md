---
type: docs
title: "CommandableSwaggerDocument"
linkTitle: "CommandableSwaggerDocument"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    Class used to generate Swagger code that describes created REST API methods and their parameters. 
---

### Description

The CommandableSwaggerDocument class allows you to generate Swagger code that describes created REST API methods and their parameters. 

### Constructors
Creates a new instance of the service.

> `public` constructor(baseRoute: string, config: [ConfigParams](../../../commons/config/config_params), commands: [ICommand](../../../commons/commands/icommand)[])

- **baseRoute**: string - base route of the service
- **config**: [ConfigParams](../../../commons/config/config_params) - 
- **commands**: [ICommand](../../../commons/commands/icommand)[] - list of commmands.

### Fields

<span class="hide-title-link">

#### commands
List of commmands.
> **commands**: [ICommand](../../../commons/commands/icommand)[]

#### version
Version number.
> **version**: string

#### baseRoute
Base route.
> **baseRoute**: string

#### infoTitle
Title.
> **infoTitle**: string

#### infoDescription
API description
> **infoDescription**: string

#### infoVersion
API version
> **infoVersion**: string

#### infoTermsOfService
Terms of service information.
> **infoTermsOfService**: string

#### infoContactName
Contact name.
> **infoContactName**: string

#### infoContactUrl
Contact URL.
> **infoContactUrl**: string

#### infoContactEmail
Contact email.
> **infoContactEmail**: string

#### infoLicenseName
License name.
> **infoLicenseName**: string

#### infoLicenseUrl
License information URL.
> **infoLicenseUrl**: string

</span>


### Instance methods


#### getSpaces
Returns a string with spaces.

> `protected` getSpaces(length: number): string

- **length**: number - determines the length of the string with spaces.
- **returns**: string - string containing spaces.


#### toString
Returns string with Swagger code that describe service methods.

> `public` toString(): string

- **returns**: string - string with the API information.


#### typeToString
Returns a string with the type name.

> `protected` typeToString(type: any): string

- **type**: any - type (e.g. Integer)
- **returns**: string - name of the type (e.g. 'integer')


#### writeArrayItem
Writes an array item to Swagger code.

> `protected` writeArrayItem(indent: number, name: string, isObjectItem: boolean = false): void

- **indent**: number - number of spaces
- **name**: string - item's name
- **isObjectItem**: bool - True is the item is an object. false otherwise.


#### writeAsObject
Adds a property and its value.

> `protected` writeAsObject(indent: number, name: string, value: any): void

- **indent**: number - number of spaces
- **name**: string - name of the property
- **value**: any - value of the property


#### writeData
Adds data to the Swagger code.

> `protected` writeData(indent: number, data: Map\<string, any\>): void

- **indent**: number - number of spaces
- **name**: string - name
- **data**: Map\<string, any\> - data to be added

#### writeName
Write a property or object name.

> `protected` writeName(indent: number, name: string); void

- **indent**: number - number of spaces
- **name**: string - string with added identation
