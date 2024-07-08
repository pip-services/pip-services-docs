
```ts
import { DefaultGrpcFactory } from "pip-services4-grpc-node";
import { ProcessContainer } from "pip-services4-container-node";

class MyDataProcess extends ProcessContainer {
    constructor() {
        super("my_data", "simple my data microservice");
        this._factories.add(new DefaultMyDataFactory());
        this._factories.add(new DefaultGrpcFactory());
    }
}
```
