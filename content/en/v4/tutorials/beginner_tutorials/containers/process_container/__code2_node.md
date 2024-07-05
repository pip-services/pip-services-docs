
```ts
import { 
    ConfigParams, IConfigurable, IOpenable, Context, IReferences, 
    Parameters, IReferenceable, IUnreferenceable, IExecutable 
} from "pip-services4-components-node";

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

    public async open(ctx: Context): Promise<void> {
        console.log("MyComponentA has been opened.");
    }

    public async close(ctx: Context): Promise<void> {
        console.log("MyComponentA has been closed.");
    }

    public async execute(ctx: Context, args: Parameters): Promise<any> {
        console.log("Executing");
        let result = args;
        return result;
    }
}
```
