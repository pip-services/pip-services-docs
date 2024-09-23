---
type: docs
title: "ConnectionUtils"
linkTitle: "ConnectionUtils"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
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

> `public static` String composeUri([ConfigParams](../../../components/config/config_params) options, String defaultProtocol, int defaultPort)

- **options**: [ConfigParams](../../../components/config/config_params) - configuration parameters
- **defaultProtocol**: String - a default protocol
- **defaultPort**: int - a default port
- **returns**: string - a composed URI

#### concat
Concatinates two options by combining duplicated properties into comma-separated list

> `public static` [ConfigParams](../../../components/config/config_params) concat(options1: [ConfigParams](../../../components/config/config_params), options2: [ConfigParams](../../../components/config/config_params), ...keys: string)

- **options1**: [ConfigParams](../../../components/config/config_params) - first options to merge
- **options2**: [ConfigParams](../../../components/config/config_params) - second options to merge
- **keys**: string - when defined, it limits only to specific keys
- **returns**: [ConfigParams](../../../components/config/config_params) - new connection parameters to be added


#### exclude
Excludes specified keys from the config parameters.

> `public static` [ConfigParams](../../../components/config/config_params) concat([ConfigParams](../../../components/config/config_params) options1, [ConfigParams](../../../components/config/config_params) options2, List<String> keys)

- **options**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be processed.
- **keys**: List<String> - a list of keys to be excluded.
- **returns**: [ConfigParams](../../../components/config/config_params) - a processed config parameters.


#### include
Includes specified keys from the config parameters.

> `public static` [ConfigParams](../../../components/config/config_params) include([ConfigParams](../../../components/config/config_params) options, List<String> keys)

- **options**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be processed.
- **keys**: List<String> - a list of keys to be included.
- **returns**: [ConfigParams](../../../components/config/config_params) - a processed config parameters.


#### parseUri
Parses URI into config parameters.
The URI shall be in the following form:
`protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...`

> `public static` [ConfigParams](../../../components/config/config_params) parseUri(String uri, String defaultProtocol, int defaultPort)

- **uri**: String - the URI to be parsed
- **defaultProtocol**: String - a default protocol
- **defaultPort**: int - a default port
- **returns**: [ConfigParams](../../../components/config/config_params) - a configuration parameters with URI elements


#### rename
Renames property if the target name is not used.

> `public static` [ConfigParams](../../../components/config/config_params) rename([ConfigParams](../../../components/config/config_params) options, String fromName, String toName)

- **options**: ConfigParams - configuration options 
- **fromName**: String - original property name.
- **toName**: String - property name to rename to.
- **returns**: [ConfigParams](../../../components/config/config_params) - updated configuration options
