
```ts
import { MongoDbPersistence } from 'pip-services3-mongodb-nodex';

class MyObject {
  key: string;
  name: string;
}

class MyMongoDbPersistence extends MongoDbPersistence<MyObject> {

  public constructor() {
    super("mycollection");
  }

  public async getByName(correlationId: string, name: string): Promise<MyObject> {
    let criteria= { name: name };
    let res = await super.getListByFilter(correlationId, criteria, null, null);
    return res.length > 0 ? res[0] : null;
  }

  public async createDefault(correlationId: string, name: string): Promise<MyObject> {
    name = name ?? "unknown";
    let key = name.toLowerCase().replace(" #$%^&", "_");
    let item: MyObject = { key: key, name: name };

      let result = await new Promise<any>((resolve, reject) => {
      this._collection.insertOne(item, (err, result) => {
        if (err = null) resolve(result);
        else reject(err);
      });
    });

    this._logger.trace(correlationId, "Created item in %s with key = %s", this._collectionName, key);

   let newItem = result != null ? result.ops[0] : null;
   return newItem;
  }

  public async deleteByName(correlationId: string, name: string): Promise<void> {
    let criteria= { name: name };
    await super.deleteByFilter(correlationId, criteria);
  }
}
```