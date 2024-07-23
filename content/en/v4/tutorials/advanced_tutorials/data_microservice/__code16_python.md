
**/src/service/version1/BeaconsHttpServicesV1.py**

```python
from pip_services4_components.refer import Descriptor
from pip_services4_http.controller import CommandableHttpController


class BeaconsHttpControllerV1(CommandableHttpController):
    def __init__(self):
        super(BeaconsHttpControllerV1, self).__init__("v1/beacons")
        self._dependency_resolver.put("service", Descriptor('beacons', 'service', '*', '*', '1.0'))
```
