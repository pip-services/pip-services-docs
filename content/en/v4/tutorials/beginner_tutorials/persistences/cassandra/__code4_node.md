
```ts
class MyCassandraPersistence extends CassandraPersistence<MyData> {
      public constructor() {
          super("my_data_table", "mydata_keyspace");
      }
  
      protected defineSchema(): void {
          this.clearSchema();
          this.ensureSchema('CREATE TABLE ' + this.quotedTableName() + ' (id TEXT PRIMARY KEY, name TEXT, description TEXT)');
          this.ensureIndex('name', { name: 1 }, { unique: true });
      }
  
  
      protected filterCondition(filter: FilterParams):string{
          let key = filter.getKeys()[0];
          console.log(`key:\n ${JSON.stringify(key)} \n`);
          filter = filter || new FilterParams();
          let keyValue = filter.getAsNullableString(key);
          console.log(`key:\n ${JSON.stringify(keyValue)} \n`);
          let filterCondition: string = null;
          if (keyValue)
              filterCondition = key + "='" + keyValue + "'";
          console.log(`filterCondition:\n ${JSON.stringify(filterCondition)} \n`);
          return filterCondition;
      }
}
```
