
```python
# TypeReflector
from pip_services4_commons.reflect import TypeReflector, TypeDescriptor
 

class classA:
    param1 = "hello"
    param2 = 123

my_classA = TypeReflector.create_instance_by_type(classA) 
print("The values of param1 and param2 are",my_classA.param1, "and", my_classA.param2)

```
