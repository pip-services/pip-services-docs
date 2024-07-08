
```ts
import { Factory, Descriptor } from "pip-services4-components-node";

import { MyDataService, MyDataCommandableGrpcController } from "my-package";


export class DefaultMyDataFactory extends Factory {
    public static FactoryDescriptor = new Descriptor("service-mydata", "factory", "default", "default", "1.0");
    public static ServiceDescriptor = new Descriptor("service-mydata", "service", "default", "*", "1.0");
    public static CommandableGrpcControllerDescriptor = new Descriptor("service-mydata", "controller", "commandable-grpc", "*", "1.0");

    public constructor() {
        super();
        this.registerAsType(DefaultMyDataFactory.ServiceDescriptor, MyDataService)
        this.registerAsType(DefaultMyDataFactory.CommandableGrpcControllerDescriptor, MyDataCommandableGrpcController)
    }
}
```
