
```python
from pip_services3_components.count import CachedCounters

class MyCachedCounters (CachedCounters):
    def _save(self, counters):
        print("\tSaving " + counters[0].name + " and " + counters[1].name)

countersCached = MyCachedCounters()

mycomponentCached = MyComponentA(countersCached)

count_exec = 2

for i in range(count_exec):
    mycomponentCached.mymethod()
    
resultCached = countersCached.get_all()

print("\nMetrics")

for i in resultCached:
    print("Count: " + str(i.count))
    print("Min: " + str(i.min))
    print("Max: " + str(i.max))
    print("Average: " + str(i.average))
    print("Time: " + str(i.time))
    print("Name: " + i.name)
    print("Type: " + str(i.type))
    print("-----------------")
 
```
