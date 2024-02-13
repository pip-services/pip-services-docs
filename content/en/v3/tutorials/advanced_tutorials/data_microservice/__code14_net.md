
**/src/interfaces/logic/BeaconsCommandSet.cs**

```cs
namespace Beacons.Logic
{
    public class BeaconsCommandSet : CommandSet
    {
        private IBeaconsController _controller;

        public BeaconsCommandSet(IBeaconsController controller)
        {
            _controller = controller;

            AddCommand(MakeGetBeaconsCommand());
            AddCommand(MakeGetBeaconByIdBeaconsCommand());
            AddCommand(MakeGetBeaconByUdiCommand());
            AddCommand(MakeCalculatePositionCommand());
            AddCommand(MakeCreateBeaconCommand());
            AddCommand(MakeUpdateBeaconCommand());
            AddCommand(MakeDeleteBeaconByIdCommand());
        }

        private ICommand MakeGetBeaconsCommand()
        {
            return new Command(
                "get_beacons",
                new ObjectSchema()
                    .WithOptionalProperty("filter", new FilterParamsSchema())
                    .WithOptionalProperty("paging", new PagingParamsSchema()),
                async (correlationId, parameters) =>
                {
                    var filter = FilterParams.FromValue(parameters.Get("filter"));
                    var paging = PagingParams.FromValue(parameters.Get("paging"));
                    return await _controller.GetBeaconsAsync(correlationId, filter, paging);
                });
        }

        private ICommand MakeGetBeaconByIdBeaconsCommand()
        {
            return new Command(
                "get_beacon_by_id",
                new ObjectSchema()
                    .WithRequiredProperty("beacon_id", TypeCode.String),
                async (correlationId, parameters) =>
                {
                    var id = parameters.GetAsString("beacon_id");
                    return await _controller.GetBeaconByIdAsync(correlationId, id);
                });
        }

        private ICommand MakeGetBeaconByUdiCommand()
        {
            return new Command(
                "get_beacon_by_udi",
                new ObjectSchema()
                    .WithRequiredProperty("udi", TypeCode.String),
                async (correlationId, parameters) =>
                {
                    var udi = parameters.GetAsString("udi");
                    return await _controller.GetBeaconByUdiAsync(correlationId, udi);
                });
        }

        private ICommand MakeCalculatePositionCommand()
        {
            return new Command(
                "calculate_position",
                new ObjectSchema()
                    .WithRequiredProperty("site_id", TypeCode.String)
                    .WithRequiredProperty("udis", TypeCode.Array),
                async (correlationId, parameters) =>
                {
                    var siteId = parameters.GetAsString("site_id");
                    string[] udis = ConvertToStringList(parameters.Get("udis"));

                    return await _controller.CalculatePositionAsync(correlationId, siteId, udis);
                });
        }

        private ICommand MakeCreateBeaconCommand()
        {
            return new Command(
                "create_beacon",
                new ObjectSchema()
                    .WithRequiredProperty("beacon", new BeaconV1Schema()),
                async (correlationId, parameters) =>
                {
                    var beacon = ConvertToBeacon(parameters.GetAsObject("beacon"));
                    return await _controller.CreateBeaconAsync(correlationId, beacon);
                });
        }

        private ICommand MakeUpdateBeaconCommand()
        {
            return new Command(
               "update_beacon",
               new ObjectSchema()
                    .WithRequiredProperty("beacon", new BeaconV1Schema()),
               async (correlationId, parameters) =>
               {
                   var beacon = ConvertToBeacon(parameters.GetAsObject("beacon"));
                   return await _controller.UpdateBeaconAsync(correlationId, beacon);
               });
        }

        private ICommand MakeDeleteBeaconByIdCommand()
        {
            return new Command(
               "delete_beacon_by_id",
               new ObjectSchema()
                   .WithRequiredProperty("beacon_id", TypeCode.String),
               async (correlationId, parameters) =>
               {
                   var id = parameters.GetAsString("beacon_id");
                   return await _controller.DeleteBeaconByIdAsync(correlationId, id);
               });
        }

        private BeaconV1 ConvertToBeacon(object value)
        {
            return JsonConverter.FromJson<BeaconV1>(JsonConverter.ToJson(value));
        }

        private string[] ConvertToStringList(object value)
        {
            return JsonConverter.FromJson<string[]>(JsonConverter.ToJson(value));
        }

    }
}
```
