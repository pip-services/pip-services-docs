
**src/version1/BeaconsDirectClientV1.cs**

```cs
public class BeaconsDirectClientV1 : DirectClient<IBeaconsController>, IBeaconsClientV1
{
    public BeaconsDirectClientV1() : base()
    {
        _dependencyResolver.Put("controller", new Descriptor("beacons", "controller", "*", "*", "1.0"));
    }

    public async Task<DataPage<BeaconV1>> GetBeaconsAsync(
        string correlationId, FilterParams filter, PagingParams paging)
    {
        var methodName = "beacons.get_beacons";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.GetBeaconsAsync(correlationId, filter, paging);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> GetBeaconByIdAsync(string correlationId, string id)
    {
        var methodName = "beacons.get_beacon_by_id";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.GetBeaconByIdAsync(correlationId, id);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> GetBeaconByUdiAsync(string correlationId, string udi)
    {
        var methodName = "beacons.get_beacon_by_udi";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.GetBeaconByUdiAsync(correlationId, udi);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<CenterObjectV1> CalculatePositionAsync(string correlationId, string siteId, string[] udis)
    {
        var methodName = "beacons.calculate_position";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.CalculatePositionAsync(correlationId, siteId, udis);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> CreateBeaconAsync(string correlationId, BeaconV1 beacon)
    {
        var methodName = "beacons.create_beacon";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.CreateBeaconAsync(correlationId, beacon);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> UpdateBeaconAsync(string correlationId, BeaconV1 beacon)
    {
        var methodName = "beacons.update_beacon";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.UpdateBeaconAsync(correlationId, beacon);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> DeleteBeaconByIdAsync(string correlationId, string id)
    {
        var methodName = "beacons.delete_beacon_by_id";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.DeleteBeaconByIdAsync(correlationId, id);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }
}


```
