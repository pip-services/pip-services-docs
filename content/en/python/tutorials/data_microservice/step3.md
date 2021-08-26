---
type: docs
no_list: true
title: "Step 4. Implementing persistence components"
linkTitle: "Step 4. Persistence"
gitUrl: "https://github.com/pip-services-samples/service-beacons-python"
---

In this step, we’ll be creating components for persisting the data model we defined in the previous step. In our projects, we always create at least two persistences: one for storing data in-memory (used for testing), and another for storing data in an external database (used in production). With the Beacons example, we’ll be doing the same.

Let’s start by navigating to the **src** directory and creating a **persistence** directory inside it. This directory is going to contain all of the files that relate to this step of the tutorial.

The first thing we are going to do is define what functionality our persistent storage should have. We can define these in a form of an interface and name it `IBeaconsPersistence`

**/src/persistence/IBeaconsPersistence.py**

```python
from typing import Optional

from pip_services3_commons.data import PagingParams, FilterParams, DataPage

from src.data.version1 import BeaconV1


class IBeaconsPersistence:

    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams) -> DataPage:
        raise NotImplementedError('Method from interface definition')

    def get_one_by_id(self, correlation_id: Optional[str], id: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def get_one_by_udi(self, correlation_id: Optional[str], udi: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def create(self, correlation_id: Optional[str], entity: BeaconV1) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def update(self, correlation_id: Optional[str], entity: BeaconV1) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def delete_by_id(self, correlation_id: Optional[str], id: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')
```

The first persistence to implement this interface will be the memory persistence, which we will name **BeaconsMemoryPersistence**. This class will need to extend the `IdentifiableMemoryPersistence` class from the **pip-services3-data** module, and have a few additional functions added to it. One of these functions will be used to create filters for the `get_page_by_filter` method that we’re going to override from the parent class. This function will be called `__compose_filter`, as it’s going to allow us to filter data in accordance with the received filtering parameters. The overriding `get_page_by_filter` method then simply calls the parent’s method, passing the `__compose_filter` function as a filter parameter. The second function that we will need to implement is the `get_one_by_udi` method, whose purpose will be to retrieve a beacon by its `udi`.

The resulting code for this class is listed below:

**/src/persistence/BeaconsMemoryPersistence.py**

```python
from typing import Optional, Any, Callable

from pip_services3_commons.data import FilterParams, DataPage, PagingParams
from pip_services3_data.persistence import IdentifiableMemoryPersistence

from .IBeaconsPersistence import IBeaconsPersistence
from ..data.version1 import BeaconV1


class BeaconsMemoryPersistence(IdentifiableMemoryPersistence, IBeaconsPersistence):

    def __init__(self):
        super(BeaconsMemoryPersistence, self).__init__()
        self._max_page_size = 1000

    def __compose_filter(self, filter: FilterParams) -> Callable:
        filter = filter if filter is not None else FilterParams()

        id = filter.get_as_nullable_string("id")
        site_id = filter.get_as_nullable_string("site_id")
        label = filter.get_as_nullable_string("label")
        udi = filter.get_as_nullable_string("udi")
        udis = filter.get_as_object("udis")
        if udis is not None and len(udis) > 0:
            udis = udis.split(",")

        def filter_beacons(item):
            if id is not None and item.id != id:
                return False
            if site_id is not None and item.site_id != site_id:
                return False
            if label is not None and item.label != label:
                return False
            if udi is not None and item.udi != udi:
                return False
            if udis is not None and item.udi not in udis:
                return False
            return True

        return filter_beacons

    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams,
                           sort: Any = None, select: Any = None) -> DataPage:

        return super(BeaconsMemoryPersistence, self).get_page_by_filter(correlation_id,
                                                                        self.__compose_filter(filter), paging=paging)

    def get_one_by_udi(self, correlation_id: Optional[str], udi: str) -> BeaconV1:
        if udi is None:
            return None
        for item in self._items:
            if udi == item.udi:
                return item

```

And that’s pretty much it for the memory persistence.

Now let’s move on to something a bit more sophisticated - a MongoDB persistence. Here we’re also going to use an already existing base class, `IdentifiableMongoDbPersistence`, from the **pip-services3-mongodb** module, and write a few functions, the most important of which will be `__compose_filter`. This time around, its implementation is going to contain syntax for creating database requests. The resulting code for this class is listed below: 

**/src/persistence/BeaconsMongoDbPersistence.py**

```python
from typing import Any, Optional

from pip_services3_commons.data import FilterParams, PagingParams, DataPage
from pip_services3_mongodb.persistence import IdentifiableMongoDbPersistence

from .IBeaconsPersistence import IBeaconsPersistence
from ..data.version1 import BeaconV1


class BeaconsMongoDbPersistence(IdentifiableMongoDbPersistence, IBeaconsPersistence):

    def __init__(self):
        super(BeaconsMongoDbPersistence, self).__init__("beacons")
        self._max_page_size = 1000

    def compose_filter(self, filter: FilterParams) -> Any:
        filter = filter if filter is not None else FilterParams()
        criteria = []

        id = filter.get_as_nullable_string("id")
        if id is not None:
            criteria.append({"id": id})
        site_id = filter.get_as_nullable_string("site_id")
        if site_id is not None:
            criteria.append({"site_id": site_id})
        label = filter.get_as_nullable_string("label")
        if label is not None:
            criteria.append({"label": label})
        udi = filter.get_as_nullable_string("udi")
        if udi is not None:
            criteria.append({"udi": udi})
        udis = filter.get_as_object("udis")
        if udis is not None and len(udis) > 0:
            udis = udis.split(",")
            criteria.append({"udi": {"$in": udis}})
        return {"$and": criteria} if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams,
                           sort: Any = None, select: Any = None) -> DataPage:
        filter = filter if filter is not None else FilterParams()
        return super(BeaconsMongoDbPersistence, self).get_page_by_filter(correlation_id, self.compose_filter(filter),
                                                                         paging, None, None)

    def get_one_by_udi(self, correlation_id: Optional[str], udi: str) -> BeaconV1:
        if udi is None:
            return None
        item = self._collection.find_one({'udi': udi})
        item = self._convert_to_public(item)

        if item is None:
            self._logger.trace(correlation_id, "Found beacon by %s", udi)
        else:
            self._logger.trace(correlation_id, "Cannot find beacon by %s", udi)

        return item
```

Let’s take a quick look at what’s in this code. A basic set of CRUD operations are already implemented in the data module. There’s minimal code that needs to be written by us as developers for this class: just a filter function, and non-standard methods for searching by a specific data field. The rest of the methods that we defined in our interface are already implemented in the parent class.

To make sure that the code does just what we expect it to do, let’s add some tests. We’ll be placing the files with our tests in the **test** directory and organizing them into subdirectories, whose names will reflect the components they are testing.

Thanks to the modular structure of microservices, each component is easily testable with the help of simple mock tests. We’ll start with creating a class that contains a set of testable commands and checks the results we receive with the help of standard testing libraries. This class will be accepting any persistence that implements our `IBeaconsPersistence` interface as a parameter. This way we can use the same set of commands to test both of our persistence implementations. This set of commands should contain standard CRUD operations, which are implemented in the parent class, as well as the methods we’ve added in the child classes.

**/test/persistence/BeaconsPersistenceFixture.py**

```python
from pip_services3_commons.data import PagingParams, FilterParams

from src.data.version1 import BeaconV1, BeaconTypeV1
from src.persistence import IBeaconsPersistence

BEACON1 = BeaconV1("1", "1", BeaconTypeV1.AltBeacon, "00001", "TestBeacon1", {"type": 'Point', "coordinates": [0, 0]}, 50)
BEACON2 = BeaconV1("2", "1", BeaconTypeV1.iBeacon, "00002", "TestBeacon2", {"type": 'Point', "coordinates": [2, 2]}, 70)
BEACON3 = BeaconV1("3", "2", BeaconTypeV1.AltBeacon, "00003", "TestBeacon3", {"type": 'Point', "coordinates": [10, 10]}, 50)

class BeaconsPersistenceFixture():
    _persistence: IBeaconsPersistence = None

    def __init__(self, persistence: IBeaconsPersistence):
        self._persistence = persistence

    def test_create_beacons(self):
        #Create the first beacon
        beacon1 = self._persistence.create(None, BEACON1)

        assert beacon1 != None
        assert beacon1.id == BEACON1.id
        assert beacon1.site_id == BEACON1.site_id
        assert beacon1.udi == BEACON1.udi
        assert beacon1.type == BEACON1.type
        assert beacon1.label == BEACON1.label
        assert beacon1.center != None

        #Create the second beacon
        beacon2 = self._persistence.create(None, BEACON2)

        assert beacon2 != None
        assert beacon2.id == BEACON2.id
        assert beacon2.site_id == BEACON2.site_id
        assert beacon2.udi == BEACON2.udi
        assert beacon2.type == BEACON2.type
        assert beacon2.label == BEACON2.label
        assert beacon2.center != None

        #Create the third beacon
        beacon3 = self._persistence.create(None, BEACON3)

        assert beacon3 != None
        assert beacon3.id == BEACON3.id
        assert beacon3.site_id == BEACON3.site_id
        assert beacon3.udi == BEACON3.udi
        assert beacon3.type == BEACON3.type
        assert beacon3.label == BEACON3.label
        assert beacon3.center != None

    def test_crud_operations(self):
        #Create 3 beacons
        self.test_create_beacons()

        #Get all beacons
        page = self._persistence.get_page_by_filter(None, FilterParams(), PagingParams())
        assert page != None
        assert len(page.data) == 3

        beacon1 = page.data[0]

        #Update the beacon
        beacon1['label'] = "ABC"
        beacon = self._persistence.update(None, beacon1)
        assert beacon != None
        assert beacon1.id == beacon.id
        assert "ABC" == beacon.label

        #Get beacon by udi
        beacon = self._persistence.get_one_by_udi(None, beacon1.udi)
        assert beacon != None
        assert beacon.id == beacon1.id

        #Delete beacon
        self._persistence.delete_by_id(None, beacon1.id)

        #Try to get deleted beacon
        beacon = self._persistence.get_one_by_id(None, beacon1.id)
        assert beacon == None

    def test_get_with_filter(self):
        #Create 3 beacons
        self.test_create_beacons()

        #Filter by id
        page = self._persistence.get_page_by_filter(None, FilterParams.from_tuples("id", "1"), PagingParams())
        assert page != None
        assert len(page.data) == 1

        #Filter by udi
        page = self._persistence.get_page_by_filter(None, FilterParams.from_tuples("udi", "00002"), PagingParams())
        assert page != None
        assert len(page.data) == 1

        #Filter by udis
        page = self._persistence.get_page_by_filter(None, FilterParams.from_tuples("udis", '00001,00003'), PagingParams())
        assert page != None
        assert len(page.data) == 2

        #Filter by udi
        page = self._persistence.get_page_by_filter(None, FilterParams.from_tuples("site_id", "1"), PagingParams())
        assert page != None
        assert len(page.data) == 2
```

Now that we have a set of tests, we can dive into the testing itself. To do this, we’ll create files for testing each of our persistences and run them.

**/test/persistence/test_BeaconMemoryPersistence.py**

```python
from src.persistence.BeaconsMemoryPersistence import BeaconsMemoryPersistence
from .BeaconsPersistenceFixture import BeaconsPersistenceFixture


class TestBeaconMemoryPersistence():
    persistence: BeaconsMemoryPersistence
    fixture: BeaconsPersistenceFixture

    @classmethod
    def setup_class(cls):
        cls.persistence = BeaconsMemoryPersistence()
        cls.fixture = BeaconsPersistenceFixture(cls.persistence)

    def setup_method(self, method):
        self.persistence.clear(None)

    def test_crud_operations(self):
        self.fixture.test_crud_operations()

    def test_get_with_filter(self):
        self.fixture.test_get_with_filter()

```

To run these tests, run the command npm test from a terminal at the root of the project.

*“But where exactly is the data going to be stored when we get the service actually up and running?”* you may ask. Jumping ahead, we’ll tell you that the config.yml configuration file takes care of that. It contains configurations for all of the service’s components, such as: which logger to use, where performance counter output should be, what database to connect to and using what parameters, etc. We’ll discuss this in more detail later on in this tutorial.

Now that we can persist our data, let’s move on to [Step 4. Implementing a controller.](../step4)

<span class="hide-title-link">

### [Step 5. Implementing a controller.](../step4)

</span>
