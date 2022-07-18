---
type: docs
title: "PrometheusCounterConverter"
linkTitle: "PrometheusCounterConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-prometheus-go"
description: >
    Helper class that converts performance counter values into
    a response from Prometheus metrics service.
---

### Description

The PrometheusCounterConverter class allows you to convert performance counter values into a response from Prometheus metrics service.

### Methods

#### ToString
Converts the given counters to a string that is returned by Prometheus metrics service.

> (c *TPrometheusCounterConverter) ToString(counters [][*ccount.Counter](../../../components/count/counter), source string, instance string) string

- **counters**: [][*ccount.Counter](../../../components/count/counter) - list of counters to convert.
- **source**: string - source (context) name.
- **instance**: string - unique instance name (usually a host name).
- **returns**: string - converted counter
