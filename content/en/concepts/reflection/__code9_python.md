
```python
# TypeMatcher
from pip_services3_commons.reflect import TypeMatcher

class classA:
    param1 = "hello"
    param2 = 123
    def methodA(): 
        param3 = "hello a"
        return 123

objectA1 = classA()

# expected type: Object, actual type: classA, actualvalue: objectA1
type1 = TypeMatcher.match_type("Object",classA, objectA1)
print("classA is an object:", type1)

# expected type: Object, actual type: String
type2 = TypeMatcher.match_type_by_name("Object", "String")
print("String is an object:", type2)

# expected type: classA, expected value: objectA1
type3 = TypeMatcher.match_value_type(classA, objectA1)
print("objectA1 is of type classA:", type3)

# expected type: Object, actual value: objectA1
type4 = TypeMatcher.match_value_type_by_name("Object", objectA1)
print("ObjectA1 is of type Object:", type4)

string1 = "Hello World"
type5 = TypeMatcher.match_value_type_by_name("String", string1)
print("string1 is of type String:", type5)


```

