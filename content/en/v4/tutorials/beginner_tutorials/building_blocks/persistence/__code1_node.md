
```ts
import { Context } from "pip-services4-components-node";
import { MongoDbPersistence } from 'pip-services4-mongodb-node';

class MyObject {
  key: string;
  name: string;
}

class MyMongoDbPersistence extends MongoDbPersistence<MyObject> {

  public constructor() {
    super("mycollection");
  }

  public async getByName(ctx: Context, name: string): Promise<MyObject> {
    let criteria= { name: name };
    let res = await super.getListByFilter(ctx, criteria, null, null);
    return res.length > 0 ? res[0] : null;
  }

  public async createDefault(ctx: Context, name: string): Promise<MyObject> {
    name = name ?? "unknown";
    let key = name.toLowerCase().replace(" #$%^&", "_");
    let item: MyObject = { key: key, name: name };

      let result = await new Promise<any>((resolve, reject) => {
      this._collection.insertOne(item, (err, result) => {
        if (err = null) resolve(result);
        else reject(err);
      });
    });

    this._logger.trace(ctx, "Created item in %s with key = %s", this._collectionName, key);

   let newItem = result != null ? result.ops[0] : null;
   return newItem;
  }

  public async deleteByName(ctx: Context, name: string): Promise<void> {
    let criteria= { name: name };
    await super.deleteByFilter(ctx, criteria);
  }
}
```
