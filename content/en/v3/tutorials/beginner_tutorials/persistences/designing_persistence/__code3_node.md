
```ts
export interface IMyDataPersistence {
    set(correlationId: string, item: MyData): Promise<MyData>;

    create(correlationId: string, item: MyData): Promise<MyData>;

    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<MyData>>;

    getCountByFilter(correlationId: string, filter: FilterParams): Promise<number>;

    getListByFilter(correlationId: string, filter: FilterParams, sort: SortParams): Promise<MyData[]>;

    getOneById(correlationId: string, id: MyData): Promise<MyData>;

    getListByIds(correlationId: string, ids: MyData[]): Promise<MyData[]>;

    update(correlationId: string, item: MyData): Promise<MyData>;

    updatePartially(correlationId: string, id: string, data: AnyValueMap): Promise<MyData>;

    deleteById(correlationId: string, id: string): Promise<MyData>;

    deleteByIds(correlationId: string, ids: string[]): Promise<void>;

    deleteByFilter(correlationId: string, filter: FilterParams): Promise<void>;
}
```
