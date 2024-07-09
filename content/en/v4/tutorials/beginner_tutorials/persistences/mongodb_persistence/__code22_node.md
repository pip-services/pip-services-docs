
```ts
import { FilterParams, IStringIdentifiable, SortParams } from "pip-services4-data-node";
import { ConfigParams, Context } from "pip-services4-components-node";
import { MongoDbPersistence } from 'pip-services4-mongodb-node';

export class MyData implements IStringIdentifiable {
    public id: string;
    public key: string;
    public content: string;
}

export class MyMongoDbPersistence extends MongoDbPersistence<MyData> {
    public constructor() {
        super('mydata');
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];

        let key = filter.getAsNullableString('key');
        if (key != null)
            criteria.push({ key: key });

        return criteria.length > 0 ? { $and: criteria } : null;
    }

    public getListByFilter(ctx: Context, filter: FilterParams, sort: SortParams): Promise<MyData[]> {
        return super.getListByFilter(ctx, this.composeFilter(filter), null, null);
    }

    public async update(ctx: Context, item: MyData): Promise<MyData> {
        if (item == null || item.id == null) {
            return null;
        }

        let newItem = Object.assign({}, item);
        delete newItem.id;
        newItem = this.convertFromPublic(newItem);

        let filter = { _id: item.id };
        let update = { $set: newItem };
        let options = {
            returnDocument: "after"
        };

        let result = await new Promise<any>((resolve, reject) => {
            this._collection.findOneAndUpdate(filter, update, options, (err, result) => {
                if (err == null) resolve(result);
                else reject(err);
            });
        });

        newItem = result ? this.convertToPublic(result.value) : null;
        return newItem;
    }

    public deleteByFilter(ctx: Context, filter: FilterParams): Promise<void> {
        return super.deleteByFilter(ctx, this.composeFilter(filter));
    }
}

export function printResult(operationName: string, res: MyData) {
    console.log(`==================== ${operationName} ====================`);
    console.log(`MyData with id: ${res.id}`);
    console.log(`MyData key: ${res.key}`);
    console.log(`MyData content: ${res.content}`);
}

let data1: MyData = { id: "1", key: "key 1", content: "content 1" };

let persistence = new MyMongoDbPersistence();

let config = ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 27017,
    "connection.database", "pipdatabase"
);
persistence.configure(config);

await persistence.open(null);
await persistence.clear(null);

// 1 - Create
let result = await persistence.create(null, data1);
printResult("Create", result);

// 2 - Retrieve
let items = await persistence.getListByFilter(null, FilterParams.fromTuples("key", "key 1"), null);
printResult("Get by id", items[0]);

// 3 - Update
items[0].content = "new content 2";
items[0].key = "key 2";

let update = await persistence.update(null, items[0]);
printResult("Update", update);

// 4 - Delete
await persistence.deleteByFilter(null, FilterParams.fromTuples("key", "key 1"));
await persistence.close(null);

```
