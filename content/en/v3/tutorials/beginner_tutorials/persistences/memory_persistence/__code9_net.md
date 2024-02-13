
```cs
// get one item
var page = await persistence.GetPageByFilterAsync(null,
    FilterParams.FromTuples("id", "id 1"),
    new PagingParams(0, null, true));

foreach (var item in page.Data)
{
    Console.WriteLine($"{item.Id}, {item.Key}, {item.Content}");
}
```
