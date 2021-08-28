---
type: docs
no_list: true
title: "Step 3. Business operations"
linkTitle: "Step 3. Business operations" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---

Since facades are usually the point of entry into a system, they can contain dozens or even hundreds of REST operations. The classic microservices structure, when all the logic is contained in a single controller, becomes quite impractical in this case. Furthermore, it’s critical for a facade to support versioning. When the interface is changed, the facade must continue to provide stability for existing clients using interface versioning. Usually around 80% of the logic remains the same when an interface is changed, so duplicating the logic would just increase the amount of code and make it more difficult to support.


To solve these problems, the Pip.Services Toolkit offers a new pattern that breaks up logic into separate operations. The operations can be developed and tested individually, and then integrated into the RESTful service using unique routes. When implementing a new version, only the operations that require changes need to be rewritten. The remaining operations are simply imported from the old version by being reregistered in the new RESTful service.


The example facade in this tutorial will contain just 2 sets of operations:

- Operations that work with Beacons
- Operations for managing sessions and users

We’ll be creating a separate file for each set of operations and placing them in the folder **operations/version1**

Let’s start with the first set of operations - the ones responsible for working with Beacons.

Create a file named **BeaconsOperationsV1.py** and place the following code inside:

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
                                      Descriptor('nov-services-beacons', 'client', '*', '*', '1.0'))

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

This component’s logic is based on calling the Beacons microservice via any client that implements the IBeaconsClientV1 interface. The component receives a link to the client through its SetReferences method (see the [Component References](../../../recipes/component_references) recipe). The component’s business methods mainly just wrap the client’s methods to convert facade’s RESTful requests into calls to the client. Generally speaking, all of these methods perform the same set of steps: extract parameters from the request, call the corresponding method in the Beacons client, receive any results or errors, and send this information back as a response.


In the next (third) [Step 4 - Authentication and sessions](../step3) - we’ll be examining the second set of operations, which manage sessions and authenticate users.

<span class="hide-title-link">

### [Step 4. Authentication and sessions](../step3)

</span>
