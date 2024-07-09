
```ts
// Data objects
let item = new MyData();
let item1: MyData = { id: '1', name: 'name_1', description: 'description_1' }; 
let item2: MyData = { id: '2', name: 'name_2', description: 'description_2' }; 

// CRUD
// Create
item = await persistence.create(null, item1);
```
