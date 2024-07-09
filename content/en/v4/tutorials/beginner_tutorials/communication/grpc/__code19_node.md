
```ts
// Pre-requisites
let services = require('../summator_grpc_pb');
let messages = require('../summator_pb');

import { ConfigParams, References } from "pip-services4-components-node";
import { GrpcClient } from "pip-services4-grpc-node";

// gRPC client
export class MyGrpcClient extends GrpcClient {
    public constructor() {
        super(services.SummatorClient);
    }

    public async getData(correlationId: string, value1: number, value2: number): Promise<number> {
        let request = new messages.Number1();
        request.setValue1(value1);
        request.setValue2(value2);

        let res = await this.call<any>("sum", correlationId, request);

        return res.getValue();
    }
}
 
let client = new MyGrpcClient();
client.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

client.setReferences(new References());

await client.open(null);

// Function call and result
let result = await client.getData(null, 3, 5);  // Returns 8

```
