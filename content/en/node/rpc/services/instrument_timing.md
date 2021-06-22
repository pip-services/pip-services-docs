---
type: docs
title: "InstrumentTiming"
linkTitle: "InstrumentTiming"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    Creates logs, counters and timings for methods that call  _instrument.
---

### Description

The InstrumentTiming class allows you to create logs, countes and timings for methods that call _instrument.

### Constructors
Creates a new instance of InstrumentTiming.

> `public` constructor((correlationId: string, name: string, verb: string, logger: [ILogger](../../../components/log/ilogger), counters: [ICounters](../../../components/count/icounters),
counterTiming: [CounterTiming](../../../components/count/counter_timing), traceTiming: [TraceTiming](../../../components/trace/trace_timing))

- **correlationId**: string -  transaction id used to trace execution through the call chain.    
- **name**: string - name    
- **verb**: string - verb or 'call'     
- **logger**: [ILogger](../../../components/log/ilogger) - logger    
- **counters**: [ICounters](../../../components/count/icounters) - counters     
- **counterTiming**: [CounterTiming](../../../components/count/counter_timing) - counter    
- **traceTiming**: [TraceTiming](../../../components/trace/trace_timing) - time tracer    


### Instance methods

#### endFailure
Manages a failed service end.

> endFailure(err: Error): void

- **err**: Error - exception


#### endTiming
Ends the service.

> endTiming(err?: Error): void

- **err**: Error - exception


#### endSuccess
Manages a successful service end.

> endSuccess(): void




