
```ts
import { IReferenceable, IReferences, Context } from "pip-services4-components-node";
import { CompositeLogger } from "pip-services4-observability-node";

class MyComponent implements IReferenceable {
    private _logger: CompositeLogger = new CompositeLogger();

    public setReferences(refs: IReferences) {
        this._logger.setReferences(refs);
    }

    public doSomething(ctx: Context) {
        this._logger.debug(ctx, "Did something...");
        ...
    }
}
```
