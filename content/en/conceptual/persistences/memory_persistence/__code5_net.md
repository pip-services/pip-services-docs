
See: [DataPage](../../../toolkit_api/net/commons/data/data_page/)

```cs

// get one item
var page = await persistence.GetPageByFilterAsync(null,
        null,
        new PagingParams(0, null, true));

Console.WriteLine($"Has {page.Total} items");

foreach (var item in page.Data)
{
    Console.WriteLine($"{item.Id}, {item.Key}, {item.Content}");
}
```
