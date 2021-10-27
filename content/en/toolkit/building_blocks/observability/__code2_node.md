
```ts
# Log counters
descriptor: “pip-services:counters:log:default:1.0”

# Prometheus counters
descriptor: “pip-services:counters:prometheus:default:1.0”

# Metrics service used by prometheus to collect metrics
descriptor: “pip-services:metrics-service:prometheus:default:1.0”

class MyComponent implements IReferenceable {
  private _counters: CompositeCounters = new CompositeCounters();

  public setReferences(refs: IReferences) {
    this._counters.setReferences(refs);
  }

  public onMessage(message: MessageEnvelope) {
    let timing = this._counters.beginTiming(“mycomponent:msg_time”);
    try {
      this._counters.increment(“mycomponent:msg_count”);
      ...
    } catch (ex) {
      this._counters.increment(“mycomponent:msg_errors”);
    } finally {
      timing.endTiming();
    }
  }
}


```
