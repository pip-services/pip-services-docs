---
type: docs
title: "PrometheusCounterConverter"
linkTitle: "PrometheusCounterConverter"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-prometheus-gox"
description: >
    Helper class that converts performance counter values into
    a response from Prometheus metrics service.
---

### Description

The PrometheusCounterConverter class allows you to convert performance counter values into a response from Prometheus metrics service.

### Methods

#### ToString
Converts the given counters to a string that is returned by Prometheus metrics service.

> (c *TPrometheusCounterConverter) ToString(counters [][ccount.Counter](../../../components/count/counter), source string, instance string) string

- **counters**: [][ccount.Counter](../../../components/count/counter) - list of counters to convert.
- **source**: string - source (context) name.
- **instance**: string - unique instance name (usually a host name).
- **returns**: string - converted counter


#### AtomicCountersToCounters
Converts atomic counters to cached counters

> AtomicCountersToCounters(atomicCounters [[]*ccount.AtomicCounter](../../../components/count/atomic_counter)) [[]ccount.Counter](../../../components/count/counter)

- **atomicCounters**: [[]*ccount.AtomicCounter](../../../components/count/atomic_counter) - list with atomic counters.
- **returns**: [[]ccount.Counter](../../../components/count/counter) - converted counters.