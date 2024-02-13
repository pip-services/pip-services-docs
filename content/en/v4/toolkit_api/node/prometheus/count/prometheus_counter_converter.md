---
type: docs
title: "PrometheusCounterConverter"
linkTitle: "PrometheusCounterConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-prometheus-node"
description: >
    Helper class that converts performance counter values into
    a response from Prometheus metrics service.
---

### Description

The PrometheusCounterConverter class allows you to convert performance counter values into a response from Prometheus metrics service.

### Static methods

#### toString
Converts the given counters to a string that is returned by Prometheus metrics service.

> `public static` toString(counters: [Counter](../../../observability/count/counter)[], source: string, instance: string): string

- **counters**: [Counter](../../../observability/count/counter)[] - list of counters to convert.
- **source**: string - source (context) name.
- **instance**: string - unique instance name (usually a host name).
- **returns**: string - converted counter
