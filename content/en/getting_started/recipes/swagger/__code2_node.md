
```ts
import { ConfigParams, Descriptor, IReferences } from 'pip-services3-commons-nodex';
import { RestService } from 'pip-services3-rpc-nodex';

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

```
