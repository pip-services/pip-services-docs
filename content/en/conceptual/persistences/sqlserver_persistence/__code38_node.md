
```ts
export class MySqlServerPersistence
    extends IdentifiableJsonSqlServerPersistence<MyData, string> {
    public constructor() {
        super('mydata_json');
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureTable();
        this.ensureSchema("ALTER TABLE [" + this._tableName + "] ADD [data_key] AS JSON_VALUE([data],'$.key')")
        this.ensureIndex(this._tableName + '_key', { data_key: 1 }, { unique: true });
    }

    public getOneRandom(correlationId: string, filter: any): Promise<MyData> {
        return super.getOneRandom(correlationId, filter);
    }

    public getPageByFilter(correlationId: string, filter: any, paging: PagingParams, sort: any): Promise<DataPage<MyData>> {
        return super.getPageByFilter(correlationId, filter, paging, null, null);
    }

    public getListByFilter(correlationId: string, filter: any, sort: any, select: any): Promise<MyData[]> {
        return super.getListByFilter(correlationId, filter, sort, select);
    }

    public getCountByFilter(correlationId: string, filter: any): Promise<number> {
        return super.getCountByFilter(correlationId, filter);
    }
}
```