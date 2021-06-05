---
type: docs
title: "CommandableSwaggerDocument"
linkTitle: "CommandableSwaggerDocument"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Class used to generate Swagger description language that represents the created REST API methods and their parameters. 
---

### Description

The CommandableSwaggerDocument class allows you to generate Swagger description language that represents the created REST API methods and their parameters. 

### Constructors
Creates a new instance of the service.

> CommandableHttpService(base_route: str, config: [ConfigParams](../../../commons/config/config_params), commands: List[[ICommand](../../../commons/commands/icommand)])

- **base_route**: str - base route of the service
- **config**: [ConfigParams](../../../commons/config/config_params) - 
- **commands**: List[[ICommand](../../../commons/commands/icommand)] - 

### Fields

<span class="hide-title-link">

#### commands
List of commmands.
> **commands**: List[[ICommand](../../../commons/commands/icommand)]

#### version
Version number.
> **version**: str

#### base_route
Base route.
> **base_route**: str

#### info_title
Title.
> **info_title**: str

#### info_description
API description
> **info_description**: str

#### info_version
API version
> **info_version**: str

#### info_terms_of_service
Terms of service information.
> **info_terms_of_service**: Optional[str]

#### info_contact_name
Contact name.
> **info_contact_name**: Optional[str]

#### info_contact_url
Contact URL.
> **info_contact_url**: Optional[str]

#### info_contact_email
Contact email.
> **info_contact_email**: Optional[str]

#### info_license_name
License name.
> **info_license_name**: Optional[str]

#### info_license_url
License information URL.
> **info_license_url**: Optional[str]

</span>


### Instance methods


#### _get_spaces
Returns a string with spaces.

> _get_spaces(length: int): str

- **length**: int - determines the length of the string with spaces.
- **returns**: str - string containing spaces.


#### to_string
Returns a string with Swagger description language that represents the service methods.

> to_string(): str

- **returns**: str - string with the API information.


#### _type_to_string
Returns a string with the type name.

> _type_to_string(type: Any): str

- **type**: Any - type (e.g. Integer)
- **returns**: str - name of the type (e.g. 'integer')


#### _write_array_item
Writes an array item into the Swagger description.

> _write_array_item(indent: int, name: str, is_object_item: bool = False)

- **indent**: int - number of spaces
- **name**: str - item's name
- **is_object_item**: bool - True is the item is an object. False otherwise.


#### _write_as_object
Adds a property and its value.

> _write_as_object(indent: int, name: str, value: Any)

- **indent**: int - number of spaces
- **name**: str - name of the property
- **value**: Any - value of the property


#### _write_data
Adds data to the Swagger description.

> _write_data(indent: int, data: Dict[str, Any])

- **indent**: int - number of spaces
- **name**: str - name
- **data**: Dict[str, Any] - data to be added

#### _write_name
Writes a property or object name.

> _write_name(indent: int, name: str)

- **indent**: int - number of spaces
- **name**: str - string with added identation
