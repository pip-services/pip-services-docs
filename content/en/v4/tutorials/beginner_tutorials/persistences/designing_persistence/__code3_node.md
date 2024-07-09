
```ts
export interface IMyDataPersistence {
    set(ctx: Context, item: MyData): Promise<MyData>;

    create(ctx: Context, item: MyData): Promise<MyData>;

    getPageByFilter(ctx: Context, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<MyData>>;

    getCountByFilter(ctx: Context, filter: FilterParams): Promise<number>;

    getListByFilter(ctx: Context, filter: FilterParams, sort: SortParams): Promise<MyData[]>;

    getOneById(ctx: Context, id: MyData): Promise<MyData>;

    getListByIds(ctx: Context, ids: MyData[]): Promise<MyData[]>;

    update(ctx: Context, item: MyData): Promise<MyData>;

    updatePartially(ctx: Context, id: string, data: AnyValueMap): Promise<MyData>;

    deleteById(ctx: Context, id: string): Promise<MyData>;

    deleteByIds(ctx: Context, ids: string[]): Promise<void>;

    deleteByFilter(ctx: Context, filter: FilterParams): Promise<void>;
}

```
