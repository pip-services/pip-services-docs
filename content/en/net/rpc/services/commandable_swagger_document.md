---
type: docs
title: "CommandableSwaggerDocument"
linkTitle: "CommandableSwaggerDocument"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Class used to generate Swagger code that describes created REST API methods and their parameters. 
---

### Description

The CommandableSwaggerDocument class allows you to generate Swagger code that describes created REST API methods and their parameters. 

### Constructors
Creates a new instance of the service.

> `public` CommandableSwaggerDocument(string baseRoute, [ConfigParams](../../../commons/config/config_params) config, List<[ICommand](../../../commons/commands/icommand)> commands)

- **baseRoute**: string - base route of the service
- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters 
- **commands**: List<[ICommand](../../../commons/commands/icommand)> - list of commmands.

### Properties

#### Commands
List of commmands.
> `public` List<[ICommand](../../../commons/commands/icommand)> Commands { get; set; }

#### Version
Version number.
> `public` string Version { get; set; } = "3.0.2"

#### BaseRoute
Base route.
> `public` string BaseRoute { get; set; }

#### InfoTitle
Title.
> `public` string InfoTitle { get; set; }

#### InfoDescription
API description
> `public` string InfoDescription { get; set; }

#### InfoVersion
API version
> `public` string InfoVersion { get; set; } = "1"

#### InfoTermsOfService
Terms of service information.
> `public` string InfoTermsOfService { get; set; }

#### InfoContactName
Contact name.
> `public` string InfoContactName { get; set; }

#### InfoContactUrl
Contact URL.
> `public` string InfoContactUrl { get; set; }

#### InfoContactEmail
Contact email.
> `public` string InfoContactEmail { get; set; }

#### InfoLicenseName
License name.
> `public` string InfoLicenseName { get; set; }

#### InfoLicenseUrl
License information URL.
> `public` string InfoLicenseUrl { get; set; }


### Instance methods


#### GetSpaces
Returns a string with spaces.

> `protected` string GetSpaces(int length)

- **length**: int - determines the length of the string with spaces.
- **returns**: string - string containing spaces.


#### ToString
Returns string with Swagger code that describe service methods.

> `public override` string ToString()

- **returns**: string - string with the API information.


#### WriteArrayItem
Writes an array item to Swagger code.

> `protected` void WriteArrayItem(int indent, string name, bool isObjectItem = false)

- **indent**: int - number of spaces
- **name**: string - item's name
- **isObjectItem**: bool - True is the item is an object. false otherwise.


#### WriteAsObject
Adds a property and its value.

> `protected` void WriteAsObject(int indent, string name, object value)

- **indent**: int - number of spaces
- **name**: string - name of the property
- **value**: object - value of the property

#### WriteAsString
Adds a string property and its string value.

> `protected` void WriteAsString(int indent, string name, string value)

- **indent**: int - number of spaces
- **name**: string - name of the property
- **value**: string - value of the property


#### WriteData
Adds data to the Swagger code.

> `protected` void WriteData(int indent, Dictionary\<string, object\> data)

- **indent**: int - number of spaces
- **name**: string - name
- **data**: Dictionary\<string, object\> - data to be added

#### WriteName
Write a property or object name.

> `protected` void WriteName(int indent, string name)

- **indent**: int - number of spaces
- **name**: string - string with added identation
