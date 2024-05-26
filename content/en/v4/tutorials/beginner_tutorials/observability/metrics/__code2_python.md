
```python
from pip_services4_observability.count import CachedCounters

class MyCachedCounters (CachedCounters):
    def _save(self, counters):
        print("Saving " + counters[0].name + " and " + counters[1].name)

countersCached = MyCachedCounters()

mycomponentCached = MyComponent(countersCached)

count_exec = 2

for i in range(count_exec):
    mycomponentCached.mymethod()
    
resultCached = countersCached.get_all()

print("Metrics")

for res in resultCached:
    print("Count: " + str(res.count))
    print("Min: " + str(res.min))
    print("Max: " + str(res.max))
    print("Average: " + str(res.average))
    print("Time: " + str(res.time))
    print("Name: " + res.name)
    print("Type: " + str(res.type))
    print("-----------------")
 
```
