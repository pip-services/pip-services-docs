```ts
import { IReferenceable, IReferences, Context } from "pip-services4-components-node";
import { CompositeCounters } from "pip-services4-observability-node";
import { MessageEnvelope } from "pip-services4-messaging-node"

class MyComponent implements IReferenceable {
    private _counters: CompositeCounters = new CompositeCounters();
  
    public setReferences(refs: IReferences) {
      this._counters.setReferences(refs);
    }
  
    public onMessage(message: MessageEnvelope) {
      let timing = this._counters.beginTiming("mycomponent:msg_time");
      try {
        this._counters.increment("mycomponent:msg_count", 1);
        ...
      } catch (ex) {
        this._counters.increment("mycomponent:msg_errors", 1);
      } finally {
        timing.endTiming();
      }
    }
  }
```
