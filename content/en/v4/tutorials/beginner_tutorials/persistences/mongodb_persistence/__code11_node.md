
```ts
public getListByFilter(ctx: Context, filter: FilterParams, sort: SortParams): Promise<MyData[]> {
    return super.getListByFilter(ctx, this.composeFilter(filter), this.composeSort(sort), null);
}

```
