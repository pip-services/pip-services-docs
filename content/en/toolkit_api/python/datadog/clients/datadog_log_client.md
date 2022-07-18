---
type: docs
title: "DataDogLogClient"
linkTitle: "DataDogLogClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-datadog-python"
description: >
    REST client for DataDog logs.


---

**Implements:** [RestClient](../../../rpc/clients/rest_client)

### Description

The DataDogLogClient class allows you to create a REST client for DataDog logs. 



### Constructors
Creates a new instance of this class.

> DataDogLogClient(config: [ConfigParams](../../../commons/config/config_params) = None)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters.


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### send_logs
Sends log messages.

> send_logs(correlation_id: Optional[str], messages: List[DataDogLogMessage]): Any

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **messages**: List[[DataDogLogMessage](../datadog_log_message)] - messages to send.
- **returns**: Any - result of request.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
