---
type: docs
title: "InstrumentTiming"
linkTitle: "InstrumentTiming"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Creates logs, counters and timings for methods that call  instrument.
---

### Description

The InstrumentTiming class allows you to create logs, countes and timings for methods that call instrument.

### Constructors
Creates a new instance of InstrumentTiming.

> InstrumentTiming(String? correlationId, String name, String? verb, [ILogger?](../../../observability/log/ilogger) logger, [ICounters?](../../../observability/count/icounters) counters, [CounterTiming?](../../../observability/count/counter_timing) counterTiming, [TraceTiming?](../../../observability/trace/trace_timing) traceTiming)

- **correlationId**: String? -  transaction id used to trace execution through the call chain.    
- **name**: String - name    
- **verb**: String? - verb or 'call'     
- **logger**: [ILogger?](../../../observability/log/ilogger) - logger    
- **counters**: [ICounters?](../../../observability/count/icounters) - counters     
- **counterTiming**: [CounterTiming?](../../../observability/count/counter_timing) - counter    
- **traceTiming**: [TraceTiming?](../../../observability/trace/trace_timing) - time tracer    


### Instance methods

#### endFailure
Manages a failed service end.

> evoid endFailure([Exception? err])

- **err**: Exception? - exception


#### endTiming
Ends the service.

> void endTiming([Exception? err])

- **err**: Exception? - exception


#### endSuccess
Manages a successful service end.

> void endSuccess()




