---
type: docs
title: "DataDogMetricsClient"
linkTitle: "DataDogMetricsClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-datadog-python"
description: >
    REST client for DataDog metrics.


---

**Implements:** [RestClient](../../../rpc/clients/rest_client)

### Description

The DataDogMetricsClient class allows you to create a REST client for DataDog metrics.



### Constructors
Creates an instance of this class.

> DataDogMetricsClient(config: [ConfigParams](../../../commons/config/config_params) = None)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters


### Instance methods

#### configure
Configures the component by passing its configuration parameters. 

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### sendMetrics
Sends the given metrics.

> sendMetrics(correlation_id: Optional[str], metrics: [DataDogMetric[]](../datadog_metric))

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **messages**: List[[DataDogMetric](../datadog_metric)] - messages

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
