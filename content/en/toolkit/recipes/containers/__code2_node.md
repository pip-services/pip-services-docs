
```ts
import { 
    ConfigParams, IConfigurable, IExecutable, 
    IOpenable, IReferenceable, IReferences, 
    IUnreferenceable, Parameters 
} from "pip-services3-commons-nodex";


export class MyComponentA implements IReferenceable, IUnreferenceable, IConfigurable, IOpenable, IExecutable {

    private _open = false;

    public constructor() {
        console.log("MyComponentA has been created.");
    }

    public configure(config: ConfigParams): void {
        console.log("MyComponentA has been configured.");
    }

    public setReferences(references: IReferences): void {
        console.log("MyComponentA's references have been defined.");
    }

    public unsetReferences(): void {
        console.log("References cleared");
    }

    public isOpen(): boolean {
        return this._open;
    }

    public async open(correlationId: string): Promise<void> {
        console.log("MyComponentA has been opened.");
    }

    public async close(correlationId: string): Promise<void> {
        console.log("MyComponentA has been closed.");
    }

    public async execute(correlationId: string, args: Parameters): Promise<any> {
        console.log("Executing");
        let result = args;
        return result;
    }
}
```
