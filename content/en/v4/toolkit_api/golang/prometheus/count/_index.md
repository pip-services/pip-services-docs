---
type: docs
title: "Count"
linkTitle: "Count"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-prometheus-go"
description: >
    This package contains classes used to create Prometheus counters.
---
---
<div class="module-body"> 

### Classes

#### [PrometheusCounterConverter](prometheus_counter_converter)
Helper class that converts performance counter values into
a response from Prometheus metrics service.

#### [PrometheusCounters](prometheus_counters)
Performance counters that send their metrics to Prometheus service.
The component is normally used in passive mode in conjunction with [PrometheusMetricsController](../controllers/prometheus_metrics_controller).
Alternatively when connection parameters are set, it can push metrics to Prometheus PushGateway.


</div>


