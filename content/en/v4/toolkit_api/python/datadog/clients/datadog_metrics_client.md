---
type: docs
title: "DataDogMetricsClient"
linkTitle: "DataDogMetricsClient"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-datadog-python"
description: >
    REST client for DataDog metrics.


---

**Implements:** [RestClient](../../../http/clients/rest_client)

### Description

The DataDogMetricsClient class allows you to create a REST client for DataDog metrics.



### Constructors
Creates an instance of this class.

> DataDogMetricsClient(config: [ConfigParams](../../../components/config/config_params) = None)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters


### Instance methods

#### configure
Configures the component by passing its configuration parameters. 

> configure(config: [](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### sendMetrics
Sends the given metrics.

> sendMetrics(context: Optional[IContext], metrics: [DataDogMetric[]](../datadog_metric))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messages**: List[[DataDogMetric](../datadog_metric)] - messages

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferencescommons/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.
