See: [IReferences](../../../toolkit_api/python/commponents/refer/ireferences/), [References](../../../toolkit_api/python/commponents/refer/references/)

```python
from abc import ABC
from typing import Any, List

class IReferences(ABC):

    def put(self, locator: Any = None, reference: Any = None):
        raise NotImplementedError('Method from interface definition')

    def remove(self, locator: Any) -> Any:
        raise NotImplementedError('Method from interface definition')

    def remove_all(self, locator: Any) -> List[Any]:
        raise NotImplementedError('Method from interface definition')

    def get_all_locators(self) -> List[Any]:
        raise NotImplementedError('Method from interface definition')

    def get_all(self) -> List[Any]:
        raise NotImplementedError('Method from interface definition')

    def get_optional(self, locator: Any) -> List[Any]:
        raise NotImplementedError('Method from interface definition')

    def get_required(self, locator: Any) -> List[Any]:
        raise NotImplementedError('Method from interface definition')

    def get_one_optional(self, locator: Any) -> Any:
        raise NotImplementedError('Method from interface definition')

    def get_one_required(self, locator: Any) -> Any:
        raise NotImplementedError('Method from interface definition')

    def get_one_before(self, reference, locator) -> Any:
        raise NotImplementedError('Method from interface definition')

    def find(self, locator: Any, required: bool) -> List[Any]:
        raise NotImplementedError('Method from interface definition')

```
