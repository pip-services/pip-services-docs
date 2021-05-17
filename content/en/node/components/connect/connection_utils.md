---
type: docs
title: "ConnectionUtils"
linkTitle: "ConnectionUtils"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    A set of utility functions used to process connection parameters
---

### Description

The ConnectionUtils class provides a set of utility functions used to process connection parameters.

### Instance methods

#### compose_uri
Composes URI from config parameters.
The result URI will be in the following form:
*protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...*

> `public static` composeUri(options: [ConfigParams](../../../commons/config/config_params), defaultProtocol: string, defaultPort: number): string

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **defaultProtocol**: string - a default protocol
- **defaultPort**: number - a default port
- **returns**: string - a composed URI

#### concat
Concatinates two options by combining duplicated properties into comma-separated list

> `public static` concat(options1: [ConfigParams](../../../commons/config/config_params), options2: [ConfigParams](../../../commons/config/config_params), *keys: string): [ConfigParams](../../../commons/config/config_params)

- **options1**: [ConfigParams](../../../commons/config/config_params) - first options to merge
- **options2**: [ConfigParams](../../../commons/config/config_params) - second options to merge
- **keys**: string - when defined, it limits only to specific keys
- **returns**: [ConfigParams](../../../commons/config/config_params) - new connection parameters to be added


#### exclude
Excludes specified keys from the config parameters.

> `public static` exclude(options: [ConfigParams](../../../commons/config/config_params), ...keys: string[]): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: string[] - a list of keys to be excluded.
- **returns**: [ConfigParams](../../../commons/config/config_params) - a processed config parameters.


#### include
Includes specified keys from the config parameters.

> `public static` include(options: [ConfigParams](../../../commons/config/config_params), ...keys: string[]): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: string[] - a list of keys to be included.
- **returns**: [ConfigParams](../../../commons/config/config_params) - a processed config parameters.


#### parseUri
Parses URI into config parameters.
The URI shall be in the following form:
`protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...`

> `public static` parseUri(uri: string, defaultProtocol: string, defaultPort: string): [ConfigParams](../../../commons/config/config_params)

- **uri**: string - the URI to be parsed
- **defaultProtocol**: string - a default protocol
- **defaultPort**: string - a default port
- **returns**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters with URI elements
