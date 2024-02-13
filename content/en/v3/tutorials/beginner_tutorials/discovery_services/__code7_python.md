
```python
# Pre-requisites
from pip_services3_commons.config import ConfigParams 
from pip_services3_components.connect import MemoryDiscovery, ConnectionParams 
 
# Defining the component 
config = ConfigParams.from_tuples( 
    "key1.host", "10.1.1.100", 
    "key1.port", "8080", 
    "key2.host", "10.1.1.100", 
    "key2.port", "8082" 
) 
 
discovery = MemoryDiscovery() 
discovery.configure(config) 
 
# Adding more parameters    
discovery.register('123', 'key1', ConnectionParams.from_tuples( 
    'param1', 'val1', 
    'param2', 'val2' 
)) 
 
discovery.register('123', 'key3', ConnectionParams.from_tuples( 
    'host', 'localhost', 
    'port', '8000' 
))     
# Resolving connections    
print(discovery.resolve_one("123", "key1")) 
print(discovery.resolve_all("123", "key1"))
print(discovery.resolve_one("123", "key3"))
```

Which after running produces the following result:

![figure 1](./figure1.png)
