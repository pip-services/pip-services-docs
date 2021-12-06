
```python
value = AnyValueArray([1, "123.456", "2018-01-01"])

# Get a value for a specified index
value1 = value.get(0)                                   # Returns 1, type int

value2 = value.get_as_boolean(0)                        # Returns True
value3 = value.get_as_boolean_with_default(1, False)     # Returns False
value4 = value.get_as_nullable_boolean(2)               # Returns None

value5 = value.get_as_integer(1)                        # Returns 123
value6 = value.get_as_integer_with_default(3, 0)        # Returns 0
value7 = value.get_as_nullable_integer(3)               # Returns None

value8 = value.get_as_long(1)                           # Returns 123
value9 = value.get_as_long_with_default(3, 0)           # Returns 0
value10 = value.get_as_nullable_long(3)                 # Returns None

value11 = value.get_as_float(1)                         # Returns 123.456
value12 = value.get_as_float_with_default(3, 0.0)       # Returns 0.0
value13 = value.get_as_nullable_float(3)                # Returns None

value14 = value.get_as_double(1)                        # Returns 123.456
value15 = value.get_as_double_with_default(3, 0.0)      # Returns 0.0
value16 = value.get_as_nullable_double(3)               # Returns None

value17 = value.get_as_datetime(2)                      # Returns 2018-01-01 00:00:00+00:00
from datetime import date
value18 = value.get_as_datetime_with_default(1, date.today())  # Returns (e.g) 2021-11-04 00:00:00+00:00

value19 = value.get_as_string(2)                        # Returns '2018-01-01'
value20 = value.get_as_nullable_string(2)               # Returns '2018-01-01'
value21 = value.get_as_string_with_default(2,'0000-00-00')       # Returns '2018-01-01'

value22 = value.get_as_array(1)                         # Returns ['123.456']
value23 = value.get_as_array_with_default(0, AnyValueArray([0]))       # Returns [1]
value24 = value.get_as_nullable_array(2)                # Returns ['2018-01-01']

valueA = AnyValueArray([1, {'number': "123.456"}, "2018-01-01"])
value25 = valueA.get_as_map(1)                           # Returns {'number': '123.456'}
value25 = valueA.get_as_map_with_default(3, AnyValueMap({'key1': 1})) # Returns {'key1': 1}
value27 = valueA.get_as_nullable_map(3)                  # Returns None

from pip_services3_commons.convert import TypeCode 
value28 = value.get_as_type(TypeCode.DateTime,2)        # Returns 2018-01-01 00:00:00+00:00
value29 = value.get_as_type_with_default(TypeCode.DateTime, 1, date.today())      # Returns today date
value30 = value.get_as_nullable_type(TypeCode.DateTime,1)                       # Returns None
```
