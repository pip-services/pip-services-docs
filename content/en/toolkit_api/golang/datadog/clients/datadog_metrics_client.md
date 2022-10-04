---
type: docs
title: "DataDogMetricsClient"
linkTitle: "DataDogMetricsClient"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-datadog-gox"
description: >
    REST client for DataDog metrics.


---

### Description

The DataDogMetricsClient class allows you to create REST clients for DataDog metrics.


### Constructors

#### NewDataDogMetricsClient
Creates an instance of this class.

> NewDataDogMetricsClient(config [*ConfigParams](../../../commons/config/config_params)) [*DataDogMetricsClient]()

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters


### Methods

#### Configure
Configures the component by passing its configuration parameters. 

> (c [*DataDogMetricsClient]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Open
Opens the component.

> (c [*DataDogMetricsClient]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### SendMetrics
Sends the given metrics.

> (c [*DataDogMetricsClient]()) SendMetrics(ctx context.Context, correlationId string, metrics [[]DataDogMetric](../datadog_metric)) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **metrics**: [[]DataDogMetric](../datadog_metric) - the datadog metrics
- **returns**: error - error or nil if no errors occurred.

#### SetReferences
Sets references to dependent components.

> (c [*DataDogMetricsClient]()) SetReferences(ctx context.Context, refs [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
