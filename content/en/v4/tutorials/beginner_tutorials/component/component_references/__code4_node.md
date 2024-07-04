
```ts
import { IReferenceable, IUnreferenceable } from "pip-services4-components-node";
import { LogLevel } from "pip-services4-observability-node";

class SimpleController implements IReferenceable, IUnreferenceable {
  private _worker: any;
  
  constructor() {}

  public setReferences(references) {
      this._worker = references.getOneRequired(111)
  }
  public unsetReferences() {
      this._worker = null;
  }
  public greeting(name) {
      this._worker.do(LogLevel.Debug,  "Hello, " + (name) + "!");
  }
}
```
