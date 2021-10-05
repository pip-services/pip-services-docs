
```python
# Property reflector

from pip_services3_commons.reflect import PropertyReflector

class classA:
    param1 = "hello"
    param2 = 123
    def methodA(): 
        param3 = "hello a"
        return 123

my_classA = classA()

# Obtain all property names
properties = PropertyReflector.get_property_names(my_classA)
print("The properties of my_classA are: ", properties)

# Find out whether an object has a property or not
has_param1 = PropertyReflector.has_property(my_classA, "param1")
print("ClassA contains param1: ", has_param1)

# Obtain all property names and their values
value3 = PropertyReflector.get_properties(my_classA)
print("The properties of my_classA are: ", value3)

# Change the value of a parameter
value1 = PropertyReflector.get_property(my_classA, "param2")
PropertyReflector.set_property(my_classA, "param2", 14785)
value2 = PropertyReflector.get_property(my_classA, "param2")
print("The value of param2 is: ", value1)
print("The new value of param2 is: ", value2)
```

