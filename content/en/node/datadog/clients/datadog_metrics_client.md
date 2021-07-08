---
type: docs
title: "DataDogMetricsClient"
linkTitle: "DataDogMetricsClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-datadog-nodex"
description: >
    REST client for DataDog metrics.


---

**Extends:** [RestClient](../../../rpc/services/rest_client)

### Description

The DataDogMetricsClient class REST client for DataDog metrics.



### Constructors
Creates an instance of this class.

> `public` constructor(config?: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters


### Instance methods

#### configure
Configures the component by passing its configuration parameters. 

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### sendMetrics
Sends the given metrics.

> `public` sendMetrics(correlationId: string, metrics: [DataDogMetric[]](../datadog_metric)): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messages**: [DataDogMetric[]](../datadog_metric) - messages

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
