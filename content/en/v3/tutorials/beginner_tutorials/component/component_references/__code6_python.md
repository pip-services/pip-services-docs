
See: [Descriptor](../../../toolkit_api/python/components/refer/descriptor/)

```python
class Descriptor:

    def __init__(self, group: Optional[str], type: Optional[str], kind: Optional[str], name: Optional[str],
        ...

    def get_group(self) -> str:
        ...

    def get_type(self) -> str:
       ...

    def get_kind(self) -> str:
        ...

    def get_name(self) -> str:
        ...

    def get_version(self) -> str:
        ...

    def __match_field(self, field1: str, field2: str) -> bool:
        ...

    def match(self, descriptor: 'Descriptor') -> bool:
        ...

    def __exact_match_field(self, field1: str, field2: str) -> bool:
        ...

    def exact_match(self, descriptor: 'Descriptor') -> bool:
        ...

    def is_complete(self) -> bool:
        ...

    def equals(self, value: Any) -> bool:
        ...

    def to_string(self) -> str:
        ...

    def __eq__(self, other):
        ...

    def __ne__(self, other):
        ...

    def __str__(self):
        ...

    @staticmethod
    def from_string(value: str) -> Optional['Descriptor']:
		...


```

