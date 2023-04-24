
```ts
// Controller is added as a dependency
export class MyCommandableCloudFunction extends CommandableCloudFunction {
    private _controller: MyController;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml";
        this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
    }
}

```