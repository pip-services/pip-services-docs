
```ts
import { ProcessContainer } from "pip-services4-container-node";
import { DefaultGrpcFactory } from "pip-services4-grpc-node";
import { DefaultHttpFactory } from "pip-services4-http-node";
import { DefaultSwaggerFactory } from "pip-services4-swagger-node";


class MyProcess extends ProcessContainer {
    public constructor() {
        super('mymicroservice', 'Sample microservice container');

        this._factories.add(new MyComponentFactory());
        this._factories.add(new DefaultHttpFactory());
        this._factories.add(new DefaultSwaggerFactory());
        this._factories.add(new DefaultGrpcFactory());
    }
}
```
