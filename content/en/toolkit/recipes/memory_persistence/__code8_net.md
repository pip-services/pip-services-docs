
```cs
var result  = await persistence.UpdatePartially(null, "id 1", AnyValueMap.FromTuples(
    "content", "Partially Updated Content 1"
));
```
