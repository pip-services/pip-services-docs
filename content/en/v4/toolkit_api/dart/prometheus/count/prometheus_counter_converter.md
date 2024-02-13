---
type: docs
title: "PrometheusCounterConverter"
linkTitle: "PrometheusCounterConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-prometheus-dart"
description: >
    Helper class that converts performance counter values into
    a response from Prometheus metrics controller.
---

### Description

The PrometheusCounterConverter class allows you to convert performance counter values into a response from Prometheus metrics controller.

### Static methods

#### toString2
Converts the given counters to a string that is returned by Prometheus metrics controller.

> `static` String toString2(List<[Counter](../../../observability/count/counter)>? counters, String? source, String? instance)

- **counters**: List<[Counter](../../../observability/count/counter)>? - list of counters to convert.
- **source**: String? - source (context) name.
- **instance**: String? - unique instance name (usually a host name).
- **returns**: String - converted counter

