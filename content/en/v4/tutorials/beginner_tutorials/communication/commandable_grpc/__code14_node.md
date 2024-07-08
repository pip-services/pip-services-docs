
```ts
import { ConfigParams, References } from "pip-services4-components-node";
import { MyData, MyCommandableGrpcClient, IMyDataClient } from "my-package";

export async function main() {
    const assert = require('assert');

    let correlationId = 'example';

    // create client
    let grpcConfig = ConfigParams.fromTuples(
        'connection.protocol', 'http',
        'connection.host', 'localhost',
        'connection.port', 8090
    );

    let grpcClient = new MyCommandableGrpcClient();
    grpcClient.configure(grpcConfig);
    grpcClient.setReferences(new References());
    await grpcClient.open(correlationId);

    // simple data
    let data1: MyData = {id: '1', key: '0005', content: 'any content 1'};
    let data2: MyData = {id: '2', key: '0010', content: 'any content 2'};

    // using the client
    let res = await grpcClient.createMyData(correlationId, data1);
    assert(res.id == data1.id);

    res = await grpcClient.createMyData(correlationId, data2);
    assert(res.id == data2.id);

    let resPage = await grpcClient.getMyDatas(correlationId, null, null);
    assert(resPage.data.length == 2); 

    res = await grpcClient.deleteMyData(correlationId, data2.id);
    assert(res.id == data2.id);

    res = await grpcClient.getMyDataById(correlationId, data2.id);
    assert(res == null);
}
```
