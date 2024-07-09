
```ts
public getPageByFilter(correlationId: Context, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
    let filterCondition: string = this.filterCondition(filter);

    return super.getPageByFilter(correlationId, filterCondition, paging, null, null);
}	
// ...

let page: DataPage<MyData> = await persistence.getPageByFilter(
    null, FilterParams.fromTuples('name', 'name_1'), null
);
```
