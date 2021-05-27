---
type: docs
no_list: true
title: "Step 4. Implementing a controller"
linkTitle: "Step 4. Controller"
gitUrl: "https://github.com/pip-services-samples/service-beacons-python"
---

Now that we know a bit about how we are going to be storing data and how microservice configuration works, it’s time to add some logic to our service. Our microservice needs to be able to calculate a device’s position based on the beacons it “sees”, as well as initiate CRUD operations for the data it handles. Let’s create a **logic** folder under the **src** directory and start by defining an interface:

**/src/logic/IBeaconsController.py**

```python
from typing import Any, List, Optional

from pip_services3_commons.data import PagingParams, FilterParams, DataPage

from src.data.version1 import BeaconV1


class IBeaconsController:
    def get_beacons_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams) -> DataPage:
        raise NotImplementedError('Method from interface definition')

    def get_beacon_by_id(self, correlation_id: Optional[str], id: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def get_beacon_by_udi(self, correlation_id: Optional[str], udi: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def calculate_position(self, correlation_id: Optional[str], site_id: str, udis: List[str]) -> Any:
        raise NotImplementedError('Method from interface definition')

    def create_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def update_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def delete_beacon_by_id(self, correlation_id: Optional[str], id: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')


```

Once our interface is ready, we can move on to implementing the actual controller. Its code is also going to be quite simple, as all we need to write is one method for calculating a device’s position, and the other methods will just be wrappers for the methods we wrote in our persistence components.

**/src/logic/BeaconsController.py**

```python
from typing import List, Any, Optional

from pip_services3_commons.commands import ICommandable, CommandSet
from pip_services3_commons.config import IConfigurable, ConfigParams
from pip_services3_commons.data import FilterParams, PagingParams, DataPage
from pip_services3_commons.refer import IReferenceable, Descriptor, IReferences

from ..data.version1 import BeaconV1
from ..logic.BeaconsCommandSet import BeaconsCommandSet
from ..logic.IBeaconsController import IBeaconsController
from ..persistence import IBeaconsPersistence


class BeaconsController(IBeaconsController, IConfigurable, IReferenceable, ICommandable):

    def __init__(self):
        self.__persistence: IBeaconsPersistence = None
        self.__command_set: BeaconsCommandSet = None

    def configure(self, config: ConfigParams):
        pass

    def get_command_set(self) -> CommandSet:
        if self.__command_set is None:
            self.__command_set = BeaconsCommandSet(self)
        return self.__command_set

    def set_references(self, references: IReferences):
        self.__persistence = references.get_one_required(Descriptor("beacons", "persistence", "*", "*", "1.0"))

    def get_beacons_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams) -> DataPage:
        return self.__persistence.get_page_by_filter(correlation_id, filter, paging)

    def get_beacon_by_id(self, correlation_id: Optional[str], id: str) -> BeaconV1:
        return self.__persistence.get_one_by_id(correlation_id, id)

    def get_beacon_by_udi(self, correlation_id: Optional[str], udi: str) -> BeaconV1:
        return self.__persistence.get_one_by_udi(correlation_id, udi)

    def calculate_position(self, correlation_id: Optional[str], site_id: str, udis: List[str]) -> Any:
        if udis is None or len(udis) == 0:
            return None

        result = self.__persistence.get_page_by_filter(correlation_id,
                                                       FilterParams.from_tuples("site_id", site_id, "udis", udis), None)
        beacons = result.data

        lat = 0
        lng = 0
        count = 0
        for beacon in beacons:
            if beacon.center is not None and beacon.center['type'] == "Point" and len(
                    beacon.center['coordinates']) > 1:
                lng = lng + beacon.center['coordinates'][0]
                lat = lat + beacon.center['coordinates'][1]
                count = count + 1

        if count == 0:
            return None

        position = {"type": 'Point', "coordinates": [lng / count, lat / count]}
        return position

    def create_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> BeaconV1:
        return self.__persistence.create(correlation_id, entity)

    def update_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> BeaconV1:
        return self.__persistence.update(correlation_id, entity)

    def delete_beacon_by_id(self, correlation_id: Optional[str], id: str) -> BeaconV1:
        return self.__persistence.delete_by_id(correlation_id, id)

```

Pay special attention to the following two methods in the code above: 
- `set_references`
- `get_commandSet`

The first one sets a dependency upon a persistence using the descriptor **beacons:persistence:*:*:1.0.** This descriptor reads: we don’t necessarily care which persistence we are given, as long as it implements the IBeaconsPersistence interface via the Referenceable pattern. This way, our controller can be used with the memory persistence, the mongoDB one, or any other one that meets this requirement.

The second method is used to get a set of commands, with which we can control this controller using the Commandable pattern. In our case, it will be used by the commandable HTTP service. If you’re not yet familiar with the Commandable pattern, make sure to find some time and read about it [here](../../../commons/commands/icommandable). To complete this pattern, lets implement a class called `BeaconsCommandSet`:

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

To sum up this class’s code: we’re creating commands for each of the controller’s methods, and then registering them in the constructor. To create a command, we give it a name, a validation schema (if needed), and a callback function with the following three parameters:

- `correlationId`: string – used to identify the operation,
- `args`: Parameters - the set of parameters received from the command being called,
- `callback` – callback function for returning the command’s result, or an error, if one occurs.

To be sure that our new methods are working correctly, let’s add some tests for the controller. The code for testing the controller is listed below:

**/test/logic/test_BeaconsController.py**

```python
from pip_services3_commons.data import FilterParams, PagingParams
from pip_services3_commons.refer import References, Descriptor

from src.data.version1 import BeaconV1, BeaconTypeV1
from src.logic.BeaconsController import BeaconsController
from src.persistence.BeaconsMemoryPersistence import BeaconsMemoryPersistence

BEACON1 = BeaconV1("1", "1", BeaconTypeV1.AltBeacon, "00001", "TestBeacon1", {"type": 'Point', "coordinates": [0, 0]},
                   50)
BEACON2 = BeaconV1("2", "1", BeaconTypeV1.iBeacon, "00002", "TestBeacon2", {"type": 'Point', "coordinates": [2, 2]}, 70)
BEACON3 = BeaconV1("3", "2", BeaconTypeV1.AltBeacon, "00003", "TestBeacon3", {"type": 'Point', "coordinates": [10, 10]},
                   50)


class TestBeaconsController():
    _persistence: BeaconsMemoryPersistence
    _controller: BeaconsController

    @classmethod
    def setup_class(cls):
        cls._persistence = BeaconsMemoryPersistence()
        cls._controller = BeaconsController()
        references = References.from_tuples(Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'),
                                            cls._persistence,
                                            Descriptor('beacons', 'controller', 'default', 'default', '1.0'),
                                            cls._controller)

        cls._controller.set_references(references)
        cls._persistence.open(None)

    @classmethod
    def teardown_class(cls):
        cls._persistence.close(None)

    def test_crud_operations(self):
        # Create the first beacon
        beacon1 = self._controller.create_beacon(None, BEACON1)

        assert beacon1 is not None
        assert beacon1.id == BEACON1.id
        assert beacon1.site_id == BEACON1.site_id
        assert beacon1.udi == BEACON1.udi
        assert beacon1.type == BEACON1.type
        assert beacon1.label == BEACON1.label
        assert beacon1.center is not None

        # Create the second beacon
        beacon2 = self._controller.create_beacon(None, BEACON2)

        assert beacon2 is not None
        assert beacon2.id == BEACON2.id
        assert beacon2.site_id == BEACON2.site_id
        assert beacon2.udi == BEACON2.udi
        assert beacon2.type == BEACON2.type
        assert beacon2.label == BEACON2.label
        assert beacon2.center is not None

        # Get all beacons
        page = self._controller.get_beacons_by_filter(None, FilterParams(), PagingParams())
        assert page is not None
        assert len(page.data) == 2

        beacon1 = page.data[0]

        # Update the beacon
        beacon1.label = "ABC"
        beacon = self._controller.update_beacon(None, beacon1)
        assert beacon is not None
        assert beacon1.id == beacon.id
        assert "ABC" == beacon.label

        # Get beacon by udi
        beacon = self._controller.get_beacon_by_udi(None, beacon1.udi)
        assert beacon is not None
        assert beacon.id == beacon1.id

        # Delete beacon
        self._controller.delete_beacon_by_id(None, beacon1.id)

        # Try to get deleted beacon
        beacon = self._controller.get_beacon_by_id(None, beacon1.id)
        assert beacon is None

    def test_calculate_position(self):
        # Create the first beacon
        beacon1 = self._controller.create_beacon(None, BEACON1)

        assert beacon1 is not None
        assert beacon1.id == BEACON1.id
        assert beacon1.site_id == BEACON1.site_id
        assert beacon1.udi == BEACON1.udi
        assert beacon1.type == BEACON1.type
        assert beacon1.label == BEACON1.label
        assert beacon1.center is not None

        # Create the second beacon
        beacon2 = self._controller.create_beacon(None, BEACON2)

        assert beacon2 is not None
        assert beacon2.id == BEACON2.id
        assert beacon2.site_id == BEACON2.site_id
        assert beacon2.udi == BEACON2.udi
        assert beacon2.type == BEACON2.type
        assert beacon2.label == BEACON2.label
        assert beacon2.center is not None

        # Calculate position for one beacon
        position = self._controller.calculate_position(None, '1', ['00001'])
        assert position is not None
        assert "Point" == position["type"]
        assert 2 == len(position["coordinates"])
        
```

These tests can be run using the same npm test command that we used to run the persistence tests.

Our service is now just one step away from being completed! All that we have left to write is [Step 5. Implementing an HTTP service.](../step5)

<span class="hide-title-link">

### [Step 5. Implementing an HTTP service.](../step5)

</span>