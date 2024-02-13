---
type: docs
title: "DataDogMetricsClient"
linkTitle: "DataDogMetricsClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: >
    REST client for DataDog metrics.


---

**Inherits:** [RestClient](../../../http/clients/rest_client)

### Description

The DataDogMetricsClient class is used to create REST clients for DataDog metrics.



### Constructors
Creates an instance of this class.

> `public` DataDogMetricsClient([ConfigParams](../../../components/config/config_params) config = null)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters


### Instance methods

#### Configure
Configures the component by passing its configuration parameters. 

> `public override` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### OpenAsync
Opens the component.

> `public override` async Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### SendMetricsAsync
Sends the given metrics.

> `public` Task SendMetricsAsync(IContext context, IEnumerable<[DataDogMetric](../datadog_metric)> metrics)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messages**: IEnumerable<[DataDogMetric](../datadog_metric)> - messages

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.
