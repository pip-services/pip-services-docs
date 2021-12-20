
```ts
export class MyPostgresPersistence 
    extends IdentifiableJsonPostgresPersistence<MyData, string>
{
    public constructor() {
        super('mydata_json2');
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureTable();
        this.ensureIndex(this._tableName + '_json_key', { "(data->>'key')": 1 }, { unique: true });
    }
}
```
