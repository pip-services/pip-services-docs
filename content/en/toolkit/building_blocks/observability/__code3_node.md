
```ts
# Log tracer
descriptor: “pip-services:tracer:log:default:1.0”

# DataDog traces
descriptor: “pip-services:tracer:datadog:default:1.0”
connection:
  api_key: {{DATADOG_API_KEY}}

class MyComponent implements IReferenceable {
  private _tracer: CompositeTracer = new CompositeTracer();

  public setReferences(refs: IReferences) {
    this._counters.setReferences(refs);
  }

  public doSomething(correlationId: string) {
    let timing = this._tracer.beginTrace(correlationId, “mycomponent”, “do_something”);
    try {
      ...
      timing.endTiming();
    } catch (ex) {
      timing.endFailure(ex);
    }
  }
}

```
