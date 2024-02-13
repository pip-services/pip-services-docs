---
type: docs
title: "PrometheusCounterConverter"
linkTitle: "PrometheusCounterConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-prometheus-dotnet"
description: >
    Helper class that converts performance counter values into
    a response from Prometheus metrics service.
---

### Description

The PrometheusCounterConverter class allows you to convert performance counter values into a response from Prometheus metrics service.

### Static methods

#### ToString
Converts the given counters to a string that is returned by Prometheus metrics service.

> `public static` string ToString(IEnumerable<[Counter](../../../components/count/counter)> counters, string source, string instance)

- **counters**: IEnumerable<[Counter](../../../components/count/counter)> - list of counters to convert.
- **source**: string - source (context) name.
- **instance**: string - unique instance name (usually a host name).
- **returns**: string - converted counter
