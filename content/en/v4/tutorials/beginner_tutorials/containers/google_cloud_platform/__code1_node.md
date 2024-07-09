
```ts
// service's descriptor is defined in the configuration file
export class MyCloudFunction extends CloudFunction {

    private _controller: MyController;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml"
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'service', 'default', 'service', '*'));
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
