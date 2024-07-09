
```ts
public getPageByFilter(ctx: Context, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<MyData>> {
    return super.getPageByFilter(ctx, this.composeFilter(filter), paging, this.composeSort(sort), null);
}

```
