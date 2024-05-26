
```python
from pip_services4_observability.count import LogCounters

from pip_services4_components.refer import References, Descriptor
from pip_services4_observability.log import ConsoleLogger

counters = LogCounters()
counters.set_references(References.from_tuples(
            Descriptor("pip-services", "logger", "console", "default", "1.0"), ConsoleLogger()))

mycomponentLog = MyComponent(counters)

count_exec = 2

for i in range(count_exec):
    mycomponentLog.mymethod()
    
resultLog = counters.get_all()

print("Metrics")

for res in resultLog:
    print("Count: " + str(res.count))
    print("Min: " + str(res.min))
    print("Max: " + str(res.max))
    print("Average: " + str(res.average))
    print("Time: " + str(res.time))
    print("Name: " + res.name)
    print("Type: " + str(res.type))
    print("-----------------")

```
