
```cs
using PipServices3.Commons.Data;

result = await persistence.UpdatePartiallyAsync(null, "2", AnyValueMap.FromTuples("content", "new content 2 - partially updated"));
```
