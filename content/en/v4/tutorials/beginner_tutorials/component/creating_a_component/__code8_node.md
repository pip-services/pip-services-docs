
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

}


try {
    var component = new MyComponentA();
    // ...

    await component.close(null);
} finally {
    console.log("Component destroyed");
}
```
