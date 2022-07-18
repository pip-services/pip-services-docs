
**src/interface/persistence/BeaconsMongoDbPersistence.cs**

```cs
namespace Beacons.Persistence
{
    public class BeaconsMongoDbPersistence : IdentifiableMongoDbPersistence<BeaconV1, string>, IBeaconsPersistence
    {
        public BeaconsMongoDbPersistence()
            : base("beacons")
        { }

        private new FilterDefinition<BeaconV1> ComposeFilter(FilterParams filterParams)
        {
            filterParams = filterParams ?? new FilterParams();

            var builder = Builders<BeaconV1>.Filter;
            var filter = builder.Empty;

            var id = filterParams.GetAsNullableString("id");
            if (!string.IsNullOrEmpty(id))
                filter &= builder.Eq(b => b.Id, id);
            
            var siteId = filterParams.GetAsNullableString("site_id");
            if (!string.IsNullOrEmpty(siteId))
                filter &= builder.Eq(b => b.SiteId, siteId);
            
            var label = filterParams.GetAsNullableString("label");
            if (!string.IsNullOrEmpty(label))
                filter &= builder.Eq(b => b.Label, label);
            
            var udi = filterParams.GetAsNullableString("udi");
            if (!string.IsNullOrEmpty(udi))
                filter &= builder.Eq(b => b.Udi, udi);

            var udis = filterParams.GetAsNullableString("udis");
            var udiList = !string.IsNullOrEmpty(udis) ? udis.Split(',') : null;
            if (udiList != null)
                filter &= builder.In(b => b.Udi, udiList);

            return filter;
        }

        public async Task<DataPage<BeaconV1>> GetPageByFilterAsync(
            string correlationId, FilterParams filter, PagingParams paging)
        {
            return await GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging);
        }

        public async Task<BeaconV1> GetOneByUdiAsync(string correlationId, string udi)
        {
            var builder = Builders<BeaconV1>.Filter;
            var filter = builder.Eq(x => x.Udi, udi);
            var result = await _collection.Find(filter).FirstOrDefaultAsync();

            if (result != null)
                _logger.Trace(correlationId, "Retrieved from {0} with udi = {1}", _collectionName, udi);
            else
                _logger.Trace(correlationId, "Nothing found from {0} with udi = {1}", _collectionName, udi);

            return result;

        }
    }
}
```
