
```ts
import { Descriptor } from "pip-services4-components-node";
import { CommandableGrpcController } from "pip-services4-grpc-node";

export class MyDataCommandableGrpcService extends CommandableGrpcController {
    public constructor() {
        super('mydata');
        this._dependencyResolver.put('controller', new Descriptor('service-mydata', 'controller', '*', '*', '*'))
    }
}
```
