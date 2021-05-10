---
type: docs
title: "CommandableSwaggerDocument"
linkTitle: "CommandableSwaggerDocument"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    TODO add description
---


### Constructors
Creates a new instance of the service.

>  CommandableHttpService(base_route: str, config: [ConfigParams](../../../commons/config/config_params), commands: List[[ICommand](../../../commons/commands/icommand)])

- **base_route**: str - 
- **config**: [ConfigParams](../../../commons/config/config_params) - 
- **commands**: List[[ICommand](../../../commons/commands/icommand)] - 

### Fields

<span class="hide-title-link">

#### commands
TODO add description
> **commands**: List[[ICommand](../../../commons/commands/icommand)]

#### version
TODO add description
> **version**: str

#### base_route
TODO add description
> **base_route**: str

#### info_title
TODO add description
> **info_title**: str

#### info_description
TODO add description
> **info_description**: str

#### info_version
TODO add description
> **info_version**: str

#### info_terms_of_service
TODO add description
> **info_terms_of_service**: Optional[str]

#### info_contact_name
TODO add description
> **info_contact_name**: Optional[str]

#### info_contact_url
TODO add description
> **info_contact_url**: Optional[str]

#### info_contact_email
TODO add description
> **info_contact_email**: Optional[str]

#### info_license_name
TODO add description
> **info_license_name**: Optional[str]

#### info_license_url
TODO add description
> **info_license_url**: Optional[str]

</span>


### Methods


#### _get_spaces
TODO add description

> _get_spaces(length: int): str

- **length**: int - TODO add description
- **returns**: str - TODO add description


#### to_string
TODO add description

> to_string(): str

- **returns**: str - TODO add description


#### _type_to_string
TODO add description

> _type_to_string(type: Any): str

- **type**: Any - TODO add description
- **returns**: str - TODO add description


#### _write_array_item
TODO add description

> _write_array_item(indent: int, name: str, is_object_item: bool = False)

- **indent**: int - TODO add description
- **name**: str - TODO add description
- **is_object_item**: bool - TODO add description


#### _write_as_object
TODO add description

> _write_as_object(indent: int, name: str, value: Any)

- **indent**: int - TODO add description
- **name**: str - TODO add description
- **value**: Any - TODO add description


#### _write_data
TODO add description

> _write_data(indent: int, data: Dict[str, Any])

- **indent**: int - TODO add description
- **name**: str - TODO add description
- **data**: Dict[str, Any] - TODO add description

#### _write_name
TODO add description

> _write_name(indent: int, name: str)

- **indent**: int - TODO add description
- **name**: str - TODO add description
