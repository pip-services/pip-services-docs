---
type: docs
no_list: true
title: "Step 5. Implementing a Mock Client"
linkTitle: "Step 5. Mock Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-python"
---

Complex systems usually experience difficulties when it comes to writing unit tests for a logic that calls external services. These tests are supposed to run quickly and without any additional infrastructure. The standard approach to solving this problem is to replace the calls to external services with a local approximation (a.k.a. a mock). However, writing mocks takes time and doesn’t always guarantee functionality that matches the real service.

In our projects, we’ve come to the conclusion that it pays off to develop mocks alongside the real clients and test them using common tests, to guarantee that their behavior is identical. This way, all users of the microservice will receive both the client and mock from the library and will be able to start coding logic and unit tests for it without delay.

In this step we will be demonstrating how Mock clients are developed and how they can be tested using the tests we created earlier.

The test client has to implement the same interface that the other clients did. However, the client’s methods are going to contain code that only imitates the microservice’s behavior.

The code for this client is showed below:

**/src/version1/BeaconsMockClientV1.py**

```python

import copy
from typing import List, Any, Optional

from pip_services3_commons.data import FilterParams, IdGenerator, PagingParams, DataPage

from src.clients.version1.IBeaconsClientV1 import IBeaconsClientV1
from src.data.version1 import BeaconV1

filtered = filter


class BeaconsMockClientV1(IBeaconsClientV1):
    _max_page_size = 100
    _items: List[BeaconV1] = []

    def compose_filter(self, filter: FilterParams) -> Any:
        filter = filter or FilterParams()
        id = filter.get_as_nullable_string("id")
        site_id = filter.get_as_nullable_string("site_id")
        label = filter.get_as_nullable_string('label')
        udi = filter.get_as_nullable_string('udi')
        udis = filter.get_as_object('udis')

        if type(udis) == str:
            udis = udis.split(',')

        if not (type(udis) == list):
            udis = None

        def filter_beacons(item):
            if id is not None and item['id'] != id:
                return False
            if site_id is not None and item['site_id'] != site_id:
                return False
            if label is not None and item['label'] != label:
                return False
            if udi is not None and item['udi'] != udi:
                return False
            if udis is not None and item['udi'] not in udis:
                try:
                    udis.index(item.udi)
                except Exception as e:
                    return False
            return True

        return filter_beacons

    def get_beacons(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams) -> DataPage:
        filter_beacons = self.compose_filter(filter)
        beacons = [item for item in self._items if filter_beacons(item) is True]

        # Extract a page
        paging = paging if paging is not None else PagingParams()
        skip = paging.get_skip(-1)
        take = paging.get_take(self._max_page_size)
        total = None
        if paging.total:
            total = len(beacons)
        if skip > 0:
            beacons = beacons[skip:]
            beacons = beacons[:take]

        page = DataPage(beacons, total)
        return page

    def get_beacon_by_id(self, correlation_id: Optional[str], id: str) -> dict:
        beacons = [item for item in self._items if item['id'] == id]
        beacon = beacons[0] if len(beacons) > 0 else None
        return beacon

    def get_beacon_by_udi(self, correlation_id: Optional[str], udi: str) -> dict:
        beacons = [item for item in self._items if item['udi'] == udi]
        beacon = beacons[0] if len(beacons) > 0 else None
        return beacon

    def get_beacons_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams,
                              sort=None, select=None):
        items = list(self._items)

        # Filter and sort
        if filter is not None:
            items = list(filtered(filter, items))
        if sort is not None:
            items = list(items.sort(key=sort))
            # items = sorted(items, sort)

        # Prepare paging parameters
        paging = paging if not (paging is None) else PagingParams()
        skip = paging.get_skip(-1)
        take = paging.get_take(self._max_page_size)

        # Get a page
        data = items
        if skip > 0:
            data = data[skip:]
        if take > 0:
            data = data[:take + 1]

        # Convert values
        if not (select is None):
            data = map(select, data)

        # Return a page
        return DataPage(data, len(items))

    def calculate_position(self, correlation_id: Optional[str], site_id: str, udis: List[str]) -> Any:
        beacons: List[BeaconV1]
        position = None

        if udis is None or len(udis) == 0:
            return

        page = self.get_beacons(correlation_id, FilterParams.from_tuples(
            'site_id', site_id,
            'udis', udis
        ), None)
        beacons = page.data if page.data else []

        lat = 0
        lng = 0
        count = 0

        for beacon in beacons:
            if beacon['center'] is not None and beacon['center']['type'] == "Point" and len(
                    beacon['center']['coordinates']) > 1:
                lng = lng + beacon['center']['coordinates'][0]
                lat = lat + beacon['center']['coordinates'][1]
                count = count + 1

        if count > 0:
            position = {"type": 'Point', "coordinates": [lng / count, lat / count]}
            return position
        return None

    def create_beacon(self, correlation_id: Optional[str], beacon: BeaconV1) -> dict:
        if beacon is None:
            return

        beacon = copy.deepcopy(beacon)
        beacon.id = beacon.id or IdGenerator.next_long()
        self._items.append(beacon)
        return beacon

    def update_beacon(self, correlation_id: Optional[str], beacon: BeaconV1) -> dict:
        try:
            index = list(map(lambda x: x.id, self._items)).index(beacon['id'])
        except ValueError:
            return

        beacon = copy.deepcopy(beacon)
        self._items[index] = beacon
        return beacon

    def delete_beacon_by_id(self, correlation_id: Optional[str], beacon_id: str) -> dict:
        try:
            index = list(map(lambda x: x.id, self._items)).index(beacon_id)
        except ValueError:
            return

        beacon = self._items[index]
        del self._items[index]

        return beacon
```

Now let’s test the client we’ve created. We’ll be using the set of tests that we developed in one of the previous steps, and adding just one test file that will bring it all together. The source of this file is presented below:

**/test/version1/test_BeaconsMockClientV1.py**

```python
from src.clients.version1.BeaconsMockClientV1 import BeaconsMockClientV1

from test.clients.version1.BeaconsClientV1Fixture import BeaconsClientV1Fixture


class TestBeaconsMockClientV1:
    client: BeaconsMockClientV1
    fixture: BeaconsClientV1Fixture

    @classmethod
    def setup_class(cls):
        cls.client = BeaconsMockClientV1()
        cls.fixture = BeaconsClientV1Fixture(cls.client)

    def test_crud_operations(self):
        self.fixture.test_crud_operations()

    def test_calculate_position(self):
        self.fixture.test_calculate_position()


```

Create a file with the tests and run them. All the tests should pass, even though the server-side code wasn’t actually used anywhere.

This technique becomes very useful when developing microservices that bring together multiple microservices by means of their clients (e.g. a facade microservice). It allows us to perform functional testing without having to run the entire infrastructure.

To performing non-fuctional testing, we need to generate a large amount of realistic data. Users usually don’t know the entire data structure with all of its variations and exceptions. The next component we will be adding to our client library is a random data generator. This component can be used by the microservice’s users to create quality tests. The implementation is usually done in the form of static methods that either return an entire object, or just some part of its parameters. Let’s take a look at what an implementation of such a generator for the **BeaconsV1** data object would look like. The generator’s code is listed below:


```python
# -*- coding: utf-8 -*-
from pip_services3_commons.random import RandomArray, RandomInteger

from src.data.version1 import BeaconTypeV1, BeaconV1


class RandomBeaconV1:
    @staticmethod
    def next_beacon_type() -> str:
        return RandomArray.pick(
            [
                BeaconTypeV1.AltBeacon, BeaconTypeV1.EddyStoneUdi,
                BeaconTypeV1.Unknown, BeaconTypeV1.iBeacon
            ]
        )

    @staticmethod
    def next_beacon() -> BeaconV1:
        return BeaconV1(
            id=None,
            site_id=None,
            type=RandomBeaconV1.next_beacon_type(),
            udi=RandomArray.pick(['00001', '00002', '00003', '00004']),
            label=None,
            center=RandomBeaconV1.next_beacon_type(),
            radius=RandomInteger.next_integer(1, 1000)
        )

```

In this implementation, the ranges of generated values are statically set, but they can be passed as parameters to the methods and dynamically set as needed.
Using this instrument, we can easily generate large volumes of realistic data. This, in turn, can be used to test, for example, how fast the system can create elements in the persistence it’s using.

In the [Step 6. Testing the Client with a Remote Microservice](../step5), we’ll be taking a look at how to test our client using a microservice that is remotely deployed in a Docker container.


<span class="hide-title-link">

### [Step 6. Testing the Client with a Remote Microservice](../step5)

</span>
