
```python
import { CommandableCloudFunctionController, CloudFunction } from "pip-services4-gcp-node";
import { TypeCode } from "pip-services4-commons-node";
import { ObjectSchema } from "pip-services4-data-node";
import { Descriptor, Factory, IReferenceable, IReferences, Context } from "pip-services4-components-node";
import { CommandSet, Command, ICommandable } from "pip-services4-rpc-node";

export class MyCommandSet extends CommandSet {
    private _servcie: MyService;

    public constructor(controller: MyService) {
        super();
        this._servcie = controller;
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): Command {
        return new Command(
            "greetings",
            new ObjectSchema(true).withRequiredProperty("name", TypeCode.String),
            async (ctx: Context, args: Parameters) => {
                let name = args.getAsString("name");
                return await this._servcie.greetings(name);
            }
        );
    }
}

export class MyCommandableCloudController extends CommandableCloudFunctionController {
    public constructor() {
        super('mygroup');
        this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'default', 'service', '1.0'));
    }
}


export class MyService implements IReferenceable, ICommandable {
    private commandSet: CommandSet;

    public setReferences(references: IReferences): void {
    }

    public getCommandSet(): CommandSet {
        if (this.commandSet == null) {
            this.commandSet = new MyCommandSet(this);
        }

        return this.commandSet;
    }

    public async greetings(name: string): Promise<string> {
        return "Hello, " + name + " !";
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "service", "default", "service", "1.0"), MyService);
        this.registerAsType(new Descriptor("mygroup", "controller", "commandable-gcp-function", "function", "1.0"), MyCommandableCloudController);
    }
}

export class MyCloudFunction extends CloudFunction {
    private _controller: MyCommandableCloudController;
    private _service: MyService;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
        // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'default', 'service', '*'))
        // this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'commandable-gcp-function', 'function', '*'))
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        // this._controller = this._dependencyResolver.getOneRequired('controller');
        // this._service = this._dependencyResolver.getOneRequired('service');
        // Comment out the next two lines of code when using the dependency resolver, uncomment for configuration file
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'service', 'default', 'service', '*'));
        this._service = references.getOneRequired(new Descriptor('mygroup', 'controller', 'commandable-gcp-function', 'function', '*'));
    }
}
```
