
**/pip_facades_sample_python/operations/version1/BeaconsOperationsV1.py**

```python
# -*- coding: utf-8 -*-

from typing import Optional

import bottle
from pip_services3_commons.convert import JsonConverter, TypeCode
from pip_services3_commons.refer import Descriptor, IReferences
from pip_services3_rpc.services import RestOperations

from pip_facades_sample_python.clients.version1.BeaconV1 import BeaconV1
from pip_facades_sample_python.clients.version1.IBeaconsClientV1 import IBeaconsClientV1


class BeaconsOperationsV1(RestOperations):

    def __init__(self):
        super(BeaconsOperationsV1, self).__init__()
        self.__beacons_client: IBeaconsClientV1 = None
        self._dependency_resolver.put('beacons',
                                      Descriptor('beacons', 'client', '*', '*', '1.0'))

    def set_references(self, references: IReferences):
        super().set_references(references)
        self.__beacons_client = self._dependency_resolver.get_one_required('beacons')

    def get_beacons(self, site_id) -> Optional[str]:
        filter_params = self._get_filter_params()
        paging = self._get_paging_params()

        filter_params.set_as_object('site_id', site_id)

        result = self.__beacons_client.get_beacons(None, filter_params, paging)

        return self._send_result(result)

    def get_beacon(self, site_id, beacon_id) -> Optional[str]:
        result = self.__beacons_client.get_beacon_by_id(None, beacon_id)
        return self._send_result(result)

    def calculate_position(self, site_id) -> Optional[str]:
        params = bottle.request.json if isinstance(bottle.request.json, dict) else JsonConverter.from_json(TypeCode.Map,
                                                                                                           bottle.request.json)
        udis = params.get('udis')

        if isinstance(udis, str):
            udis = udis.split(',')

        result = self.__beacons_client.calculate_position(None, site_id, udis)
        return self._send_result(result)

    def create_beacon(self, site_id) -> Optional[str]:
        json_data = bottle.request.json if isinstance(bottle.request.json, dict) else JsonConverter.from_json(
            TypeCode.Map, bottle.request.json)
        beacon = BeaconV1(**json_data)

        result = self.__beacons_client.create_beacon(None, beacon)
        return self._send_result(result)

    def update_beacon(self, site_id, beacon_id) -> Optional[str]:
        beacon = bottle.request.json if isinstance(bottle.request.json, dict) else JsonConverter.from_json(TypeCode.Map,
                                                                                                           bottle.request.json)
        beacon['id'] = beacon_id

        beacon = BeaconV1(**beacon)

        result = self.__beacons_client.update_beacon(None, beacon)
        return self._send_result(result)

    def delete_beacon(self, site_id, beacon_id) -> Optional[str]:

        result = self.__beacons_client.delete_beacon_by_id(None, beacon_id)

        return self._send_result(result)

    def validate_beacon_udi(self, site_id) -> Optional[str]:
        params = dict(bottle.request.query.decode())
        udi = params.get('udi')

        beacon = self.__beacons_client.get_beacon_by_udi(None, udi)
        if beacon:
            return JsonConverter.to_json(beacon)
        else:
            return ''

```

