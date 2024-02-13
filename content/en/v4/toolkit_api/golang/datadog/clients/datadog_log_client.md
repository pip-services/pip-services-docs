---
type: docs
title: "DataDogLogClient"
linkTitle: "DataDogLogClient"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-datadog-go"
description: >
    REST client for DataDog logs.


---

**Implements:** [RestClient](../../../http/clients/rest_client)

### Description

The DataDogLogClient class allows you to create a REST client for DataDog logs. 



### Constructors

Creates a new instance of this class.

> NewDataDogLogClient(config [*ConfigParams](../../../components/config/config_params)) [*DataDogLogClient]()

- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters.


### Methods

#### Configure
Configures a component by passing its configuration parameters.

> (c [*DataDogLogClient]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### Open
Opens the component.

> (c [*DataDogLogClient]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### SendLogs
Sends log messages.

> (c [*DataDogLogClient]()) SendLogs(ctx context.Context, correlationId string, messages [[]DataDogLogMessage](../datadog_log_message)) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messages**: [[]DataDogLogMessage](../datadog_log_message) - messages to send.
- **returns**: error - error or nil if no errors occurred.

#### SetReferences
Sets references to dependent components.

> (c [*DataDogLogClient]()) SetReferences(ctx context.Context, refs [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

