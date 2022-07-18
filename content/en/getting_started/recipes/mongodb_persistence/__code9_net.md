
```cs
var filter = FilterParams.FromTuples(
    "name", "ABC"
);
var result = await persistence.GetPageByFilterAsync(null, filter, null);

```

