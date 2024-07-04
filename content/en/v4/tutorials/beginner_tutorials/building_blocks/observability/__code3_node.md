```ts
import { IReferenceable, IReferences, Context } from "pip-services4-components-node";
import { CompositeTracer } from "pip-services4-observability-node";

class MyComponent implements IReferenceable {
    private _tracer: CompositeTracer = new CompositeTracer();
  
    public setReferences(refs: IReferences) {
      this._tracer.setReferences(refs);
    }
  
    public doSomething(ctx: Context) {
      let timing = this._tracer.beginTrace(ctx, "mycomponent", "do_something");
      try {
        ...
        timing.endTrace();
      } catch (ex) {
        timing.endFailure(ex);
      }
    }
  }
```
