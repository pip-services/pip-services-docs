
```ts
// Step 1:  we extract the data from the MySQL database
persistence = database1;
let ids3: string[] = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
myDataList = await persistence.getListByIds(ctx, ids3);

// Step 2: we insert the data into the mydata table in the PostgreSQL database.
persistence = database2;
for (let item of myDataList) {
    let result: MyData = await persistence.create(ctx, item);
}

```
