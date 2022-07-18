
```cs
using System;
using System.Runtime.Serialization;

using PipServices3.Commons.Data;
using PipServices3.Commons.Config;
using PipServices3.MongoDb.Persistence;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

public class MyIdentifiableMongoDbPersistence: IdentifiableMongoDbPersistence<MyData, string>
{
    public MyIdentifiableMongoDbPersistence() : base("mydata") { }
}

[DataContract]
[BsonNoId]
[BsonIgnoreExtraElements]
public class MyData : IStringIdentifiable
{
    [BsonElement("id")]
    [DataMember(Name = "id")]
    public string Id { get; set; }

    [BsonElement("key")]
    [DataMember(Name = "key")]
    public string Key { get; set; }

    [BsonElement("content")]
    [DataMember(Name = "content")]
    public string Content { get; set; }
}

public static void PrintResult(string operationNme, MyData res)
{
    Console.WriteLine($"==================== {operationNme} ====================");
    Console.WriteLine($"MyData Key: {res.Id}");
    Console.WriteLine($"MyData Key: {res.Key}");
    Console.WriteLine($"MyData Key: {res.Content}");
}


var data1 = new MyData { Id = "1", Key = "key 1", Content = "content 1" };

var config = ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 27017,
    "connection.database", "pipdatabase"
);

var persistence = new MyIdentifiableMongoDbPersistence();

persistence.Configure(config);

await persistence.OpenAsync("123");
await persistence.ClearAsync("123");

// CRUD
// 1 - Create
var result = await persistence.CreateAsync(null, data1);
PrintResult("Create", result);

// 2 - Retrieve
var item = await persistence.GetOneByIdAsync("123", "1");
PrintResult("Get by id", item);

// 3 - Update
var update = await persistence.UpdateAsync(null, new MyData { Id = "1", Key = "key 2", Content = "new content 2" });
PrintResult("Update", update);

// 4 - Delete
var delete = await persistence.DeleteByIdAsync(null, "1");
PrintResult("Delete by id", delete);

await persistence.CloseAsync(null);

```
