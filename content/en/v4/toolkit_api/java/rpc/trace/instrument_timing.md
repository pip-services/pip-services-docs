---
type: docs
title: "InstrumentTiming"
linkTitle: "InstrumentTiming"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-rpc-java"
description: >
    Creates logs, counters and timings for methods that call  instrument.
---

### Description

The InstrumentTiming class allows you to create logs, countes and timings for methods that call instrument.

### Constructors
Creates a new instance of InstrumentTiming.

> `public` constructor(context: [IContext](../../../components/context/icontext), name: string, verb: string, logger: [ILogger](../../../observability/log/ilogger), counters: [ICounters](../../../observability/count/icounters),
counterTiming: [CounterTiming](../../../observability/count/counter_timing), traceTiming: [TraceTiming](../../../observability/trace/trace_timing))

- **context**: [IContext](../../../components/context/icontext) -  a context to trace execution through a call chain.    
- **name**: string - name    
- **verb**: string - verb or 'call'     
- **logger**: [ILogger](../../../observability/log/ilogger) - logger    
- **counters**: [ICounters](../../../observability/count/icounters) - counters     
- **counterTiming**: [CounterTiming](../../../observability/count/counter_timing) - counter    
- **traceTiming**: [TraceTiming](../../../observability/trace/trace_timing) - time tracer    


### Instance methods

#### endFailure
Manages a failed service end.

> void endFailure(Exception err)

- **err**: Exception - exception


#### endTiming
Ends the service.

> void endTiming(Exception err)

- **err**: Exception - exception


#### endSuccess
Manages a successful service end.

> void endSuccess()




