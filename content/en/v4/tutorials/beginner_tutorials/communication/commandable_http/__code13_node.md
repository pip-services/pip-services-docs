
```ts
import { TypeCode } from "pip-services4-commons-node";
import { Parameters, IContext, Descriptor, IConfigurable, ConfigParams, Factory } from "pip-services4-components-node";
import { Command, CommandSet, ICommand } from "pip-services4-rpc-node";
import { ObjectSchema } from "pip-services4-data-node";
import { CommandableHttpController, DefaultHttpFactory } from "pip-services4-http-node";
import { ProcessContainer } from "pip-services4-container-node";
import { DefaultSwaggerFactory } from "pip-services4-swagger-node";


const restify = require('restify-clients');

export async function main() { 
    // Runner
    try {
        let proc = new HelloFriendProcess();
        proc.run(process.argv);
    } catch (ex) {
        console.error(ex);
    }
}

// Command set
export class FriendsCommandSet extends CommandSet {
    private _service: HelloFriendService;

    public constructor(controller: HelloFriendService) {
        super();
        this._service = controller;
        
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): ICommand {
        return new Command(
            'greeting',
            new ObjectSchema(true).withRequiredProperty('name', TypeCode.String),
            async (ctx: IContext, args: Parameters) => {
                let name = args.getAsString("name");
                let res = this._service.greeting(name);
                return res;
            }
        );
    }
}

// Controller
export class FriendCommandableHttpController extends CommandableHttpController {
    public constructor() {
        super("commandable_hello_friend");

        this._dependencyResolver.put('service', new Descriptor("hello-friend", "service", "*", "*", "*"));
    }
}

// Service
export class HelloFriendService implements IConfigurable, ICommand {

    private _defaultName: string = "World";
    private _commandSet: FriendsCommandSet;

    public constructor() {
        this._defaultName = "Pip User";
    }
    
    public configure(config: ConfigParams): void {
        this._defaultName = config.getAsStringWithDefault('default_name', this._defaultName);
    }
    
    public getCommandSet(): CommandSet {
        if (this._commandSet == null) {
            this._commandSet = new FriendsCommandSet(this);
        }

        return this._commandSet;
    }

    public greeting(name: string): string {
        return `Hello, ${name ?? this._defaultName}`;
    }
}

// Factory
export class HelloFriendServiceFactory extends Factory {
    public constructor() {
        super();
        var CommandableHttpControllerDescriptor = new Descriptor("hello-friend", "controller", "commandable-http", "*", "1.0"); // View 
        var ServiceDescriptor = new Descriptor("hello-friend", "service", "default", "*", "1.0"); // Controller

        this.registerAsType(CommandableHttpControllerDescriptor, FriendCommandableHttpController);
        this.registerAsType(ServiceDescriptor, HelloFriendService);
    }
}

// Container
export class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");

        this._configPath = "./config.yaml";

        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultHttpFactory());
        this._factories.add(new DefaultSwaggerFactory());
    }
}

```
