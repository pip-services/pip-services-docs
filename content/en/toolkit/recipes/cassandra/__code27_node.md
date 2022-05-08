
```ts
import { IdentifiableCassandraPersistence } from 'pip-services3-cassandra-nodex';
import { IIdentifiable, AnyValueMap } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';

export class MyData implements IIdentifiable<string> {
  public id: string;
  public name: string;
  public description: string;
}

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


export async function main() {
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
    let item = new MyData();
    let item1: MyData = { id: '1', name: 'name_1', description: 'description_1' }; 
    let item2: MyData = { id: '2', name: 'name_2', description: 'description_2' }; 

    // CRUD
	// Create
    item = await persistence.create("123", item1);
    console.log(`Created:\n ${JSON.stringify(item)} \n`);

    item = await persistence.create("123", item2);
    console.log(`Created:\n ${JSON.stringify(item)} \n`);

    // Read
    item = await persistence.getOneById("123","1");
    console.log(`Read:\n ${JSON.stringify(item)} \n`);

    let idList = ['1', '2']
    let itemList = await persistence.getListByIds("123",idList);
    console.log(`Read:\n ${JSON.stringify(itemList)} \n`);

	// Update
    let item1U: MyData = { id: '1', name: 'name_1_Updated', description: 'description_1_Updated' }; 
	item = await persistence.update("123",item1U);
    console.log(`Updated:\n ${JSON.stringify(item)} \n`);

    let value1 = new AnyValueMap({ name: "name_2_Updated" });
    item = await persistence.updatePartially ("123","2",value1);
    console.log(`Updated:\n ${JSON.stringify(item)} \n`);

    let item1U2: MyData = { id: '1', name: 'name_1_Updated_2', description: 'description_1_Updated_2' }; 
    item = await persistence.set ("123", item1U2);
    console.log(`Updated or created:\n ${JSON.stringify(item)} \n`);

	// Delete
    item = await persistence.deleteById("123","1");
    console.log(`Deleted:\n ${JSON.stringify(item)} \n`);
  
    // let idList = ['1', '2']
    await persistence.deleteByIds("123",idList);
    console.log(`Deleted:\n ${JSON.stringify(idList)} \n`); 

    await persistence.close(null);

    console.log('Persistence closed!');
}

```
