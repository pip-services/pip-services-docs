
**/src/version1/BeaconsMockClientV1.cs**

```cs

    public class BeaconsMockClientV1 : IBeaconsClientV1
    {
        protected int maxPageSize = 100;
        protected List<BeaconV1> _items = new List<BeaconV1>();

        private Func<BeaconV1, bool> ComposeFilter(FilterParams filter)
        {
            filter = filter ?? new FilterParams();

            var id = filter.GetAsNullableString("id");
            var siteId = filter.GetAsNullableString("site_id");
            var label = filter.GetAsNullableString("label");
            var udi = filter.GetAsNullableString("udi");

            var udis = filter.GetAsNullableString("udis");
            var udiList = udis != null ? udis.Split(',') : null;

            return (item) =>
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
                };

        }

        public async Task<DataPage<BeaconV1>> GetBeaconsAsync(string correlationId, FilterParams filter, PagingParams paging)
        {
            var filterBeacons = ComposeFilter(filter);

            var beacons = _items.FindAll(beacon => filterBeacons(beacon));

            paging = paging ?? new PagingParams();

            var skip = Convert.ToInt32(paging.GetSkip(-1));
            var take = Convert.ToInt32(paging.GetTake(maxPageSize));
            long? total = null;

            if (paging.Total)
                total = beacons.Count();
            if (skip > 0)
                beacons = beacons.Skip(skip).Take(take).ToList();

            var page = await Task.FromResult(new DataPage<BeaconV1>(beacons, total));

            return page;
        }

        public async Task<BeaconV1> GetBeaconByIdAsync(string correlationId, string id)
        {
            var beacons = await Task.FromResult(_items.Find(beacon => beacon.Id == id));

            return beacons;
        }

        public async Task<BeaconV1> GetBeaconByUdiAsync(string correlationId, string udi)
        {
            var beacons = await Task.FromResult(_items.Find(beacon => beacon.Udi == udi));

            return beacons;
        }

        public async Task<CenterObjectV1> CalculatePositionAsync(string correlationId, string siteId, string[] udis)
        {
            List<BeaconV1> beacons;

            var page = await GetBeaconsAsync(correlationId, FilterParams.FromTuples(
                "site_id", siteId, "udis", udis), null);

            beacons = page.Data ?? new List<BeaconV1>();

            double lat = 0;
            double lng = 0;
            double count = 0;

            foreach (BeaconV1 beacon in beacons)
            {
                if (beacon.Center != null && beacon.Center.Type == "Point" && beacon.Center.Coordinates.Length > 1)
                {
                    lng = lng + beacon.Center.Coordinates[0];
                    lat = lat + beacon.Center.Coordinates[1];
                    count = count + 1;
                }
            }

            if (count > 0)
                return new CenterObjectV1()
                {
                    Coordinates = new double[] { lng / count, lat / count },
                    Type = "Point"

                };

            return null;
        }

        public async Task<BeaconV1> CreateBeaconAsync(string correlationId, BeaconV1 beacon)
        {
            if (beacon == null) return null;

            beacon.Id = beacon.Id ?? IdGenerator.NextLong();
            _items.Add(beacon);

            return await Task.FromResult(beacon);
        }

        public async Task<BeaconV1> UpdateBeaconAsync(string correlationId, BeaconV1 beacon)
        {
            var index = _items.FindIndex(el => el.Id == beacon.Id);

            if (index < 0) return null;

            _items[index] = beacon;

            return await Task.FromResult(beacon);

        }

        public async Task<BeaconV1> DeleteBeaconByIdAsync(string correlationId, string id)
        {
            var index = _items.FindIndex(el => el.Id == id);

            if (index < 0) return null;

            var deletedBeacon = _items[index];

            _items.RemoveAt(index);

            return await Task.FromResult(deletedBeacon);
        }
    }
    
```

