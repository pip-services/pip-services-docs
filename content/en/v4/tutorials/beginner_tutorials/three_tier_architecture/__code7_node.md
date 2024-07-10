
```ts
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
```
