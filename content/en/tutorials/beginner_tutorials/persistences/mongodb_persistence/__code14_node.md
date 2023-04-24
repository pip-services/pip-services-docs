
```ts
    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, this.composeSort(sort), null);
    }
```
