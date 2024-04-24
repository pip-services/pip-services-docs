
```python
# TypeDescriptor
from pip_services4_commons.reflect import TypeDescriptor

class classA:
    param1 = "hello"
    param2 = 123
    def methodA(): 
        param3 = "hello a"
        return 123
    class classAa():
        param5 = "hello aa"
class classB(classA):
        param4 = "inside 2"

# Create type descriptors
type1 = TypeDescriptor("classA", "library1")
type2 = TypeDescriptor("classB", "library1")

# equals
result1 = type1.equals(type2)
print("type1 equals type2:", result1)

# get_library
library1 = type1.get_library()
print("The library of type1:", library1)

# get_name
name1 = type1.get_name()
print("The name of type1 is:", name1)

# from_string
type_descriptor = TypeDescriptor.from_string("classA,library1")
print("Type descriptor:", type_descriptor)
```
