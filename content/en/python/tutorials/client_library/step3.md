---
type: docs
no_list: true
title: "Step 3. Designing an HTTP Client"
linkTitle: "Step 3. HTTP Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-python"
---

The standard way of communicating with a microservice is via the HTTP protocol. It allows calling microservices that work on a separate server, or in their own container. Our example microservice uses a simplified version of the HTTP protocol that is automatically generated using the Commandable pattern.    
    
Then, creates a new class for the Commandable REST client and an implementation for each of the microservice’s methods. This is done by calling the REST API’s methods using the methods of the parent Commandable REST client, passing the necessary set of parameters, and then processing the response’s result. Since the answer from the client is returned as JSON, some programming languages will require that you first convert it to an instance with a specific type. Be sure to remember this when writing your HTTP clients.

The client’s resulting code is listed below:

**/src/version1/BeaconsHttpClientV1.py**

```python
from typing import Optional, List, Any

from pip_services3_commons.data import DataPage, FilterParams, PagingParams
from pip_services3_rpc.clients import CommandableHttpClient

from .IBeaconsClientV1 import IBeaconsClientV1
from ...data.version1 import BeaconV1


class BeaconsHttpClientV1(CommandableHttpClient, IBeaconsClientV1):
    def __init__(self):
        super(BeaconsHttpClientV1, self).__init__("v1/beacons")

    def get_beacons_by_filter(self, correlation_id: Optional[str], filter: FilterParams,
                              paging: PagingParams) -> DataPage:
        result = self.call_command(
            'get_beacons',
            correlation_id,
            {
                'filter': filter,
                'paging': paging
            }
        )
        return DataPage(result['data'], result['total'])

    def get_beacon_by_id(self, correlation_id: Optional[str], id: str) -> dict:
        return self.call_command(
            'get_beacon_by_id',
            correlation_id,
            {
                'id': id
            }
        )

    def get_beacon_by_udi(self, correlation_id: Optional[str], udi: str) -> dict:
        return self.call_command(
            'get_beacon_by_udi',
            correlation_id,
            {
                'udi': udi
            }
        )

    def calculate_position(self, correlation_id: Optional[str], site_id: str, udis: List[str]) -> Any:
        return self.call_command(
            'calculate_position',
            correlation_id,
            {
                'site_id': site_id,
                'udis': udis
            }
        )

    def create_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> dict:
        return self.call_command(
            'create_beacon',
            correlation_id,
            {
                'beacon': entity
            }
        )

    def update_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> dict:
        return self.call_command(
            'update_beacon',
            correlation_id,
            {
                'beacon': entity
            }
        )

    def delete_beacon_by_id(self, correlation_id: Optional[str], id: str) -> dict:
        return self.call_command(
            'delete_beacon_by_id',
            correlation_id,
            {
                'id': id
            }
        )

```

To be sure that our code works as intended, we should perform some functional testing. Test the Commandable HTTP REST client using the class with tests that we developed in the previous step. To do this, create an instance of the HTTP REST client and pass it as a parameter to our set of tests.
An example implementation of the tests can be found in the example’s [repository](https://github.com/pip-services-samples/client-beacons-python/blob/master/test/version1/test_BeaconsHttpClient.py)

All tests should pass successfully.This finishes the development of our clients. As a result, we ended up with 2 clients: one for working from within a monolithic application, and another for working with the microservice from a different application, when utilizing a distributed architecture.

To simulate the service, let's create a test client in [Step 4. Implementing Test Memory Client.](../step4)


<span class="hide-title-link">

### [Step 4. Implementing Test Memory Client.](../step4)

</span>
