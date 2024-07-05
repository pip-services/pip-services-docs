
```ts
import { 
    ConfigParams, Descriptor, Factory, IConfigurable, 
    IExecutable, IOpenable, IReferenceable, IReferences, 
    IUnreferenceable, Context, Parameters 
} from "pip-services4-components-node";
import { ProcessContainer } from "pip-services4-container-node";

export async function main() {
    let runner = new MyProcess();
    try {
        runner.run(process.argv);
    } catch (err) {
        console.error(err)
    }
}

export class MyProcess extends ProcessContainer {
    public constructor() {
        super('myservice', 'My service running as a process');
        this._configPath = './config.yaml'
        this._factories.add(new MyFactory())
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();

        this.registerAsType(new Descriptor("myservice", "MyComponentA", "*", "*", "1.0"), MyComponentA);
    }
}

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
