
```ts
import { 
    IConfigurable, IReferenceable, IOpenable, Context, IUnreferenceable
  } from "pip-services4-components-node";
  
  class MyComponentB {
    // ...
}
       
    
class MyComponentA implements IConfigurable, IReferenceable, IOpenable, IUnreferenceable {
    private _param1: string = "ABC";
    private _param2: number = 123;
    private _open: boolean = false;
    private _status: string;
    private _anotherComponent: MyComponentB;
    
    public dummyVariable: string;

    // ...

    public unsetReferences(): void {
        this._anotherComponent = null;
        this._status = "Un-referenced";
        console.log("References cleared");
    }
}
```
