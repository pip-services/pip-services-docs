---
type: docs
title: "InstrumentTiming"
linkTitle: "InstrumentTiming"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    TODO add description
---

### Constructors
TODO add description

> InstrumentTiming(correlation_id: Optional[str], name: str, verb: str, logger: [ILogger](../../../components/log/ilogger), counters: [ICounters](../../../components/count/icounters),
counter_timing: Optional[[CounterTiming](../../../components/count/counter_timing)], trace_timing: Optional[[TraceTiming](../../../components/trace/trace_timing)])

correlation_id: Optional[str] - TODO add description
name: str - TODO add description
verb: str - TODO add description
logger: [ILogger](../../../components/log/ilogger) - TODO add description
counters: [ICounters](../../../components/count/icounters) - TODO add description
counter_timing: Optional[[CounterTiming](../../../components/count/counter_timing)] - TODO add description
trace_timing: Optional[[TraceTiming](../../../components/trace/trace_timing)] - TODO add description


### Methods

#### end_failure
TODO add description

> end_failure(err: Exception)

- **err**: Exception - TODO add description


#### end_timing
TODO add description

> end_timing(err: Exception = None)

- **err**: Exception - TODO add description


#### end_success
TODO add description

> end_success()




