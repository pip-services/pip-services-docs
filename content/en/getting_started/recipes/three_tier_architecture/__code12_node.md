
```ts
import { 
    ConfigParams, Descriptor, FilterParams, 
    IConfigurable, IReferenceable, IReferences, 
    IStringIdentifiable 
} from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";
import { ProcessContainer } from "pip-services3-container-nodex";
import { IdentifiableMySqlPersistence } from "pip-services3-mysql-nodex";
import { DefaultRpcFactory, RestService } from "pip-services3-rpc-nodex";

// Data object
export class MyFriend implements IStringIdentifiable {
    public id: string;
    public type: string;
    public name: string;
}

// Tier 1: View
export class HelloFriendRestService extends RestService {
    protected controller: HelloFriendController;

    public constructor() {
        super()
        this._baseRoute = "/hello_friend";
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this.controller = references.getOneRequired(new Descriptor("hello-friend", "controller", "*", "*", "1.0"));
    }

    private async greeting(req: any, res: any): Promise<void> {
        let result = await this.controller.greeting();
        await this.sendResult(req, res, result);
    }

    private async create(req: any, res: any): Promise<void> {
        let correlationId = this.getCorrelationId(req);
        let friend: MyFriend = req.query;
        let result = await this.controller.create(correlationId, friend);

        await this.sendResult(req, res, result);
    }

    public register(): void {
        this.registerRoute("GET", "/greeting", null, this.greeting);
        this.registerRoute("GET", "/greeting_create", null, this.create);
    }
}


// Tier 2 : Controller
export class HelloFriendController implements IConfigurable, IReferenceable {
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

    public async create(correlationId: string, item: MyFriend): Promise<MyFriend>  {
        let res = await this.persistence.create(correlationId, item);
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

    public getOneRandom(correlationId: string, filter: any): Promise<MyFriend> {
        return super.getOneRandom(correlationId, this.composeFilter(filter));
    }
}

// Inversion of control: Factory
export class HelloFriendServiceFactory extends Factory {
    public constructor() {
        super();
        let HttpServiceDescriptor = new Descriptor("hello-friend", "service", "http", "*", "1.0");      // View
        let ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0"); // Controller
        let PersistenceDescriptor = new Descriptor("hello-friend", "persistence", "mysql", "*", "1.0"); // Persistence

        this.registerAsType(HttpServiceDescriptor, HelloFriendRestService); // View
        this.registerAsType(ControllerDescriptor,  HelloFriendController);  // Controller
        this.registerAsType(PersistenceDescriptor, HelloFriendPersistence); // Persistence
    }
}


// Containerization
export class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");
        this._configPath = "./config.yaml"
        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultRpcFactory());
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
