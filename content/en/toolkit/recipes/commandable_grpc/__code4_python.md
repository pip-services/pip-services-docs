
```python
from pip_services3_commons.convert.TypeCode import TypeCode
from pip_services3_commons.validate.ObjectSchema import ObjectSchema


class MyDataSchema(ObjectSchema):

    def __init__(self):
        super().__init__()
        self.with_optional_property("id", TypeCode.String)
        self.with_required_property("key", TypeCode.String)
        self.with_optional_property("content", TypeCode.String)
```
