
```typescript

export class IdentifiableMongoDbPersistence<T extends IIdentifiable<K>, K> extends MongoDbPersistence<T>
    implements IWriter<T, K>, IGetter<T, K>, ISetter<T> {

    public constructor(collection: string);

    protected async convertFromPublicPartial(value: any): any;

    public async getListByIds(correlationId: string, ids: K[]): Promise<T[]>;

    public async getOneByUdi(correlationId: string, id: K): Promise<T>;

    public async create(correlationId: string, item: T): Promise<T>;

    public async set(correlationId: string, item: T): Promise<T>;

    public async update(correlationId: string, item: T): Promise<T>;

    public async updatePartially(correlationId: string, id: K, data: AnyValueMap): Promise<T> ;

    public async deleteById(correlationId: string, id: K): Promise<T> ;

    public async deleteByIds(correlationId: string, ids: K[]): Promise<void>;
}


```

