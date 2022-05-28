
```python
from pip_services3_commons.refer import Descriptor, References, IReferences, IReferenceable
from pip_services3_components.cache import ICache, MemoryCache
from pip_services3_components.lock.ILock import ILock
from pip_services3_components.lock.MemoryLock import MemoryLock
from pip_services3_commons.config import ConfigParams

class MyComponent(IReferenceable):
    __cache: ICache
    __lock: ILock

    def set_references(self, references: IReferences):
        self.__cache = references.get_one_required(Descriptor("*", "cache", "*", "*", "1.0"))
        self.__lock = references.get_one_required(Descriptor("*", "lock", "*", "*", "1.0"))

    def store_result(self, correlation_id, param1):      

        # Lock
        self.__lock.acquire_lock(correlation_id, "mykey", 1000, 1000, )
        
        config = ConfigParams.from_tuples("retry_timeout", 200)
        self.__lock.configure(config)
        
        # Do processing
        # ...
        print("The stored value is " + param1)

        # Store result to cache async
        self.__cache.store(correlation_id, 'mykey', param1, 3600000)
    
        # Release lock async
        self.__lock.release_lock(correlation_id, 'mykey')

        
    def obtain_result(self, correlation_id):
        
         # Lock..
        self.__lock.acquire_lock(correlation_id, "mykey", 1000, 1000, )
        
        # Do processing
        # ...
        result = self.__cache.retrieve(correlation_id, "mykey")
    
        # Release lock async
        self.__lock.release_lock(correlation_id, "mykey")
    
        return result
    
    
# Use the component
my_component = MyComponent()
my_component.set_references(References.from_tuples(
    Descriptor("pip-services", "cache", "memory", "default", "1.0"), MemoryCache(),
    Descriptor("pip-services", "lock", "memory", "default", "1.0"), MemoryLock(),
))

my_component.store_result(None, "param1")

result = my_component.obtain_result(None)

print("The retrieved value is " + result)
```
