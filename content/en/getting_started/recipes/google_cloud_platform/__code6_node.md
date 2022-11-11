
```ts
// Controller's descriptor is defined in the configuration file
export class MyCommandableCloudFunction extends CommandableCloudFunction {
    private _controller: MyController;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'controller', 'default', 'controller', '*'));
    }
}

```