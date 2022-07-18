
```cs
using PipServices3.Commons.Data;
using System.Runtime.Serialization;

[DataContract]
public class Dummy : IStringIdentifiable
{
    [DataMember(Name = "id")]
    public string Id { get; set; }

    [DataMember(Name = "key")]
    public string Key { get; set; }

    [DataMember(Name = "content")]
    public string Content { get; set; }
}

var dummy1 = new Dummy { Id = "1", Key = "key 1", Content = "content 1" };
var dummy2 = new Dummy { Id = "id 1", Key = "key 2", Content = "Content 1" };
var dummy3 = new Dummy { Id = null, Key = "key 3", Content = "content 3" };
```
