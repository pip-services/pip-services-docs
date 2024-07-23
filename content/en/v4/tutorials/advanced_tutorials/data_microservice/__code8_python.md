
**/src/persistence/BeaconsMemoryPersistence.py**

```python
from typing import Optional, Any, Callable

from pip_services4_data.query import FilterParams, DataPage, PagingParams
from pip_services4_persistence.persistence import IdentifiableMemoryPersistence
from pip_services4_components.context import IContext

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

    def get_page_by_filter(self, context: Optional[IContext], filter: FilterParams, paging: PagingParams,
                           sort: Any = None, select: Any = None) -> DataPage:

        return super(BeaconsMemoryPersistence, self).get_page_by_filter(context,
                                                                        self.__compose_filter(filter), paging=paging)

    def get_one_by_udi(self, context: Optional[IContext], udi: str) -> BeaconV1:
        if udi is None:
            return None
        for item in self._items:
            if udi == item.udi:
                return item

```
