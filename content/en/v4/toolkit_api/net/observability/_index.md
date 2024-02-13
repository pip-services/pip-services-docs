---
type: docs
title: "Observability module"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
no_list: true
weight: 30
description: > 
 
    The Observability module contains observability component definitions that can be used to build applications and services.

---


### Packages

The module contains the following packages:

- [**Build**](build) - factory for observability components
- [**Count**](count) - performance counters
- [**Log**](log) - basic logging components that provide console and composite logging, as well as an interface for developing custom loggers
- [**Trace**](trace) - tracing components



### Use

Install the NPM package as
```bash
npm install pip-services4-observability-node --save
```

Example how to use Logging and Performance counters.
Here we are going to use CompositeLogger and CompositeCounters components.
They will pass through calls to loggers and counters that are set in references.

```typescript
import { ConfigParams } from 'pip-services4-components-node'; 
import { IConfigurable } from 'pip-services4-components-node'; 
import { IReferences } from 'pip-services4-components-node'; 
import { IReferenceable } from 'pip-services4-components-node'; 
import { CompositeLogger } from 'pip-services4-observability-node'; 
import { CompositeCounters } from 'pip-services4-observability-node'; 

export class MyComponent implements IConfigurable, IReferenceable {
  private _logger: CompositeLogger = new CompositeLogger();
  private _counters: CompositeCounters = new CompositeCounters();
  
  public configure(config: ConfigParams): void {
    this._logger.configure(config);
  }
  
  public setReferences(refs: IReferences): void {
    this._logger.setReferences(refs);
    this._counters.setReferences(refs);
  }
  
  public async myMethod(context: IContext, param1: any): Promise<void> {
    this._logger.trace(context, "Executed method mycomponent.mymethod");
    this._counters.increment("mycomponent.mymethod.exec_count", 1);
    let timing = this._counters.beginTiming("mycomponent.mymethod.exec_time");
    try {
      ....
    } finally {
      timing.endTiming();
    } catch (err) {
      if (err) {
        this._logger.error(context, err, "Failed to execute mycomponent.mymethod");
        this._counters.increment("mycomponent.mymethod.error_count", 1);
      }
    }
    ...
  }
}
```
