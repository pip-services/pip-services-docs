---
type: docs
title: "CommandableSwaggerDocument"
linkTitle: "CommandableSwaggerDocument"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Class used to generate Swagger code that describes created REST API methods and their parameters. 
---

### Description

The CommandableSwaggerDocument class allows you to generate Swagger code that describes created REST API methods and their parameters. 

### Constructors
Creates a new instance of the service.

> `public` CommandableSwaggerDocument(String baseRoute, [ConfigParams](../../../components/config/config_params) config, List<[ICommand](../../../rpc/commands/icommand)> commands)
 
- **baseRoute**: String - base route of the service
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters 
- **commands**: [ICommand](../../../rpc/commands/icommand)[] - list of commmands.

### Fields

<span class="hide-title-link">

#### commands
List of commmands.
> List<[ICommand](../../../rpc/commands/icommand)> **commands**

#### version
Version number.
> String **version** = "3.0.2"

#### baseRoute
Base route.
> String **baseRoute**

#### infoTitle
Title.
> String **infoTitle**

#### infoDescription
API description
> String **infoDescription**

#### infoVersion
API version
> String **infoVersion** = "1"

#### infoTermsOfService
Terms of service information.
> String **infoTermsOfService**

#### infoContactName
Contact name.
> String **infoContactName**

#### infoContactUrl
Contact URL.
> String **infoContactUrl**

#### infoContactEmail
Contact email.
> String **infoContactEmail**

#### infoLicenseName
License name.
> String **infoLicenseName**

#### infoLicenseUrl
License information URL.
> String **infoLicenseUrl**

</span>


### Instance methods


#### getSpaces
Returns a string with spaces.

> `protected` String getSpaces(int length)

- **length**: int - determines the length of the string with spaces.
- **returns**: String - string containing spaces.


#### toString
Returns string with Swagger code that describe service methods.

> `public` String toString()

- **returns**: string - string with the API information.


#### writeArrayItem
Writes an array item to Swagger code.

> `protected` void writeArrayItem(int indent, String name, Boolean isObjectItem)

- **indent**: int - number of spaces
- **name**: String - item's name
- **isObjectItem**: Boolea - True is the item is an object. false otherwise.


#### writeAsObject
Adds a property and its value.

> `protected` void writeAsObject(int indent, String name, Object value)

- **indent**: int - number of spaces
- **name**: String - name of the property
- **value**: Object - value of the property

#### writeAsString
Adds a string property and its string value.

> `protected` void writeAsString(int indent, String name, String value)

- **indent**: int - number of spaces
- **name**: String - name of the property
- **value**: String - value of the property

#### writeData
Adds data to the Swagger code.

> `protected` void writeData(int indent, Map<String, Object> data)

- **indent**: int - number of spaces
- **data**: Map<String, Object> - data to be added

#### writeName
Write a property or object name.

> `protected` void writeName(int indent, String name)

- **indent**: int - number of spaces
- **name**: String - string with added identation
