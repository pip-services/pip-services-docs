
```cs
public async Task<BeaconV1> GetOneByNameAsync(string correlationId, string name)
{
    var builder = Builders<BeaconV1>.Filter;
    var filter = builder.Eq(x => x.Name, name);
    var result = await _collection.Find(filter).FirstOrDefaultAsync();
    if (result != null)
        _logger.Trace(correlationId, "Retrieved from {0} with name = {1}", _collectionName, name);
    else
        _logger.Trace(correlationId, "Nothing found from {0} with name = {1}", _collectionName, name);
    return result;
}

```

