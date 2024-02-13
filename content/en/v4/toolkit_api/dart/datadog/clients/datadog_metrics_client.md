---
type: docs
title: "DataDogMetricsClient"
linkTitle: "DataDogMetricsClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-datadog-dart"
description: >
    REST client for DataDog metrics.


---

**Extends:** [RestClient](../../../http/clients/rest_client)

### Description

The DataDogMetricsClient class allows you to create a REST client for DataDog metrics.



### Constructors
Creates an instance of this class.

> DataDogMetricsClient([ConfigParams](../../../components/config/config_params)? config) : super() 

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters


### Instance methods

#### configure
Configures the component by passing its configuration parameters. 

> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### open
Opens the component.

> Future open([IContext](../../../components/context/icontext)? context) async 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### sendMetrics
Sends the given metrics.

> Future sendMetrics([IContext](../../../components/context/icontext)? context, List<DataDogMetric> metrics) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messages**: [DataDogMetric[]](../datadog_metric) - messages

#### setReferences
Sets references to dependent components.

> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

