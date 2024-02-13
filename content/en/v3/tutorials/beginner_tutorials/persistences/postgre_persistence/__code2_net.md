
```cs
using System.Runtime.Serialization;
using PipServices3.Commons.Data;

[DataContract]
public class MyData: IStringIdentifiable
{
    [DataMember(Name = "id")]
    public string Id { get; set; }

    [DataMember(Name = "key")]
    public string Key { get; set; }

    [DataMember(Name = "content")]
    public string Content { get; set; }
}

```
