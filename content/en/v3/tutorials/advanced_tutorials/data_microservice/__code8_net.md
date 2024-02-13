
**src/interface/persistence/BeaconsMemoryPersistence.cs**

```cs
namespace Beacons.Persistence
{
    public class BeaconsMemoryPersistence : IdentifiableMemoryPersistence<BeaconV1, string>, IBeaconsPersistence
    {
        public BeaconsMemoryPersistence()
        {
            _maxPageSize = 1000;
        }

        private List<Func<BeaconV1, bool>> ComposeFilter(FilterParams filter)
        {
            filter = filter ?? new FilterParams();

            var id = filter.GetAsNullableString("id");
            var siteId = filter.GetAsNullableString("site_id");
            var label = filter.GetAsNullableString("label");
            var udi = filter.GetAsNullableString("udi");

            var udis = filter.GetAsNullableString("udis");
            var udiList = udis != null ? udis.Split(',') : null;

            return new List<Func<BeaconV1, bool>>() {
                (item) =>
                {
                    if (id != null && item.Id != id)
                        return false;
                    if (siteId != null && item.SiteId != siteId)
                        return false;
                    if (label != null && item.Label != label)
                        return false;
                    if (udi != null && item.Udi != udi)
                        return false;
                    if (udiList != null && !udiList.Contains(item.Udi))
                        return false;
                    return true;
                }
            };
        }

        public Task<DataPage<BeaconV1>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging)
        {
            return base.GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging);
        }

        public async Task<BeaconV1> GetOneByUdiAsync(string correlationId, string udi)
        {
            BeaconV1 item = null;

            lock (_lock)
            {
                item = _items.Find((beacon) => { return beacon.Udi == udi; });
            }

            if (item != null) _logger.Trace(correlationId, "Found beacon by {0}", udi);
            else _logger.Trace(correlationId, "Cannot find beacon by {0}", udi);

            return await Task.FromResult(item);
        }
    }
}

```
