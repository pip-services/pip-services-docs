
```ts
import { ConfigParams, Context } from "pip-services4-components-node";
import { IIdentifiable, FilterParams, PagingParams, DataPage, IdGenerator } from "pip-services4-data-node";
import { AnyValueMap,  } from "pip-services4-commons-node";
import { CassandraPersistence } from "pip-services4-cassandra-node";

export class MyData implements IIdentifiable<string> {
    public id: string;
    public name: string;
    public description: string;
  }
  
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
  
      public getPageByFilter(correlationId: Context, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
          let filterCondition: string = this.filterCondition(filter);
  
          return super.getPageByFilter(correlationId, filterCondition, paging, null, null);
      }	
  
      public getOneRandom(correlationId: Context, filter: FilterParams):Promise<MyData>{
  
          let filterCondition: string = this.filterCondition(filter);
  
          return super.getOneRandom(correlationId, filterCondition);
  
      }
  
      public getCountByFilter(correlationId: Context, filter: FilterParams):Promise<number>{
  
          let filterCondition: string = this.filterCondition(filter);
  
          return super.getCountByFilter(correlationId, filterCondition);
  
      }
  
  
      public deleteByFilter(correlationId: Context, filter: FilterParams):Promise<void>{
  
          let filterCondition: string = this.filterCondition(filter);
          return super.deleteByFilter(correlationId, filterCondition);
  
      }
  }
  
  
  export async function main(): Promise<void> {
      let persistence = new MyCassandraPersistence();
  
      persistence.configure(ConfigParams.fromTuples(
          "connection.host", "localhost",
          "connection.port", 9042,
          'connection.datacenter', 'datacenter1',
          "connection.username", "cassandra",
          "connection.password", "cassandra",
      ));
  
      await persistence.open(null);
      await persistence.clear(null);
      
  
      // Data objects
      let item1: MyData = { id: IdGenerator.nextLong(), name: 'name_1', description: 'description_1' }; 
      let item2: MyData = { id: IdGenerator.nextLong(), name: 'name_2', description: 'description_2' }; 
      // CRUD
      // Create
      let result1 = await persistence.create(null, item1);
      console.log(`Created item:\n ${JSON.stringify(result1)} \n`);
  
      let result2 = await persistence.create(null, item2);
      console.log(`Created item:\n ${JSON.stringify(result2)} \n`);
      
      // Read
      let page: DataPage<MyData> = await persistence.getPageByFilter(
          null, FilterParams.fromTuples('name', 'name_1'), null
      );
      console.log(`Page:\n ${JSON.stringify(page.data)} \n`);
      
      let data: MyData = await persistence.getOneRandom(
          null, FilterParams.fromTuples('name', 'name_1')
      );
      console.log(`Random Data:\n ${JSON.stringify(data)} \n`);
      
      let counter1: number = await persistence.getCountByFilter(
          null, FilterParams.fromTuples('name', 'name_1')
      );
      console.log(`Counter:\n ${JSON.stringify(counter1)} \n`);
  
      let counter2: number = await persistence.getCountByFilter(
          null, FilterParams.fromTuples('name','description_2')
      );
      console.log(`Counter:\n ${JSON.stringify(counter2)} \n`);
  
      // Update
      
      // Delete
  
      await persistence.deleteByFilter(
          null, FilterParams.fromTuples('id', '1', 'name', 'name_1')
      );
      console.log(`Record deleted\n`);
      
      
      await persistence.close(null);
  
      console.log('Persistence closed');
  }
```
