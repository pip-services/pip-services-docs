
```ts
// Pre-requisites
let services = require('../summator_grpc_pb');
let messages = require('../summator_pb');

import { ConfigParams, Descriptor, References } from "pip-services4-components-node";
import { GrpcController } from "pip-services4-grpc-node";
import { Calculations } from "./calculations";

// gRPC controller
export class MyGrpcController extends GrpcController {

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
    
let controller = new MyGrpcController();
controller.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

controller.setReferences(new References());

await controller.open(null);
```
