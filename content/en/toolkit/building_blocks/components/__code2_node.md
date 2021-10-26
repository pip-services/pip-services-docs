
```ts
import { ProcessContainer } from "pip-services3-container-nodex";
import { DefaultGrpcFactory } from "pip-services3-grpc-nodex";
import { DefaultRpcFactory } from "pip-services3-rpc-nodex";
import { DefaultSwaggerFactory } from "pip-services3-swagger-nodex";


class MyProcess extends ProcessContainer {
    public constructor() {
        super('mymicroservice', 'Sample microservice container');

        this._factories.add(new MyComponentFactory());
        this._factories.add(new DefaultRpcFactory());
        this._factories.add(new DefaultSwaggerFactory());
        this._factories.add(new DefaultGrpcFactory());
    }
}

```
