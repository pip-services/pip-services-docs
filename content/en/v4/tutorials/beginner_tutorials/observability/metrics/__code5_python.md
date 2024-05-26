
```python
from pip_services4_observability.count import ICounters, CompositeCounters
from pip_services4_components.refer import IReferenceable, IReferences

_console_log = True

class MyComponent(IReferenceable):
    _counters: CompositeCounters = CompositeCounters()

    def __init__(self):
        self._counters = counters
        
        if _console_log:
            print("MyComponent has been created.")
            
    def setReferences(self, references: IReferences):
        self._counters.set_references(references)   
            
    def myMethod(self):
        self._counters.increment("mycomponent.mymethod.calls", 1)
        timing = self._counters.begin_timing("mycomponent.mymethod.exec_time")
        try:
            if _console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()
            
# Cached logger

class MyCachedLogger ():
    def _save(self, counters):
        print("\tSaving somewhere")
from pip_services4_components.refer import References, Descriptor  
from pip_services4_observability.count import LogCounters
from pip_services4_observability.log import CachedLogger

countersLog1 = LogCounters()
countersLog1.set_references(References.from_tuples(
            Descriptor("pip-services", "logger", "cached", "default2", "1.0"), MyCachedLogger()))

# Prometheus

from pip_services4_prometheus.count import PrometheusCounters
from pip_services4_components.config import ConfigParams

countersProm = PrometheusCounters()
countersProm.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

countersProm.open("123")

# Composite counters

from pip_services4_observability.count import CompositeCounters
counters = CompositeCounters()
counters.set_references(References.from_tuples(
            Descriptor("pip-services", "counters", "logger", "default3", "1.0"), countersLog1))
counters.set_references(References.from_tuples(
            Descriptor("pip-services", "counters", "prometheus", "default4", "1.0"), countersProm))
            
myComponent = MyComponent()

count_exec = 2

for i in range(count_exec):
    myComponent.myMethod()
    
result = countersLog1.get_all()

print("\nMetrics to logger")

for i in result:
    print("Count: " + str(i.count))
    print("Min: " + str(i.min))
    print("Max: " + str(i.max))
    print("Average: " + str(i.average))
    print("Time: " + str(i.time))
    print("Name: " + i.name)
    print("Type: " + str(i.type))
    print("-----------------")
    
result = countersProm.get_all()

print("\nMetrics to Prometheus")

for i in result:
    print("Count: " + str(i.count))
    print("Min: " + str(i.min))
    print("Max: " + str(i.max))
    print("Average: " + str(i.average))
    print("Time: " + str(i.time))
    print("Name: " + i.name)
    print("Type: " + str(i.type))
    print("-----------------")
    
    

```
