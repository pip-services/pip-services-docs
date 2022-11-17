
```ts
export class MyCommandableCloudService extends CommandableCloudFunctionService {
    public constructor() {
        super('mygroup');
        // The 'controller' dependency is required by all Commandable services
        this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'));
    }
}

```