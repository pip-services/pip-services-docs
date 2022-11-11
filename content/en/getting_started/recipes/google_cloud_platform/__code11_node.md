
```ts
import { Command, CommandSet, Descriptor, ICommandable, IReferenceable, IReferences, ObjectSchema, TypeCode, Parameters } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";
import { CommandableCloudFunction } from "pip-services3-gcp-nodex";

export class MyCommandSet extends CommandSet {
    private _controller: MyController;

    public constructor(controller: MyController) {
        super();
        this._controller = controller;
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): Command {
        return new Command(
            "greetings",
            new ObjectSchema(true).withRequiredProperty("name", TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let name = args.getAsString("name");
                return await this._controller.greetings(name);
            }
        );
    }
}

export class MyController implements IReferenceable, ICommandable {
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
        this.registerAsType(new Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController);
    }
}

export class MyCommandableCloudFunction extends CommandableCloudFunction {
    private _controller: MyController;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml";
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._controller = this._dependencyResolver.getOneRequired('controller');
        // Comment out the next line of code when using dependency resolver, uncomment for configuration file
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'controller', 'default', 'controller', '*'));
    }
}

```