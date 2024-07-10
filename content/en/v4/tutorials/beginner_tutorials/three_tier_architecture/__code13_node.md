
```ts
import { 
    ConfigParams, Descriptor, IConfigurable, 
    IReferenceable, IReferences, Context, Factory 
} from "pip-services4-components-node";
import { ProcessContainer } from "pip-services4-container-node";
import { RestController, DefaultHttpFactory } from "pip-services4-http-node";
import { IdentifiableMySqlPersistence } from "pip-services4-mysql-node";
import { IStringIdentifiable, FilterParams } from "pip-services4-data-node";


// Data object
export class MyFriend implements IStringIdentifiable {
    public id: string;
    public type: string;
    public name: string;
}

// Tier 1: Controller
export class HelloFriendRestController extends RestController {
    protected service: HelloFriendService;

    public constructor() {
        super()
        this._baseRoute = "/hello_friend";
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this.service = references.getOneRequired(new Descriptor("hello-friend", "service", "*", "*", "1.0"));
    }

    private async greeting(req: any, res: any): Promise<void> {
        let result = await this.service.greeting();
        await this.sendResult(req, res, result);
    }

    private async create(req: any, res: any): Promise<void> {
        let correlationId = this.getCorrelationId(req);
        let friend: MyFriend = req.query;
        let result = await this.service.create(correlationId, friend);

        await this.sendResult(req, res, result);
    }

    public register(): void {
        this.registerRoute("GET", "/greeting", null, this.greeting);
        this.registerRoute("GET", "/greeting_create", null, this.create);
    }
}


// Tier 2 : Service
export class HelloFriendService implements IConfigurable, IReferenceable {
    private defaultName: string;
    private persistence: HelloFriendPersistence;

    public constructor() {
        this.defaultName = "Pip User";
    }

    public configure(config: ConfigParams): void {
        this.defaultName = config.getAsStringWithDefault("default_name", this.defaultName);
    }

    public setReferences(references: IReferences): void {
        this.persistence = references.getOneRequired(new Descriptor("hello-friend", "persistence", "*", "*", "1.0"));
    }

    public async greeting(): Promise<string> {
        let filter = FilterParams.fromTuples("type", "friend");
        let selectedFilter = await this.persistence.getOneRandom(null, filter);
        let name = selectedFilter != null ? selectedFilter.name : null;

        return `Hello, ${name} !`;
    }

    public async create(ctx: Context, item: MyFriend): Promise<MyFriend>  {
        let res = await this.persistence.create(ctx, item);
        return res;
    }
}

    
// Tier 3 = Persistence
export class HelloFriendPersistence extends IdentifiableMySqlPersistence<MyFriend, string> {
    public constructor() {
        super("myfriends3");
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE IF NOT EXISTS `' + this._tableName + '` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)');
    }

    private composeFilter(filter: FilterParams): string {
        filter ??= new FilterParams();
        let type = filter.getAsNullableString("type");
        let name = filter.getAsNullableString("name");

        let filterCondition = "";
        if (type != null)
            filterCondition += "type='" + type + "'";
        if (name != null)
            filterCondition += "name='" + name + "'";

        return filterCondition;
    }

    public getOneRandom(ctx: Context, filter: any): Promise<MyFriend> {
        return super.getOneRandom(ctx, this.composeFilter(filter));
    }
}

// Inversion of control: Factory
export class HelloFriendServiceFactory extends Factory {
    public constructor() {
        super();
        let HttpControllerDescriptor = new Descriptor("hello-friend", "controller", "http", "*", "1.0");      // Controller
        let ServiceDescriptor = new Descriptor("hello-friend", "service", "default", "*", "1.0"); // Service
        let PersistenceDescriptor = new Descriptor("hello-friend", "persistence", "mysql", "*", "1.0"); // Persistence

        this.registerAsType(HttpControllerDescriptor, HelloFriendRestController); // Controller
        this.registerAsType(ServiceDescriptor,  HelloFriendService);  // service
        this.registerAsType(PersistenceDescriptor, HelloFriendPersistence); // Persistence
    }
}


// Containerization
export class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");
        this._configPath = "./config.yaml"
        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultHttpFactory());
    }
}
        
// Running the app
export async function main() { 
    try {
        let proc = new HelloFriendProcess();
        proc.run(process.argv);
    } catch (ex) {
        console.error(ex);
    }
}


```
