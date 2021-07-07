---
type: docs
title: "DataDogLogClient"
linkTitle: "DataDogLogClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-datadog-nodex"
description: >
    TODO: add description


---

**Extends:** [RestClient](../../../rpc/services/rest_client)

### Description

TODO: add description



### Constructors
TODO: add description

> `public` constructor(config?: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - TODO: add description


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### open
TODO: add description

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - TODO: add description

#### sendLogs
TODO: add description

> `public` sendLogs(correlationId: string, messages: DataDogLogMessage[]): Promise\<void\>

- **correlationId**: string - TODO: add description
- **messages**: [DataDogLogMessage[]](../datadog_log_message)

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
