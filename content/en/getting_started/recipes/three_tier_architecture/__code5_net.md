
```cs
[DataContract]
public class MyFriend : IStringIdentifiable
{
    [DataMember(Name = "id")]
    public string Id { get; set; }

    [DataMember(Name = "type")]
    public string Type { get; set; }

    [DataMember(Name = "name")]
    public string Name { get; set; }
}

```
