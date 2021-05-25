---
type: docs
no_list: true
title: "Step 5. Implementing an HTTP service"
linkTitle: "Step 5. HTTP service" 
gitUrl: "https://github.com/pip-services-samples/service-beacons-python"
---

The Pip.Services Toolkit has a dedicated component in the RPC module for processing external requests. To make use of this service, create a new class `BeaconsHttpServiceV1`, extending the `CommandableHttpService` class:

**/src/service/version1/BeaconsHttpServicesV1.py**

```python
from pip_services3_commons.refer import Descriptor
from pip_services3_rpc.services import CommandableHttpService


class BeaconsHttpServiceV1(CommandableHttpService):
    def __init__(self):
        super(BeaconsHttpServiceV1, self).__init__("v1/beacons")
        self._dependency_resolver.put("controller", Descriptor('beacons', 'controller', '*', '*', '1.0'))

```

The `CommandableHttpService` class from the pip-services3-rpc module implements all of the basic functionality needed by the service, right out of the box. All that we need to do on our side is configure it in the child class. This is done by defining a base route to the API (e.g. 'v1/beacons') and by setting references to the controller. The rest is taken care of by the parent class and the process container: a controller will be searched for and referenced, after which the service will receive a set of commands, register it, and make those commands available through the API interface. This allows us to run commands by simply posting requests to a URL of the following format:

```
http://{ip}:{port}/v1/beacons/{command_name}
```

Even though the `BeaconsHttpServiceV1` class barely has any lines of code, there’s a large amount of code being executed in the service itself. To make sure that everything is working as it should, we should add tests for the service itself, as well as for the commands we wrote in the CommandSet. Create a file for the service’s test and paste the following code:

**/test/services/version1/test_BeaconsHttpServiceV1.py**

```python
class TestBeaconsHttpServiceV1:
    _persistence: BeaconsMemoryPersistence
    _controller: BeaconsController
    _service: BeaconsHttpServiceV1

    @classmethod
    def setup_class(cls):
        cls._persistence = BeaconsMemoryPersistence()
        cls._controller = BeaconsController()
        cls._service = BeaconsHttpServiceV1()

        cls._service.configure(ConfigParams.from_tuples(
            'connection.protocol', 'http',
            'connection.port', 3002,
            'connection.host', 'localhost'))

        references = References.from_tuples(Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'),
                                            cls._persistence,
                                            Descriptor('beacons', 'controller', 'default', 'default', '1.0'),
                                            cls._controller,
                                            Descriptor('beacons', 'service', 'http', 'default', '1.0'),
                                            cls._service)
        cls._controller.set_references(references)
        cls._service.set_references(references)

        cls._persistence.open(None)
        cls._service.open(None)

    @classmethod
    def teardown_class(cls):
        cls._persistence.close(None)
        cls._service.close(None)

    def test_crud_operations(self):
        time.sleep(2)
        # Create the first beacon
        beacon1 = self.invoke("/v1/beacons/create_beacon", Parameters.from_tuples("beacon", BEACON1))

        assert beacon1 != None
        assert beacon1['id'] == BEACON1['id']
        assert beacon1['site_id'] == BEACON1['site_id']
        assert beacon1['udi'] == BEACON1['udi']
        assert beacon1['type'] == BEACON1['type']
        assert beacon1['label'] == BEACON1['label']
        assert beacon1['center'] != None

        # Create the second beacon
        beacon2 = self.invoke("/v1/beacons/create_beacon", Parameters.from_tuples("beacon", BEACON2))

        assert beacon2 != None
        assert beacon2['id'] == BEACON2['id']
        assert beacon2['site_id'] == BEACON2['site_id']
        assert beacon2['udi'] == BEACON2['udi']
        assert beacon2['type'] == BEACON2['type']
        assert beacon2['label'] == BEACON2['label']
        assert beacon2['center'] != None

        # Get all beacons
        page = self.invoke("/v1/beacons/get_beacons", Parameters.from_tuples("beacons"))
        assert page != None
        assert len(page['data']) == 2

        beacon1 = page['data'][0]

        # Update the beacon
        beacon1['label'] = "ABC"
        beacon = self.invoke("/v1/beacons/update_beacon", Parameters.from_tuples("beacon", beacon1))
        assert beacon != None
        assert beacon1['id'] == beacon['id']
        assert "ABC" == beacon['label']

        # Get beacon by udi
        beacon = self.invoke("/v1/beacons/get_beacon_by_udi", Parameters.from_tuples("udi", beacon1['udi']))
        assert beacon != None
        assert beacon['id'] == beacon1['id']

        # Calculate position for one beacon
        position = self.invoke("/v1/beacons/calculate_position",
                               Parameters.from_tuples("site_id", '1', "udis", ['00001']))
        assert position != None
        assert "Point" == position["type"]
        assert 2 == len(position["coordinates"])
        assert 0 == position["coordinates"][0]
        assert 0 == position["coordinates"][1]

        # Delete beacon
        self.invoke("/v1/beacons/delete_beacon_by_id", Parameters.from_tuples("id", beacon1['id']))

        # Try to get deleted beacon
        beacon = self.invoke("/v1/beacons/get_beacon_by_id", Parameters.from_tuples("id", beacon1['id']))
        assert beacon == False

    def invoke(self, route, entity):
        params = {}
        route = "http://localhost:3002" + route
        response = None
        timeout = 10000
        try:
            # Call the service
            data = json.dumps(entity)
            response = requests.request('POST', route, params=params, json=data, timeout=timeout)
            return response.json()
        except Exception as ex:
            return False

```

Run the `python test.py` command and make sure that all of the tests pass successfully.

Congratulations! This step finishes off the development of our microservice! However, before we can start our service up as a fully fledged microservice, we’ll first need to compose all of its components using a process container. And that’s exactly what we’ll be doing in [Step 6. Wrapping microservice into container.](../step6)


<span class="hide-title-link">

### [Step 6. Wrapping microservice into container.](../step6)

</span>