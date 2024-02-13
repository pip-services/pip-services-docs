
```ts
// Controller and service are added as dependencies
export class MyCloudFunction extends CloudFunction {
    private _controller: MyController;
    private _service: CloudFunctionService;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
        this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'commandable-gcp-function', 'function', '*'))
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
        this._service = this._dependencyResolver.getOneRequired('service');
    }
}

```