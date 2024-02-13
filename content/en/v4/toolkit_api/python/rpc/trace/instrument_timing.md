---
type: docs
title: "InstrumentTiming"
linkTitle: "InstrumentTiming"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-rpc-python"
description: >
    Creates logs, counters and timings for methods that call  _instrument.
---

### Description

The InstrumentTiming class allows you to create logs, countes and timings for methods that call _instrument.

### Constructors
Creates a new instance of InstrumentTiming.

> InstrumentTiming(context: Optional[[IContext](../../../components/context/icontext)], name: str, verb: str, logger: [ILogger](../../../observability/log/ilogger), counters: [ICounters](../../../observability/count/icounters),
counter_timing: Optional[[CounterTiming](../../../observability/count/counter_timing)], trace_timing: Optional[[TraceTiming](../../../observability/trace/trace_timing)])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.    
- **name**: str - name    
- **verb**: str - verb or 'call'     
- **logger**: [ILogger](../../../observability/log/ilogger) - logger    
- **counters**: [ICounters](../../../observability/count/icounters) - counters     
- **counter_timing**: Optional[[CounterTiming](../../../observability/count/counter_timing)] - counter    
- **trace_timing**: Optional[[TraceTiming](../../../observability/trace/trace_timing)] - time tracer    


### Instance methods

#### end_failure
Manages a failed service end.

> end_failure(err: Exception)

- **err**: Exception - exception


#### end_timing
Ends the service.

> end_timing(err: Exception = None)

- **err**: Exception - TODO add description


#### end_success
Manages a successful service end.

> end_success()




