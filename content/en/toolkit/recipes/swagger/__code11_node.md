
```ts
import { 
    Command, CommandSet, ConfigParams, 
    Descriptor, ICommand, IReferences, 
    ObjectSchema, TypeCode, Parameters, ICommandable, IConfigurable

} from 'pip-services3-commons-nodex';

import { CommandableHttpService, DefaultRpcFactory, RestService } from 'pip-services3-rpc-nodex';

import { DefaultSwaggerFactory } from 'pip-services3-swagger-nodex';
import { ProcessContainer } from 'pip-services3-container-nodex';
import { Factory } from 'pip-services3-components-nodex';


export async function main() {
    try {
        let proc = new HelloFriendProcess();
        proc.run(process.argv);
    } catch (ex) {
        console.error(ex);
    }
}

class HelloFriendRestService extends RestService {
    private _controller: HelloFriendController;

    // swagger
    private _swaggerContent: string;
    private _swaggerPath: string;

    public constructor() {
        super();
        this._baseRoute = "/hello_friend";

        let controllerDescriptor = new Descriptor("hello-friend", "controller", "*", "*", "1.0");
        this._dependencyResolver.put("controller", controllerDescriptor);
    }

    public configure(config: ConfigParams): void {
        super.configure(config);

        // swagger
        this._swaggerContent = config.getAsNullableString("swagger.content");
        this._swaggerPath = config.getAsNullableString("swagger.path");
    }

    public setReferences(references: IReferences) {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired<HelloFriendController>("controller");
    }

    public register(): void {
        this.registerRoute("GET", "/greeting", null, this.greeting);

        // swagger
        if (this._swaggerContent != null)
            this.registerOpenApiSpec(this._swaggerContent);

        if (this._swaggerPath != null)
            this.registerOpenApiSpecFromFile(this._swaggerPath);
    }

    public async greeting(req: any, res: any): Promise<void> {
        let name = req.query.name;
        let result = this._controller.greeting(name);

        this.sendResult(req, res, result);
    }
}

class FriendsCommandSet extends CommandSet {
    private _controller: HelloFriendController;

    public constructor(controller: HelloFriendController) {
        super();

        this._controller = controller;

        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): ICommand {
        return new Command('greeeting', 
            new ObjectSchema(true).withRequiredProperty('name', TypeCode.String), 
            async (correlationId: string, args: Parameters) =>
            {
                let name = args.getAsString("name");
                let res = this._controller.greeting(name);
                return res;
            }
        );
    }
}

class FriendCommandableHttpService1 extends CommandableHttpService {
    private _swaggerPath: string;

    public constructor() {
        super("commandable_hello_friend1");
        this._dependencyResolver.put('controller', new Descriptor("hello-friend", "controller", "*", "*", "*"));
    }

    public configure(config: ConfigParams): void {
        super.configure(config);

        // Swagger
        this._swaggerPath = config.getAsNullableString("swagger.path");
    }

    public register(): void {
        super.register();

        if (this._swaggerPath != null)
            this.registerOpenApiSpecFromFile(this._swaggerPath);
    }
}


class FriendCommandableHttpService2 extends CommandableHttpService {
    private _swaggerPath: string;

    public constructor() {
        super("commandable_hello_friend2");
        this._dependencyResolver.put('controller', new Descriptor("hello-friend", "controller", "*", "*", "*"));
    }

    public configure(config: ConfigParams): void {
        super.configure(config);

        // Swagger
        this._swaggerPath = config.getAsNullableString("swagger.path");
    }

    public register(): void {
        super.register();

        if (this._swaggerPath != null)
            this.registerOpenApiSpecFromFile(this._swaggerPath);
    }
}

class HelloFriendController implements IConfigurable, ICommandable {
    private defaultName: string;
    private commandSet: FriendsCommandSet;

    public constructor() {
        this.defaultName = "Pip User";
    }
    
    public configure(config: ConfigParams): void {
        this.defaultName = config.getAsStringWithDefault("default_name", this.defaultName);
    }

    public getCommandSet(): CommandSet {
        if (this.commandSet == null)
            this.commandSet = new FriendsCommandSet(this);

        return this.commandSet;
    }

    public greeting(name: string): string {
        return "Hello " + name ?? this.defaultName + " !"; 
    }
}


class HelloFriendServiceFactory extends Factory {
    public constructor()
    {
        super();
        
        let HttpServiceDescriptor = new Descriptor("hello-friend", "service", "http", "*", "1.0");                          // View 1
        let CommandableHttpServiceDescriptor1 = new Descriptor("hello-friend", "service", "commandable-http1", "*", "1.0"); // View 2
        let CommandableHttpServiceDescriptor2 = new Descriptor("hello-friend", "service", "commandable-http2", "*", "1.0"); // View 2
        let ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0");                     // Controller

        this.registerAsType(HttpServiceDescriptor, HelloFriendRestService);                      // View 1
        this.registerAsType(CommandableHttpServiceDescriptor1, FriendCommandableHttpService1);   // View 2
        this.registerAsType(CommandableHttpServiceDescriptor2, FriendCommandableHttpService2);   // View 3
        this.registerAsType(ControllerDescriptor, HelloFriendController);                        // Controller
    }
}

class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");

        this._configPath = "./config.yml";
        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultRpcFactory());
        this._factories.add(new DefaultSwaggerFactory());
    }
}

```
