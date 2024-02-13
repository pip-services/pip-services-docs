---
type: docs
title: "CommandableSwaggerDocument"
linkTitle: "CommandableSwaggerDocument"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-http-dart"
description: >
    Class used to generate Swagger code that describes created REST API methods and their parameters. 
---

### Description

The CommandableSwaggerDocument class allows you to generate Swagger code that describes created REST API methods and their parameters. 

### Constructors
Creates a new instance of the service.

> CommandableSwaggerDocument(String baseRoute, [ConfigParams?](../../../components/config/config_params) config, List<[ICommand](../../../rpc/commands/icommand)> commands)

- **baseRoute**: String - base route of the service
- **config**: [ConfigParams?](../../../components/config/config_params) - configuration parameters 
- **commands**: List<[ICommand](../../../rpc/commands/icommand)>  - list of commmands.

### Fields

<span class="hide-title-link">

#### commands
List of commmands.
> **commands**: List<[ICommand](../../../rpc/commands/icommand)>

#### version
Version number.
> **version**: String

#### baseRoute
Base route.
> **baseRoute**: String

#### infoTitle
Title.
> **infoTitle**: String?

#### infoDescription
API description
> **infoDescription**: String?

#### infoVersion
API version
> **infoVersion**: string

#### infoTermsOfService
Terms of service information.
> **infoTermsOfService**: String?

#### infoContactName
Contact name.
> **infoContactName**: String?

#### infoContactUrl
Contact URL.
> **infoContactUrl**: String?

#### infoContactEmail
Contact email.
> **infoContactEmail**: String?

#### infoLicenseName
License name.
> **infoLicenseName**: String?

#### infoLicenseUrl
License information URL.
> **infoLicenseUrl**: String?

</span>


### Instance methods


#### getSpaces
Returns a string with spaces.

> String getSpaces(int length)

- **length**: int - determines the length of the string with spaces.
- **returns**: String - string containing spaces.


#### toString
Returns string with Swagger code that describe service methods.

`@override`
> String toString()

- **returns**: String - string with the API information.


#### typeToString
Returns a string with the type name.

> String typeToString(dynamic type)

- **type**: dynamic - type (e.g. Integer)
- **returns**: String - name of the type (e.g. 'integer')


#### writeArrayItem
Writes an array item to Swagger code.

> void writeArrayItem(int indent, String name, {bool isObjectItem = false})

- **indent**: int - number of spaces
- **name**: String - item's name
- **isObjectItem**: bool - True is the item is an object. false otherwise.


#### writeAsObject
Adds a property and its value.

> void writeAsObject(int indent, String name, dynamic value)

- **indent**: int - number of spaces
- **name**: String - name of the property
- **value**: dynamic - value of the property

#### writeAsString
Adds a string property and its string value.

> void writeAsString(int indent, String name, String value)

- **indent**: int - number of spaces
- **name**: String - name of the property
- **value**: String - value of the property

#### writeData
Adds data to the Swagger code.

> void writeData(int indent, Map\<String, dynamic\> data)

- **indent**: int - number of spaces
- **name**: String - name
- **data**: Map\<String, dynamic\> - data to be added

#### writeName
Write a property or object name.

> void writeName(int indent, String name)

- **indent**: int - number of spaces
- **name**: String - string with added identation
