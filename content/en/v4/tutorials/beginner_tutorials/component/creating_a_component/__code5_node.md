
```ts
import { 
  IConfigurable, IReferenceable, IOpenable
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

  public myTask(correlationId: string): void {
      console.log("Doing my business task");
      this.dummyVariable = "dummy value";
  }
}
```
