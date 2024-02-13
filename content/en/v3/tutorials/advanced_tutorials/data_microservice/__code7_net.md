
**src/interface/persistence/IBeaconsPersistence.cs**

```cs
namespace Beacons.Persistence
{
    public interface IBeaconsPersistence
    {
        Task<DataPage<BeaconV1>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging);
        Task<BeaconV1> GetOneByIdAsync(string correlationId, string id);
        Task<BeaconV1> GetOneByUdiAsync(string correlationId, string udi);
        Task<BeaconV1> CreateAsync(string correlationId, BeaconV1 item);
        Task<BeaconV1> UpdateAsync(string correlationId, BeaconV1 item);
        Task<BeaconV1> DeleteByIdAsync(string correlationId, string id);
    }
}

```
