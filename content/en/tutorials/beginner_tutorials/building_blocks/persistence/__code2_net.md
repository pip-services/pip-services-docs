
```cs
using PipServices3.Commons.Data;

class MyIdentifiableObject: IIdentifiable<string>
{
    [BsonElement("id")]
    [DataMember(Name = "id")]
    public string Id { get; set; }

    [BsonElement("key")]
    [DataMember(Name = "key")]
    public string Key { get; set; }
    
    [BsonElement("name")]
    [DataMember(Name = "name")]
    public string Name { get; set; }
}

```