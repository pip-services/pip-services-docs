
```ts
export class MyCommandableCloudController extends CommandableCloudFunctionController {
    public constructor() {
        super('mygroup');
        this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'default', 'service', '1.0'));
    }
}
```
