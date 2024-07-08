
```ts
import { ConfigParams, Descriptor, IReferences } from "pip-services4-components-node";
import { RestController } from "pip-services4-http-node";

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
```
