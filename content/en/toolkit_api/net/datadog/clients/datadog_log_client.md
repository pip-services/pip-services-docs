---
type: docs
title: "DataDogLogClient"
linkTitle: "DataDogLogClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-datadog-dotnet"
description: >
    REST client for DataDog logs.


---

**Inherits:** [RestClient](../../../rpc/clients/rest_client)

### Description

The DataDogLogClient class allows you to create a REST client for DataDog logs. 



### Constructors
Creates a new instance of this class.

> `public` DataDogLogClient([ConfigParams](../../../commons/config/config_params) config = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters.


### Instance methods

#### Configure
Configures the component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### OpenAsync
Opens the component.

> `public override` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### SendLogs
Sends log messages.

> `public` Task SendLogsAsync(string correlationId, IEnumerable<[DataDogLogMessage](../datadog_log_message)> messages)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messages**: IEnumerable<[DataDogLogMessage](../datadog_log_message)> - messages to send.

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
