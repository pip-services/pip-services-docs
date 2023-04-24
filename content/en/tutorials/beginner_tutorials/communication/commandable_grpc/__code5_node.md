
```ts
import { Descriptor } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";

import { MyDataController, MyDataCommandableGrpcService } from "my-package";


export class DefaultMyDataFactory extends Factory {
    public static FactoryDescriptor = new Descriptor("service-mydata", "factory", "default", "default", "1.0");
    public static ControllerDescriptor = new Descriptor("service-mydata", "controller", "default", "*", "1.0");
    public static CommandableGrpcServiceDescriptor = new Descriptor("service-mydata", "service", "commandable-grpc", "*", "1.0");

    public constructor() {
        super();
        this.registerAsType(DefaultMyDataFactory.ControllerDescriptor, MyDataController)
        this.registerAsType(DefaultMyDataFactory.CommandableGrpcServiceDescriptor, MyDataCommandableGrpcService)
    }
}
```
