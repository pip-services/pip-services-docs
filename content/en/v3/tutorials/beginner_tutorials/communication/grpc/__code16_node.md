
```ts
// Pre-requisites
let services = require('../summator_grpc_pb');
let messages = require('../summator_pb');

import { ConfigParams, Descriptor, References } from "pip-services3-commons-nodex";
import { GrpcService } from "pip-services3-grpc-nodex";
import { Calculations } from "./calculations";

// gRPC server
export class MyGrpcService extends GrpcService {

    public constructor() {
        super(services.SummatorService);
    }

    private async sum(call: any): Promise<any> {
        let res = Calculations.sum(call.request.getValue1(), call.request.getValue2());

        let response = new messages.Number2();
        response.setValue(res);

        return response;
    }


    public register(): void {
        this.registerMethod(
            "sum",
            null,
            this.sum
        );
    }
}
    
let service = new MyGrpcService();
service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

service.setReferences(new References());

await service.open(null);
```
