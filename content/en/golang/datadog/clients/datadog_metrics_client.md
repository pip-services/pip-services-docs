---
type: docs
title: "DataDogMetricsClient"
linkTitle: "DataDogMetricsClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-datadog-go"
description: >
    REST client for DataDog metrics.


---

**Implements:** [RestClient](../../../rpc/clients/rest_client)

### Description

The DataDogMetricsClient class allows you to create REST clients for DataDog metrics.



### Constructors

#### NewDataDogMetricsClient
Creates an instance of this class.

> NewDataDogMetricsClient(config [*ConfigParams](../../../commons/config/config_params)) [*DataDogMetricsClient]()

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters


### Instance methods

#### Configure
Configures the component by passing its configuration parameters. 

> (c [*DataDogMetricsClient]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Open
Opens the component.

> (c [*DataDogMetricsClient]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### SendMetrics
Sends the given metrics.

> (c [*DataDogMetricsClient]()) SendMetrics(correlationId string, metrics [[]DataDogMetric](../datadog_metric)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **metrics**: [[]DataDogMetric](../datadog_metric) - the datadog metrics
- **returns**: error - error or nil if no errors occurred.

#### SetReferences
Sets references to dependent components.

> (c [*DataDogMetricsClient]()) SetReferences(refs [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
