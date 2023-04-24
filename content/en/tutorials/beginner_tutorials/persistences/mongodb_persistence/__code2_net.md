
```cs
using System.Runtime.Serialization;

using PipServices3.Commons.Data;
using MongoDB.Bson.Serialization.Attributes;

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

```
