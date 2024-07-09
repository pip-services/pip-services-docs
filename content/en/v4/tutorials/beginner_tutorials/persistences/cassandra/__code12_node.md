
```ts
public deleteByFilter(correlationId: Context, filter: FilterParams):Promise<void>{
  
    let filterCondition: string = this.filterCondition(filter);
    return super.deleteByFilter(correlationId, filterCondition);

}

// ...

await persistence.deleteByFilter(
    null, FilterParams.fromTuples('id', '1', 'name', 'name_1')
);
```
