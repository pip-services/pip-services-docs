
```ts
import { IReferenceable, IReferences } from "pip-services3-commons-nodex";
import { CompositeTracer } from "pip-services3-components-nodex";


class MyComponent implements IReferenceable {
  private _tracer: CompositeTracer = new CompositeTracer();

  public setReferences(refs: IReferences) {
    this._tracer.setReferences(refs);
  }

  public doSomething(correlationId: string) {
    let timing = this._tracer.beginTrace(correlationId, "mycomponent", "do_something");
    try {
      ...
      timing.endTrace();
    } catch (ex) {
      timing.endFailure(ex);
    }
  }
}

```
