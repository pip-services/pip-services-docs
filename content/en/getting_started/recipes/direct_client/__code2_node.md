
```ts
// Pre-requisites
import { ConfigParams, DependencyResolver, Descriptor, IConfigurable, IReferenceable, IReferences } from "pip-services3-commons-nodex";
import { DirectClient } from "pip-services3-rpc-nodex";


// Direct client
export class MyDirectClient extends DirectClient<MyController> {
    _dependencyResolver =  new DependencyResolver();

    public constructor() {
        super();
        this._controller = null
        this._dependencyResolver.put("controller", new Descriptor("pip-services", "controller", "*", "*", "1.0"))
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired("controller");
    }
}

// Instantiation
let client = new MyDirectClient();
```
