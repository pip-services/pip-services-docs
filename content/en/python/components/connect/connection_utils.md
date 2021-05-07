---
type: docs
title: "ConnectionUtils"
linkTitle: "ConnectionUtils"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    A set of utility functions to process connection parameters
---


### Methods

#### concat
Concatinates two options by combining duplicated properties into comma-separated list

> `static` concat(options1: [ConfigParams](../../../commons/config/config_params), options2: [ConfigParams](../../../commons/config/config_params), *keys: str): [ConfigParams](../../../commons/config/config_params)

- **options1**: [ConfigParams](../../../commons/config/config_params) - first options to merge
- **options2**: [ConfigParams](../../../commons/config/config_params) - second options to merge
- **keys**: str - when define it limits only to specific keys
- **returns**: [ConfigParams](../../../commons/config/config_params) - new connection parameters to be added


#### exclude
Excludes specified keys from the config parameters.

> `static` exclude(options: [ConfigParams](../../../commons/config/config_params), *keys: str): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: str - a list of keys to be excluded.
- **returns**: [ConfigParams](../../../commons/config/config_params) - a processed config parameters.


#### include
Includes specified keys from the config parameters.

>  `static` include(options: [ConfigParams](../../../commons/config/config_params), *keys: str): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: str - a list of keys to be included.
- **returns**: [ConfigParams](../../../commons/config/config_params) - a processed config parameters.


#### parse_uri
Parses URI into config parameters.
The URI shall be in the following form:
`protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...`

>  `static` parse_uri(uri: str, default_protocol: str, default_port: str): [ConfigParams](../../../commons/config/config_params)

- **uri**: str - the URI to be parsed
- **default_protocol**: str - a default protocol
- **default_port**: str - a default port
- **returns**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters with URI elements