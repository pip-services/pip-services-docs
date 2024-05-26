
```python
from pip_services4_observability.count import ICounters
from pip_services4_observability.count import NullCounters

class MyComponent:

    _console_log = True

    def __init__(self, counters: ICounters):
        self.counters = counters
        
        if self._console_log:
            print("MyComponent has been created.")

    def myMethod(self):
        self.counters.increment("mycomponent.mymethod.calls", 1)
        timing = self.counters.begin_timing("mycomponent.mymethod.exec_time")
        try:
            if self._console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()

countersNull = NullCounters()   

mycomponentNull = MyComponent(countersNull)

count_exec = 2

for i in range(count_exec):
    mycomponentNull.myMethod()

```
