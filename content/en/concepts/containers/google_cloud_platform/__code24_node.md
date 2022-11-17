
```ts
import { Command, CommandSet, Descriptor, IReferences, TypeCode, Parameters, ObjectSchema, IReferenceable, ICommandable } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";
import { CloudFunction, CloudFunctionService, CommandableCloudFunctionService } from "pip-services3-gcp-nodex";

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

export class MyCommandableCloudService extends CommandableCloudFunctionService {
    public constructor() {
        super('mygroup');
        // The 'controller' dependency is required by all Commandable services
        this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'));
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
        this.registerAsType(new Descriptor("mygroup", "service", "commandable-gcp-function", "function", "1.0"), MyCommandableCloudService);
    }
}

export class MyCloudFunction extends CloudFunction {
    private _controller: MyController;
    private _service: CloudFunctionService;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
        // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        // this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'commandable-gcp-function', 'function', '*'))
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        // this._controller = this._dependencyResolver.getOneRequired('controller');
        // this._service = this._dependencyResolver.getOneRequired('service');
        // Comment out the next two lines of code when using the dependency resolver, uncomment for configuration file
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'controller', 'default', 'controller', '*'));
        this._service = references.getOneRequired(new Descriptor('mygroup', 'service', 'commandable-gcp-function', 'function', '*'));
    }
}

```