
```ts
public getOneRandom(correlationId: Context, filter: FilterParams):Promise<MyData>{
  
    let filterCondition: string = this.filterCondition(filter);

    return super.getOneRandom(correlationId, filterCondition);

}

// ...

let data: MyData = await persistence.getOneRandom(
    null, FilterParams.fromTuples('name', 'name_1')
);
```
