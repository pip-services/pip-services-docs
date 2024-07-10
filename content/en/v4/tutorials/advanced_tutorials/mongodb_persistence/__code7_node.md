
```ts

export class IdentifiableMongoDbPersistence<T extends IIdentifiable<K>, K> extends MongoDbPersistence<T>
    implements IWriter<T, K>, IGetter<T, K>, ISetter<T> {

    public constructor(collection: string);

    protected async convertFromPublicPartial(value: any): any;

    public async getListByIds(ctx: Context, ids: K[]): Promise<T[]>;

    public async getOneByUdi(ctx: Context, id: K): Promise<T>;

    public async create(ctx: Context, item: T): Promise<T>;

    public async set(ctx: Context, item: T): Promise<T>;

    public async update(ctx: Context, item: T): Promise<T>;

    public async updatePartially(ctx: Context, id: K, data: AnyValueMap): Promise<T> ;

    public async deleteById(ctx: Context, id: K): Promise<T> ;

    public async deleteByIds(ctx: Context, ids: K[]): Promise<void>;
}



```
