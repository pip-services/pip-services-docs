
```ts
export class MyCommandableCloudFunction extends CommandableCloudFunction {
    private _service: MyServcie;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._service = references.getOneRequired(new Descriptor('mygroup', 'service', 'default', 'service', '*'));
    }
}
```
