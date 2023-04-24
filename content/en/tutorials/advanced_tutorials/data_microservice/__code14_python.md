
**/src/logic/BeaconsCommandSet.py**

```python
from pip_services3_commons.commands import CommandSet, Command, ICommand
from pip_services3_commons.convert import TypeCode
from pip_services3_commons.data import FilterParams, PagingParams
from pip_services3_commons.validate import ObjectSchema, FilterParamsSchema, PagingParamsSchema, ArraySchema

from . import IBeaconsController
from ..data.version1 import BeaconV1Schema


class BeaconsCommandSet(CommandSet):

    def __init__(self, controller: IBeaconsController):
        super(BeaconsCommandSet, self).__init__()

        self.__controller: IBeaconsController = controller

        self.add_command(self.__make_get_beacons_command())
        self.add_command(self.__make_get_beacon_by_id_command())
        self.add_command(self.__make_get_beacon_by_udi_command())
        self.add_command(self.__make_calculate_position_command())
        self.add_command(self.__make_create_beacon_command())
        self.add_command(self.__make_update_beacon_command())
        self.add_command(self.__make_delete_beacon_by_id_command())

    def __make_get_beacons_command(self) -> ICommand:
        def handler(correlation_id, args):
            filter = FilterParams.from_value(args.get("filter"))
            paging = PagingParams.from_value(args.get("paging"))
            return self.__controller.get_beacons_by_filter(correlation_id, filter, paging)

        return Command("get_beacons", ObjectSchema().with_optional_property("filter", FilterParamsSchema())
                       .with_optional_property("paging", PagingParamsSchema()), handler)

    def __make_get_beacon_by_id_command(self) -> ICommand:
        def handler(correlation_id, args):
            id = args.get_as_string("id")
            return self.__controller.get_beacon_by_id(correlation_id, id)

        return Command("get_beacon_by_id", ObjectSchema().with_required_property("id", TypeCode.String), handler)

    def __make_get_beacon_by_udi_command(self) -> ICommand:
        def handler(correlation_id, args):
            id = args.get_as_string("udi")
            return self.__controller.get_beacon_by_udi(correlation_id, id)

        return Command("get_beacon_by_udi", ObjectSchema().with_required_property("udi", TypeCode.String), handler)

    def __make_calculate_position_command(self) -> ICommand:
        def handler(correlation_id, args):
            site_id = args.get_as_string("site_id")
            udis = args.get_as_nullable_string("udis")
            return self.__controller.calculate_position(correlation_id, site_id, udis)

        return Command("calculate_position", ObjectSchema().with_required_property("site_id", TypeCode.String)
                       .with_required_property("udis", ArraySchema("String")), handler)

    def __make_create_beacon_command(self) -> ICommand:
        def handler(correlation_id, args):
            entity = args.get("beacon")
            return self.__controller.create_beacon(correlation_id, entity)

        return Command("create_beacon", ObjectSchema().with_optional_property("beacon", BeaconV1Schema()), handler)

    def __make_update_beacon_command(self) -> ICommand:
        def handler(correlation_id, args):
            entity = args.get("beacon")
            return self.__controller.update_beacon(correlation_id, entity)

        return Command("update_beacon", ObjectSchema().with_optional_property("beacon", BeaconV1Schema()), handler)

    def __make_delete_beacon_by_id_command(self) -> ICommand:
        def handler(correlation_id, args):
            id = args.get_as_string("id")
            return self.__controller.delete_beacon_by_id(correlation_id, id)

        return Command("delete_beacon_by_id", ObjectSchema().with_required_property("id", TypeCode.String), handler)


```
