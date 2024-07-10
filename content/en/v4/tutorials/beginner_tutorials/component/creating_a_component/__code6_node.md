
```ts
import { 
  IConfigurable, IReferenceable, IOpenable, Context
} from "pip-services4-components-node";

class MyComponentB {
  // ...
}
   
  
class MyComponentA implements IConfigurable, IReferenceable, IOpenable {
  private _param1: string = "ABC";
  private _param2: number = 123;
  private _open: boolean = false;
  private _status: string;
  private _anotherComponent: MyComponentB;
  
  public dummyVariable: string;

  // ...

  public close(ctx: Context): Promise<void> {
    return new Promise<void>((resolve) => {  
      this._open = false;
      this._status = "Closed";
      console.log("MyComponentA has been closed.");

      resolve();
    });
  }
}
```
