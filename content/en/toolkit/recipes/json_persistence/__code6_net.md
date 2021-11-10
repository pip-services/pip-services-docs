
```cs
// Create the JSON persistence component
var persister = new JsonFilePersister<string>("./data.json");

// Save data on the JSON persistence object
await persister.SaveAsync("123", new List<string>() { "A1", "B1", "C1" });

// Read data from the JSON persistence object
var items = await persister.LoadAsync("123");

Console.WriteLine("[{0}]", string.Join(", ", items));
```
