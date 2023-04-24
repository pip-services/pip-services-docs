
```cs
var newValue = new MyData { Id = "1", Key = "key 1", Content = "Updated content 1" };

await persistence.UpdateAsync("123", newValue);
```
