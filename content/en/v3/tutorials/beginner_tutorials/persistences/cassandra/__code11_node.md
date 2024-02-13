
```ts
public getCountByFilter(correlationId: string, filter: FilterParams):Promise<number>{

   let filterCondition: string = this.filterCondition(filter);
   return super.getCountByFilter(correlationId, filterCondition);

 }
    
// ...

let counter1: number = await persistence.getCountByFilter(
      null, FilterParams.fromTuples('name', 'name_1')
  );


```
