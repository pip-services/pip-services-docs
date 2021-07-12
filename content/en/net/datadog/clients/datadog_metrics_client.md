---
type: docs
title: "DataDogMetricsClient"
linkTitle: "DataDogMetricsClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-datadog-dotnet"
description: >
    REST client for DataDog metrics.


---

**Inherits:** [RestClient](../../../rpc/clients/rest_client)

### Description

The DataDogMetricsClient class REST client for DataDog metrics.



### Constructors
Creates an instance of this class.

> `public` DataDogMetricsClient([ConfigParams](../../../commons/config/config_params) config = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters


### Instance methods

#### Configure
Configures the component by passing its configuration parameters. 

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### OpenAsync
Opens the component.

> `public override` async Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### SendMetricsAsync
Sends the given metrics.

> `public` Task SendMetricsAsync(string correlationId, IEnumerable<[DataDogMetric](../datadog_metric)> metrics)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messages**: IEnumerable<[DataDogMetric](../datadog_metric)> - messages

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
