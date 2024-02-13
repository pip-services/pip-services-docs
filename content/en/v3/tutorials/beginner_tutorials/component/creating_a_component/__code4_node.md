
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

    // Creates a new instance of the component.
    public constructor(){
        this._status = "Created";
        console.log("MyComponentA has been created.");
    }

    public isOpen(): boolean {
        return this._open;
    }

    public open(correlationId: string): Promise<void> {
        this._open = true;
        this._status = "Open";
        console.log("MyComponentA has been opened.");

        return;
    }

    public setReferences(references: IReferences): void {
        this._anotherComponent = references.getOneRequired<MyComponentB>(
            new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        );

        this._status = "Configured";
        console.log("MyComponentA's references have been defined.");
    }

    public configure(config: ConfigParams): void {
        this._param1 = config.getAsStringWithDefault("param1", "ABC");
        this._param2 = config.getAsIntegerWithDefault("param2", 123);
        this._status = "Configured";

        console.log("MyComponentA has been configured.");
    }
}

```

