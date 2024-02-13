
```ts
    public getListByFilter(correlationId: string, filter: FilterParams, sort: SortParams): Promise<MyData[]> {
        return super.getListByFilter(correlationId, this.composeFilter(filter), this.composeSort(sort), null);
    }
```
