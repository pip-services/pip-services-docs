
```ts
import { 
    ConfigParams, Descriptor, IConfigurable, 
    IOpenable, IReferenceable, IReferences 
} from "pip-services3-commons-nodex";

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

    public close(correlationId: string): Promise<void> {
        this._open = false;
        this._status = "Closed";
        console.log("MyComponentA has been closed.");

        return;
    }
}

```

