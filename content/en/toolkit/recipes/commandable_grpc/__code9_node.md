
```ts
import { Descriptor } from "pip-services3-commons-nodex";
import { CommandableGrpcService } from "pip-services3-grpc-nodex";


export class MyDataCommandableGrpcService extends CommandableGrpcService {
    public constructor() {
        super('mydata');
        this._dependencyResolver.put('controller', new Descriptor('service-mydata', 'controller', '*', '*', '*'))
    }
}
```
