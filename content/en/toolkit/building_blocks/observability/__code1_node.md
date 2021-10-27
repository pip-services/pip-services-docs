
```ts
import { IReferenceable, IReferences } from "pip-services3-commons-nodex";
import { CompositeLogger } from "pip-services3-components-nodex";


class MyComponent implements IReferenceable {
  private _logger: CompositeLogger = new CompositeLogger();

  public setReferences(refs: IReferences) {
    this._logger.setReferences(refs);
  }

  public doSomething(correlationId: string) {
    this._logger.debug(correlationId, "Did something...");
    ...
  }
}

```
