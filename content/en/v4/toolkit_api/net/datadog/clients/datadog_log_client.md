---
type: docs
title: "DataDogLogClient"
linkTitle: "DataDogLogClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: >
    REST client for DataDog logs.


---

**Inherits:** [RestClient](../../../http/clients/rest_client)

### Description

The DataDogLogClient class allows you to create a REST client for DataDog logs. 



### Constructors
Creates a new instance of this class.

> `public` DataDogLogClient([ConfigParams](../../../components/config/config_params) config = null)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters.


### Instance methods

#### Configure
Configures the component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### OpenAsync
Opens the component.

> `public override` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### SendLogs
Sends log messages.

> `public` Task SendLogsAsync(IContext context, IEnumerable<[DataDogLogMessage](../datadog_log_message)> messages)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messages**: IEnumerable<[DataDogLogMessage](../datadog_log_message)> - messages to send.

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.
