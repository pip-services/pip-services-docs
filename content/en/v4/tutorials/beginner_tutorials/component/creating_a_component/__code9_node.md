
```ts
import { 
    IConfigurable, IReferenceable, IOpenable, Context, IUnreferenceable, IReferences, ConfigParams, Descriptor
  } from "pip-services4-components-node";
  
  class MyComponentB implements IConfigurable, IReferenceable, IOpenable, IUnreferenceable {
    private _param1: string = "ABC2";
    private _param2: number = 456;
    private _open: boolean = false;
    private _status: string;

    // Creates a new instance of the component.
    public constructor() {
        this._status = "Created";
        console.log("MyComponentB has been created.");
    }

    public configure(config: ConfigParams): void {
        // pass
    }

    public setReferences(references: IReferences): void {
        // pass
    }

    public isOpen(): boolean {
        // pass
        return true;
    }

    public open(correlationId: string): Promise<void> {
        // pass
        return;
    }

    public close(correlationId: string): Promise<void> {
        // pass
        return;
    }

    public unsetReferences(): void {
        // pass
        return;
    }
}


class MyComponentA implements IConfigurable, IReferenceable, IOpenable, IUnreferenceable {
    private _param1: string = "ABC";
    private _param2: number = 123;
    private _open: boolean = false;
    private _status: string;
    private _anotherComponent: MyComponentB;
    
    public dummyVariable: string;

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

    public close(correlationId: string): Promise<void> {
        this._open = false;
        this._status = "Closed";
        console.log("MyComponentA has been closed.");

        return;
    }

    public myTask(correlationId: string): void {
        console.log("Doing my business task");
        this.dummyVariable = "dummy value";
    }

    public setReferences(references: IReferences): void {
        this._anotherComponent = references.getOneRequired<MyComponentB>(
            new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        );

        this._status = "Configured";
        console.log("MyComponentA's references have been defined.");
    }

    public unsetReferences(): void {
        this._anotherComponent = null;
        this._status = "Un-referenced";
        console.log("References cleared");
    }

    public configure(config: ConfigParams): void {
        this._param1 = config.getAsStringWithDefault("param1", "ABC");
        this._param2 = config.getAsIntegerWithDefault("param2", 123);
        this._status = "Configured";

        console.log("MyComponentA has been configured.");
    }
}
```
