
```ts
// Controller is added as a dependency
export class MyCloudFunction extends CloudFunction {

    private _controller: MyController;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml"
        this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('conroller');
    }

    private async action(req: any, res: any): Promise<void> {
        let name = req.body.name ?? 'default name';
        let result = await this._controller.greetings(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    protected register() {
        this.registerAction('greetings', null, this.action);
    }
}

```