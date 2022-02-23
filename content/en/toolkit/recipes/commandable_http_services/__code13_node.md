

```ts
import { 
    Command, CommandSet, ConfigParams, Descriptor, ICommand, 
    ICommandable, 
    IConfigurable, 
    ObjectSchema, Parameters, TypeCode 
} from "pip-services3-commons-nodex";

import { Factory } from "pip-services3-components-nodex";
import { ProcessContainer } from "pip-services3-container-nodex";
import { CommandableHttpService, DefaultRpcFactory } from "pip-services3-rpc-nodex";
import { DefaultSwaggerFactory } from "pip-services3-swagger-nodex";


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
    private _controller: HelloFriendController;

    public constructor(controller: HelloFriendController) {
        super();
        this._controller = controller;
        
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): ICommand {
        return new Command(
            'greeting',
            new ObjectSchema(true).withRequiredProperty('name', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let name = args.getAsString("name");
                let res = this._controller.greeting(name);
                return res;
            }
        );
    }
}

// Service
export class FriendCommandableHttpService extends CommandableHttpService {
    public constructor() {
        super("commandable_hello_friend");

        this._dependencyResolver.put('controller', new Descriptor("hello-friend", "controller", "*", "*", "*"));
    }
}

// Controller
export class HelloFriendController implements IConfigurable, ICommandable {

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
        var CommandableHttpServiceDescriptor = new Descriptor("hello-friend", "service", "commandable-http", "*", "1.0"); // View 
        var ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0"); // Controller

        this.registerAsType(CommandableHttpServiceDescriptor, FriendCommandableHttpService);
        this.registerAsType(ControllerDescriptor, HelloFriendController);
    }
}

// Container
export class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");

        this._configPath = "./config.yaml";

        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultRpcFactory());
        this._factories.add(new DefaultSwaggerFactory());
    }
}
```
