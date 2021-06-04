---
type: docs
title: "InstrumentTiming"
linkTitle: "InstrumentTiming"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Creates logs, counters and timings for methods that call  _instrument.
---

### Description

The InstrumentTiming class allows you to create logs, countes and timings for methods that call _instrument.

### Constructors
Creates a new instance of InstrumentTiming.

> InstrumentTiming(correlation_id: Optional[str], name: str, verb: str, logger: [ILogger](../../../components/log/ilogger), counters: [ICounters](../../../components/count/icounters),
counter_timing: Optional[[CounterTiming](../../../components/count/counter_timing)], trace_timing: Optional[[TraceTiming](../../../components/trace/trace_timing)])

correlation_id: Optional[str] -  transaction id used to trace execution through the call chain    
name: str - name    
verb: str - verb or 'call'     
logger: [ILogger](../../../components/log/ilogger) - logger    
counters: [ICounters](../../../components/count/icounters) - counters     
counter_timing: Optional[[CounterTiming](../../../components/count/counter_timing)] - counter    
trace_timing: Optional[[TraceTiming](../../../components/trace/trace_timing)] - time tracer    


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




