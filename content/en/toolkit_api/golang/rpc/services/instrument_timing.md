---
type: docs
title: "InstrumentTiming"
linkTitle: "InstrumentTiming"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-rpc-gox"
description: >
    Creates logs, counters and timings for methods that call  Instrument.
---

### Description

The InstrumentTiming class allows you to create logs, countes and timings for methods that call Instrument.

### Constructors

#### NewInstrumentTiming
Creates a new instance of InstrumentTiming.

> NewInstrumentTiming(correlationId string, name string, verb string, logger [ILogger](../../../components/log/ilogger), counters [ICounters](../../../components/count/icounters), counterTiming [CounterTiming](../../../components/count/counter_timing), traceTiming [TraceTiming](../../../components/trace/trace_timing)) [*InstrumentTiming]()

- **correlationId**: string -  transaction id used to trace execution through the call chain.    
- **name**: string - name    
- **verb**: string - verb or 'call'     
- **logger**: [ILogger](../../../components/log/ilogger) - logger    
- **counters**: [ICounters](../../../components/count/icounters) - counters     
- **counterTiming**: [CounterTiming](../../../components/count/counter_timing) - counter    
- **traceTiming**: [TraceTiming](../../../components/trace/trace_timing) - time tracer    


### Methods

#### EndFailure
Manages a failed service end.

> (c [*InstrumentTiming]()) EndFailure(ctx context.Context, err error)

- **ctx**: context.Context - operation context.
- **err**: error - exception


#### EndTiming
Ends the service.

> (c [*InstrumentTiming]()) EndTiming(ctx context.Context, err error)

- **ctx**: context.Context - operation context.
- **err**: error - exception


#### EndSuccess
Manages a successful service end.

> (c [*InstrumentTiming]()) EndSuccess(ctx context.Context)

- **ctx**: context.Context - operation context.


