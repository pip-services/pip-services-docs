---
type: docs
title: "PrometheusCounterConverter"
linkTitle: "PrometheusCounterConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-prometheus-python"
description: >
    Helper class that converts performance counter values into
    a response from Prometheus metrics service.
---

### Description

The PrometheusCounterConverter class allows you to convert performance counter values into a response from Prometheus metrics service.

### Static methods

#### to_string
Converts the given counters to a string that is returned by Prometheus metrics service.

> `static` to_string(counters: List[[Counter](../../../components/count/counter)], source: Optional[str], instance: Optional[str]): str

- **counters**: List[[Counter](../../../components/count/counter)] - list of counters to convert.
- **source**: Optional[str] - source (context) name.
- **instance**: Optional[str] - unique instance name (usually a host name).
- **returns**: str - converted counter
