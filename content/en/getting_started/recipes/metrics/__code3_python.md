
```python
from pip_services3_components.count import LogCounters

from pip_services3_commons.refer import References, Descriptor
from pip_services3_components.log import ConsoleLogger

counters = LogCounters()
counters.set_references(References.from_tuples(
            Descriptor("pip-services", "logger", "console", "default", "1.0"), ConsoleLogger()))

mycomponentLog = MyComponentA(counters)

count_exec = 2

for i in range(count_exec):
    mycomponentLog.mymethod()
    
resultLog = counters.get_all()

print("\nMetrics")

for i in resultLog:
    print("Count: " + str(i.count))
    print("Min: " + str(i.min))
    print("Max: " + str(i.max))
    print("Average: " + str(i.average))
    print("Time: " + str(i.time))
    print("Name: " + i.name)
    print("Type: " + str(i.type))
    print("-----------------")
```
