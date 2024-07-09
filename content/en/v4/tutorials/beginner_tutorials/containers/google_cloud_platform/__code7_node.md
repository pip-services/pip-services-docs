
```ts
export class MyCommandableCloudFunction extends CommandableCloudFunction {
    private _service: MyServcie;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml";
        this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'default', 'service', '*'))
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('service');
    }
}
```
