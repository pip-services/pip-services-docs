---
type: docs
title: "DataDogLogClient"
linkTitle: "DataDogLogClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-datadog-nodex"
description: >
    REST client for DataDog logs.


---

**Extends:** [RestClient](../../../rpc/services/rest_client)

### Description

The DataDogLogClient class allows you to create a REST client for DataDog logs. 



### Constructors
Creates a new instance of this class.

> `public` constructor(config?: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters.


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### open
Opens the client.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain

#### sendLogs
Sends log messages.

> `public` sendLogs(correlationId: string, messages: DataDogLogMessage[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain
- **messages**: [DataDogLogMessage[]](../datadog_log_message) - messages to send.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
