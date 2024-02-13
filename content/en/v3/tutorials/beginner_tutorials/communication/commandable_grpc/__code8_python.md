
```python
import threading
from typing import List, Optional

from pip_services3_commons.commands import ICommandable, CommandSet
from pip_services3_commons.data import FilterParams, PagingParams, DataPage, IdGenerator

from data.MyData import MyData
from logic.IMyDataController import IMyDataController
from logic.MyDataCommandSet import MyDataCommandSet


class MyDataController(IMyDataController, ICommandable):

    def __init__(self):
        self._lock = threading.Lock()
        self.__entities: List[MyData] = []
        self.__command_set: MyDataCommandSet = None

    def get_command_set(self) -> CommandSet:
        if self.__command_set is None:
            self.__command_set = MyDataCommandSet(self)
        return self.__command_set

    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams) -> DataPage:
        filter = filter if filter is not None else FilterParams()
        key = filter.get_as_nullable_string("key")

        paging = paging if paging is not None else PagingParams()
        skip = paging.get_skip(0)
        take = paging.get_take(100)

        result = DataPage([], None)

        for item in self.__entities:
            if key is not None and key != item.key:
                continue

            skip -= 1
            if skip >= 0:
                continue

            take -= 1
            if take < 0:
                break

            result.data.append(item)

        result.total = len(result.data)

        return result

    def get_one_by_id(self, correlation_id: Optional[str], id: str) -> Optional[MyData]:
        with self._lock:
            for item in self.__entities:
                if item.id == id:
                    return item

        return MyData()

    def create(self, correlation_id: Optional[str], item: MyData) -> MyData:
        with self._lock:
            if item.id == '' or item.id is None:
                item.id = IdGenerator.next_long()

            self.__entities.append(item)

        return item

    def update(self, correlation_id: Optional[str], new_item: MyData) -> Optional[MyData]:
        with self._lock:
            for index in range(len(self.__entities)):
                item = self.__entities[index]
                if item.id == new_item.id:
                    self.__entities[index] = new_item
                    return new_item

        return MyData()

    def delete_by_id(self, correlation_id: Optional[str], id: str) -> Optional[MyData]:
        with self._lock:
            for index in range(len(self.__entities)):
                item = self.__entities[index]
                if item.id == id:
                    del self.__entities[index]
                    return item

        return MyData()

```
