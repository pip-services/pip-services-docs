
```ts
// Controller's and service’s descriptors are defined in the configuration file
export class MyCloudFunction extends CloudFunction {
    private _controller: MyController;
    private _service: MyCloudService;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'controller', 'default', 'controller', '*'));
        this._service = references.getOneRequired(new Descriptor('mygroup', 'service', 'gcp-function', 'function', '*'));
    }
}

```