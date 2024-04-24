
```python
# Method Reflector

from pip_services4_commons.reflect import MethodReflector

class classA:
    def methodA(self):     
        return 123
    
    def methodB(self):
        print("hello world b")

my_classA = classA()

# Obtain all methods in classA
methods1 = MethodReflector.get_method_names(my_classA)
print("The methods in my_classA are: ", methods1)

# Ask whether a specific method exists or not
methods2 = MethodReflector.has_method(my_classA, "methodA")
print("methodA belongs to my_classA: ", methods2)

methods3 = MethodReflector.has_method(my_classA, "methodC") 
print("methodC belongs to my_classA: ", methods3)

# Invoke a method in classA
methods4= MethodReflector.invoke_method(my_classA, "methodA")          
print("After running methodA the result is: ", methods4)

```
