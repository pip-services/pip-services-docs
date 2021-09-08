---
type: docs
title: "ConnectionUtils"
linkTitle: "ConnectionUtils"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    A set of utility functions used to process connection parameters
---

### Description

The ConnectionUtils class provides a set of utility functions used to process connection parameters.

### Static methods

#### composeUri
Composes URI from config parameters.
The result URI will be in the following form:
*protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...*

> `static` String composeUri([ConfigParams](../../../commons/config/config_params) options, String defaultProtocol, int defaultPort) 

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **defaultProtocol**: String - default protocol
- **defaultPort**: int - default port
- **returns**: String - composed URI

#### concat
Concatinates two options by combining duplicated properties into a comma-separated list

> `static` [ConfigParams](../../../commons/config/config_params) concat([ConfigParams](../../../commons/config/config_params) options1, [ConfigParams](../../../commons/config/config_params) options2, [List\<String\> keys])

- **options1**: [ConfigParams](../../../commons/config/config_params) - first options to merge
- **options2**: [ConfigParams](../../../commons/config/config_params) - second options to merge
- **keys**: List\<String\> - when defined, it limits only to specific keys
- **returns**: [ConfigParams](../../../commons/config/config_params) - new connection parameters to be added


#### exclude
Excludes specified keys from the config parameters.

> `static` [ConfigParams](../../../commons/config/config_params) exclude([ConfigParams](../../../commons/config/config_params) options, List\<String\> keys)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: List\<String\> - ist of keys to be excluded.
- **returns**: [ConfigParams](../../../commons/config/config_params) - processed config parameters.


#### include
Includes specified keys from the config parameters.

> `static` [ConfigParams](../../../commons/config/config_params) include([ConfigParams](../../../commons/config/config_params) options, List\<String\> keys)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: List\<String\> - list of keys to be included.
- **returns**: [ConfigParams](../../../commons/config/config_params) - processed config parameters.


#### parseUri
Parses URI into config parameters.
The URI shall be in the following form:
`protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...`

> `static` [ConfigParams](../../../commons/config/config_params) parseUri(String uri, String defaultProtocol, String defaultPort)

- **uri**: String - URI to be parsed
- **defaultProtocol**: String - default protocol
- **defaultPort**: String - default port
- **returns**: [ConfigParams](../../../commons/config/config_params) - configuration parameters with URI elements
