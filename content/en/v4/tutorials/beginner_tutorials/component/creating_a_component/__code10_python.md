
```python
from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.refer import References, Descriptor

# Step 1 - Creation
my_component_A = MyComponentA()
my_component_B = MyComponentB()

# Step 2 - Configure the component
my_component_A.configure(ConfigParams.from_tuples(
    'param1', 'XYZ',
    'param2', '987'
))

# Step 3 - Referencing
# Set references to the component
my_component_A.set_references(References.from_tuples(
    Descriptor("myservice", "mycomponent-b", "default", "default", "1.0"), my_component_B
))

# Step 4 - Openning
my_component_A.open("123")

# Step 5 - Execution
my_component_A.my_task("123")

# Step 6 - Closing
my_component_A.close("123")

# Step 7 - Un-referencing
my_component_A.unset_references()

# Step 8 - Destruction
my_component_A.__del__()

```

