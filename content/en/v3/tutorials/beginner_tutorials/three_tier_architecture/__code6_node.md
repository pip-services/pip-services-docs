
```ts
import { ConfigParams, Descriptor, IReferences, IStringIdentifiable } from "pip-services3-commons-nodex";
import { RestService } from "pip-services3-rpc-nodex";


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
        this.configure = references.getOneRequired(new Descriptor("hello-friend", "controller", "*", "*", "1.0"));
    }

    private async greeting(req: any, res: any): Promise<void> {
        let result = await this.controller.greeting();
        await this.sendResult(req, res, result);
    }

    private async create(req: any, res: any): Promise<void> {
        let correlationId = this.getCorrelationId(req);
        let friend = new MyFriend();
        await this.sendResult(req, res, friend);
    }

    public register(): void {
        this.registerRoute("GET", "/greeting", null, this.greeting);
        this.registerRoute("GET", "/greeting_create", null, this.create);
    }
}

```
