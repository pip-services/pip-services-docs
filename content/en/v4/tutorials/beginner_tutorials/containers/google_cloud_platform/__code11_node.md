
```ts
import { CommandableCloudFunction } from "pip-services4-gcp-node";
import { TypeCode } from "pip-services4-commons-node";
import { ObjectSchema } from "pip-services4-data-node";
import { Descriptor, Factory, IReferenceable, IReferences, Context } from "pip-services4-components-node";
import { CommandSet, Command, ICommandable } from "pip-services4-rpc-node";

export class MyCommandSet extends CommandSet {
    private _service: MyServcie;

    public constructor(service: MyServcie) {
        super();
        this._service = service;
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): Command {
        return new Command(
            "greetings",
            new ObjectSchema(true).withRequiredProperty("name", TypeCode.String),
            async (ctx: Context, args: Parameters) => {
                let name = args.getAsString("name");
                return await this._service.greetings(name);
            }
        );
    }
}

export class MyServcie implements IReferenceable, ICommandable {
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
        this.registerAsType(new Descriptor("mygroup", "service", "default", "service", "1.0"), MyServcie);
    }
}

export class MyCommandableCloudFunction extends CommandableCloudFunction {
    private _service: MyServcie;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml";
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'default', 'service', '*'))
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._service = this._dependencyResolver.getOneRequired('service');
        // Comment out the next line of code when using dependency resolver, uncomment for configuration file
        this._service = references.getOneRequired(new Descriptor('mygroup', 'service', 'default', 'service', '*'));
    }
}
```
