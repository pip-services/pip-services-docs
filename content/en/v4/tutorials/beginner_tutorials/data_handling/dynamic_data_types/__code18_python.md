
```python
from pip_services4_commons.convert import TypeCode

value = AnyValueMap({ 'key1': 1, 'key2': "123.456", 'key3': "2018-01-01" })

value1 = value.get_as_boolean("key1")   # Returns: true
value2 = value.get_as_integer("key2")   # Returns: 123
value3 = value.get_as_integer_with_default("key3", 0)   # Returns 0
value4 = value.get_as_float("key2")     # Returns: 123.456
value5 = value.get_as_datetime("key3")  # Returns new Date(2018,0,1)
value9 = value.get_as_string("key1")    # Returns '1'
valueA = AnyValueMap({'key1': 1, 'key2': {'key': "123.456"}, 'key3': "2018-01-01"}) # redact
value6 = valueA.get_as_map("key2")      # Returns {'key': '123.456'}
value7 = value.get_as_nullable_datetime("key2")     # Returns None
value8 = value.get_as_nullable_datetime("key3")     # Returns new Date(2018,0,1)
value10 = value.get_as_object()                     # Returns {'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'}
value11 = value.get_as_type(TypeCode.String, 'key1')     # Returns '1'
value12 = value.get_as_value('key1') # Returns '1'


```
