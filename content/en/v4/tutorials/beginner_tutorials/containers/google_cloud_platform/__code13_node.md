
```ts
export class MyCloudFunction extends CloudFunction {
    private _controller: MyCloudController;
    private _service: MyService;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
        this._dependencyResolver.put('controller', new Descriptor("mygroup", "controller", "gcp-function", "function", '*'));
        this._dependencyResolver.put('service', new Descriptor("mygroup", "serice", "default", "service", '*'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
        this._service = this._dependencyResolver.getOneRequired('service');
    }
}
```
