
**/src/service/version1/BeaconsHttpServicesV1.py**

```python
from pip_services3_commons.refer import Descriptor
from pip_services3_rpc.services import CommandableHttpService


class BeaconsHttpServiceV1(CommandableHttpService):
    def __init__(self):
        super(BeaconsHttpServiceV1, self).__init__("v1/beacons")
        self._dependency_resolver.put("controller", Descriptor('beacons', 'controller', '*', '*', '1.0'))
```
