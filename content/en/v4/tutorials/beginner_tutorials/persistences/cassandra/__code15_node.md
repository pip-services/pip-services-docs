
```ts
class MyCassandraPersistence extends IdentifiableCassandraPersistence<MyData, string> {
      public constructor() {
          super("my_data_table", "mydata_keyspace");
      }
  
      protected defineSchema(): void {
          this.clearSchema();
          this.ensureSchema('CREATE TABLE ' + this.quotedTableName() + ' (id TEXT PRIMARY KEY, name VARCHAR(20), description VARCHAR(20))');
          this.ensureIndex('name', { name: 1 }, { unique: true });
      }
      
  }
```
