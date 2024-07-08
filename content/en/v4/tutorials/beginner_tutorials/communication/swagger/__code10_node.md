
```ts
import { ProcessContainer } from "pip-services4-container-node";
import { DefaultSwaggerFactory } from "pip-services4-swagger-node";
import { CommandableHttpController, DefaultHttpFactory, RestController } from "pip-services4-http-node";
import { 
    ConfigParams, Descriptor, Factory, IConfigurable, 
    IReferences, IContext, Parameters 
} from "pip-services4-components-node";
import { CommandSet, ICommand, Command } from "pip-services4-rpc-node";
import { ObjectSchema } from "pip-services4-data-node";
import { TypeCode } from "pip-services4-commons-node";


export async function main() {
    // Runner
    try {
        let proc = new HelloFriendProcess();
        proc.run(process.argv);
    } catch (ex) {
        console.error(ex);
    }
}

// REST controller (Swagger UI from YAML file)

class HelloFriendRestController extends RestController {
    private _service: HelloFriendService;

    // swagger
    private _swaggerContent: string;
    private _swaggerPath: string;

    public constructor() {
        super();
        this._baseRoute = "/hello_friend";

        let serviceDescriptor = new Descriptor("hello-friend", "service", "*", "*", "1.0");
        this._dependencyResolver.put("service", serviceDescriptor);
    }

    public configure(config: ConfigParams): void {
        super.configure(config);

        // swagger
        this._swaggerContent = config.getAsNullableString("swagger.content");
        this._swaggerPath = config.getAsNullableString("swagger.path");
    }

    public setReferences(references: IReferences) {
        super.setReferences(references);
        this._service = this._dependencyResolver.getOneRequired<HelloFriendService>("service");
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
        let result = this._service.greeting(name);

        this.sendResult(req, res, result);
    }
}

// Command set 

class FriendsCommandSet extends CommandSet {
    private _service: HelloFriendService;

    public constructor(controller: HelloFriendService) {
        super();

        this._service = controller;

        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): ICommand {
        return new Command('greeeting', 
            new ObjectSchema(true).withRequiredProperty('name', TypeCode.String), 
            async (ctx: IContext, args: Parameters) =>
            {
                let name = args.getAsString("name");
                let res = this._service.greeting(name);
                return res;
            }
        );
    }
}

// Commandable REST Controller (Swagger UI automatically generated from command set)

class FriendCommandableHttpController1 extends CommandableHttpController {
    private _swaggerPath: string;

    public constructor() {
        super("commandable_hello_friend1");
        this._dependencyResolver.put('service', new Descriptor("hello-friend", "service", "*", "*", "*"));
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


// Commandable REST controller (Swagger UI generated from YAML file)  

class FriendCommandableHttpController2 extends CommandableHttpController {
    private _swaggerPath: string;

    public constructor() {
        super("commandable_hello_friend2");
        this._dependencyResolver.put('service', new Descriptor("hello-friend", "service", "*", "*", "*"));
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

// Servcie

class HelloFriendService implements IConfigurable, ICommand {
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


// Factory

class HelloFriendServiceFactory extends Factory {
    public constructor()
    {
        super();
        
        let HttpControllerDescriptor = new Descriptor("hello-friend", "controller", "http", "*", "1.0");                          // controller 1
        let CommandableHttpControllerDescriptor1 = new Descriptor("hello-friend", "controller", "commandable-http1", "*", "1.0"); // controller 2
        let CommandableHttpControllerDescriptor2 = new Descriptor("hello-friend", "controller", "commandable-http2", "*", "1.0"); // controller 2
        let ServiceDescriptor = new Descriptor("hello-friend", "service", "default", "*", "1.0");                     // Service

        this.registerAsType(HttpControllerDescriptor, HelloFriendRestController);                      // View 1
        this.registerAsType(CommandableHttpControllerDescriptor1, FriendCommandableHttpController1);   // View 2
        this.registerAsType(CommandableHttpControllerDescriptor2, FriendCommandableHttpController2);   // View 3
        this.registerAsType(ServiceDescriptor, HelloFriendService);                        // service
    }
}

// Container

class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");

        this._configPath = "./config.yml";
        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultHttpFactory());
        this._factories.add(new DefaultSwaggerFactory());
    }
}


```
