
```ts
import { DependencyResolver, Descriptor, IReferences } from "pip-services4-components-node";
import { DirectClient } from "pip-services4-rpc-node";

// Direct client
export class MyDirectClient extends DirectClient<MyServcie> {
    _dependencyResolver =  new DependencyResolver();

    public constructor() {
        super();
        this._service = null
        this._dependencyResolver.put("service", new Descriptor("pip-services", "service", "*", "*", "1.0"))
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._service = this._dependencyResolver.getOneRequired("service");
    }
}

// Instantiation
let client = new MyDirectClient();
```
