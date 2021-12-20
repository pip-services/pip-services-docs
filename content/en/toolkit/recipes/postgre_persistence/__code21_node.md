
```ts
export class MyPostgresPersistence
    extends IdentifiablePostgresPersistence<MyData, string> {
    public constructor() {
        super('mydata');
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE ' + this._tableName + ' (id TEXT PRIMARY KEY, key TEXT, content TEXT)');
        this.ensureIndex(this._tableName + '_key', { key: 1 }, { unique: true });
    }
}
```
