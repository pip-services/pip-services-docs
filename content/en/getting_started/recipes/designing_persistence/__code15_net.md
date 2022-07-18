
```cs
for (var i=0; i < 20; i++)
{
    var data = new MyData { Id=i.ToString(), Key=$"key {i}", Content=$"content {i}"};
    var res = await persistence.CreateAsync("123", data);
}
```
