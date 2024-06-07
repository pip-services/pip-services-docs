
```python
from pip_services4_commons.convert import TypeCode
from pip_services4_data.validate import ObjectSchema


class MyObjectSchema(ObjectSchema):
    def __init__(self):
        super().__init__()

        self.with_required_property('prop1', TypeCode.Integer)
        self.with_optional_property('prop2', TypeCode.String)
        self.with_optional_property('prop3', MySubObjectSchema())

```
