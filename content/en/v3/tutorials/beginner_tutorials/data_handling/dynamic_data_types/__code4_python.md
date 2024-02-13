
```python
from pip_services3_commons.data import AnyValue

value = AnyValue("123.456")

value1 = value.get_as_integer()                         # Returns 123
value2 = value.get_as_long()                            # Returns 123
value3 = value.get_as_float()                           # Returns 123.456                       

valueB = AnyValue("ABC")
value4 = valueB.get_as_integer_with_default(25)      # Returns 25

value5 = value.get_as_string()                          # Returns '123.456'
value6 = value.get_as_string_with_default("ABC")        # Returns '123.456'

valueB = AnyValue("1")
value7 = valueB.get_as_boolean()                        # Returns True

valueC = AnyValue("abc")
value8 = valueC.get_as_boolean_with_default(False)      # Returns False

type1 = value.get_type_code()                           # Returns TypeCode.String
```
