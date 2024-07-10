
**/src/data/version1/BeaconV1.py**

```python
from pip_services4_data.data import IStringIdentifiable
from typing import Any

class BeaconV1(IStringIdentifiable):
    def __init__(self, id: str = None, site_id: str = None, type: str = None, udi: str = None, label: str = None, center: Any = None, radius: float = None):
        super(BeaconV1, self).__init__()
        self.id = id
        self.site_id = site_id
        self.type = type
        self.udi = udi
        self.label = label
        self.center = center
        self.radius = radius
```
