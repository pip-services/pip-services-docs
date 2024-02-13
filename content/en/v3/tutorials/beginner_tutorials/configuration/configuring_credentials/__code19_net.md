
```cs
var result = await credentialStore.LookupAsync("123", "key2");
Console.WriteLine(result); // Returns {'user': 'bsmith', 'pass': 'mypass'}
```
