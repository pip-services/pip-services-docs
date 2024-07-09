
```ts
export class MyCloudFunction extends CloudFunction {
    private _controller: MyCloudController;
    private _service: MyService;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = references.getOneRequired(new Descriptor("mygroup", "controller", "gcp-function", "function", '*'));
        this._service = references.getOneRequired(new Descriptor("mygroup", "serice", "default", "service", '*'));
    }
}
```
