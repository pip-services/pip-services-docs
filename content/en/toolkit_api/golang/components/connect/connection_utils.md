---
type: docs
title: "ConnectionUtils"
linkTitle: "ConnectionUtils"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    A set of utility functions used to process connection parameters
---

### Description

The ConnectionUtils class provides a set of utility functions used to process connection parameters.

### Methods

#### ComposeUri
Composes URI from config parameters.
The result URI will be in the following form:  
*protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...*

> (c *TConnectionUtils) ComposeUri(options [*config.ConfigParams](../../../commons/config/config_params), defaultProtocol string, defaultPort int) string

- **options**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters
- **defaultProtocol**: string - default protocol
- **defaultPort**: int - default port
- **returns**: string - composed URI

#### Concat
Concatinates two options by combining duplicated properties into comma-separated list

> (c *TConnectionUtils) Concat(options1 [*config.ConfigParams](../../../commons/config/config_params), options2 [*config.ConfigParams](../../../commons/config/config_params), keys ...string) [*config.ConfigParams](../../../commons/config/config_params)

- **options1**: [*config.ConfigParams](../../../commons/config/config_params) - first options to merge
- **options2**: [*config.ConfigParams](../../../commons/config/config_params) - second options to merge
- **keys**: ...string - when defined, it limits only to specific keys
- **returns**: [*config.ConfigParams](../../../commons/config/config_params) - new connection parameters to be added


#### Exclude
Excludes specified keys from the config parameters.

> (c *TConnectionUtils) Exclude(options [*config.ConfigParams](../../../commons/config/config_params), keys ...string) [*config.ConfigParams](../../../commons/config/config_params)

- **options**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: ...string - list of keys to be excluded.
- **returns**: [*config.ConfigParams](../../../commons/config/config_params) - processed config parameters.


#### Include
Includes specified keys from the config parameters.

> (c *TConnectionUtils) Include(options [*config.ConfigParams](../../../commons/config/config_params), keys ...string) [*config.ConfigParams](../../../commons/config/config_params)

- **options**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be processed.
- **keys**: ...string - list of keys to be included.
- **returns**: [*config.ConfigParams](../../../commons/config/config_params) - processed config parameters.


#### ParseUri
Parses URI into config parameters.
The URI shall be in the following form:
`protocol://username@password@host1:port1,host2:port2,...?param1=abc&param2=xyz&...`

> (c *TConnectionUtils) ParseUri(uri string, defaultProtocol string, defaultPort int) [*config.ConfigParams](../../../commons/config/config_params)

- **uri**: string - URI to be parsed
- **defaultProtocol**: string - default protocol
- **defaultPort**: string - default port
- **returns**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters with URI elements
