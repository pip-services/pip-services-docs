---
type: docs
title: "ConnectionUtils"
linkTitle: "ConnectionUtils"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    A set of utility functions used to process connection parameters
---

### Description

The ConnectionUtils class provides a set of utility functions used to process connection parameters.

### Static methods

#### ComposeUri
Composes URI from config parameters.
The result URI will be in the following form:
*protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...*

> `public static` string ComposeUri([ConfigParams](../../../commons/config/config_params) options, string defaultProtocol, int defaultPort)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **defaultProtocol**: string - a default protocol
- **defaultPort**: int - a default port
- **returns**: string - a composed URI

#### Concat
Concatinates two options by combining duplicated properties into comma-separated list

> `public static` [ConfigParams](../../../commons/config/config_params) Concat([ConfigParams](../../../commons/config/config_params) options1, [ConfigParams](../../../commons/config/config_params) options2, params string[] keys)

- **options1**: [ConfigParams](../../../commons/config/config_params) - first options to merge
- **options2**: [ConfigParams](../../../commons/config/config_params) - second options to merge
- **keys**: string[] - when defined, it limits only to specific keys
- **returns**: [ConfigParams](../../../commons/config/config_params) - new connection parameters to be added


#### Exclude
Excludes specified keys from the config parameters.

> `public static` [ConfigParams](../../../commons/config/config_params) Exclude([ConfigParams](../../../commons/config/config_params) options, params string[] keys)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: string[] - a list of keys to be excluded.
- **returns**: [ConfigParams](../../../commons/config/config_params) - a processed config parameters.


#### Include
Includes specified keys from the config parameters.

> `public static` [ConfigParams](../../../commons/config/config_params) Include([ConfigParams](../../../commons/config/config_params) options, params string[] keys)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: string[] - a list of keys to be included.
- **returns**: [ConfigParams](../../../commons/config/config_params) - a processed config parameters.


#### ParseUri
Parses URI into config parameters.
The URI shall be in the following form:
`protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...`

> `public static` [ConfigParams](../../../commons/config/config_params) ParseUri(string uri, string defaultProtocol, string defaultPort)

- **uri**: string - the URI to be parsed
- **defaultProtocol**: string - a default protocol
- **defaultPort**: string - a default port
- **returns**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters with URI elements
