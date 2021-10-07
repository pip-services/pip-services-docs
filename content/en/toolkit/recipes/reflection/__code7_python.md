
```python
# RecursiveObjectWriter

from pip_services3_commons.reflect import RecursiveObjectWriter, RecursiveObjectReader

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

my_classB = classB()
my_classC = classB()

# set_property
RecursiveObjectWriter.set_property(my_classB, "param2", "new value")
value1 = RecursiveObjectReader.get_property(my_classB, "param2")
print("The new values for the my_classB object are:", value1)

# set_properties
myMap = { 'param1': 789456, 'param2': "ABCaccc" }
RecursiveObjectWriter.set_properties(my_classB, myMap)
value2 = RecursiveObjectReader.get_properties(my_classB)
print("The new values for the my_classB object are:",value2)

# copy_proerties
value3 = RecursiveObjectReader.get_properties(my_classC)
print("The properties of my_classC and their values are:",value3)
RecursiveObjectWriter.copy_properties(my_classC, my_classB)
value4 = RecursiveObjectReader.get_properties(my_classC)
print("The new properties of my_classC and their values are:", value4)

```

