
```ts
import { IStringIdentifiable } from "pip-services4-data-node";
import { ConfigParams, Context } from "pip-services4-components-node";
import { IdentifiableMongoDbPersistence } from 'pip-services4-mongodb-node';

export class MyIdentifiableMongoDbPersistence extends IdentifiableMongoDbPersistence<MyData, string> {
    public constructor() {
        super("mydata");
    }
}

export class MyData implements IStringIdentifiable {
    public id: string;
    public key: string;
    public content: string;
}

export function printResult(operationName: string, res: MyData) {
    console.log(`==================== ${operationName} ====================`);
    console.log(`MyData with id: ${res.id}`);
    console.log(`MyData key: ${res.key}`);
    console.log(`MyData content: ${res.content}`);
}


let data1: MyData = { id: "1", key: "key 1", content: "content 1" };

let persistence = new MyIdentifiableMongoDbPersistence();
let config = ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 27017,
    "connection.database", "pipdatabase"
);
persistence.configure(config);

await persistence.open(null);
await persistence.clear(null);

// CRUD
// 1 - Create
let result = await persistence.create(null, data1);
printResult("Create", result);

// 2 - Retrieve
let item = await persistence.getOneById(ctx, "1");
printResult("Get by id", item);

// 3 - Update
let update = await persistence.update(null, { id: "2", key: "key 2", content: "new content 2" });
printResult("Update", update);

// 4 - Delete
let deleted = await persistence.deleteById(null, "1");
printResult("Delete by id", deleted);

await persistence.close(null);
```
