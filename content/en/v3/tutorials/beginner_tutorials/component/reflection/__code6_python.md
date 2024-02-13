
```python
# RecursiveObjectReader

from pip_services3_commons.reflect import RecursiveObjectReader

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

my_classA = classA()
my_classB = classB()


value1 = RecursiveObjectReader.get_property_names(my_classA)
print("The property names of my_classA are: ", value1)

value2 = RecursiveObjectReader.has_property(my_classB, "param5")
print("my_classB contains param5: ", value2)

value3 = RecursiveObjectReader.get_properties(my_classB)
print("The properties of my_classB are: ", value3)

value4 = RecursiveObjectReader.get_property(my_classB, "param4")
print("The value of param4 is: ", value4)

```

