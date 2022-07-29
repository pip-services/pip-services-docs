
```python
from pip_services3_components.count import ICounters
from pip_services3_components.count import NullCounters

class MyComponentA:

    _console_log = True

    def __init__(self, counters: ICounters):
        self.counters = counters
        
        if self._console_log:
            print("MyComponentA has been created.")

    def mymethod(self):
        self.counters.increment("mycomponent.mymethod.calls", 1)
        timing = self.counters.begin_timing("mycomponent.mymethod.exec_time")
        try:
            if self._console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()

countersNull = NullCounters()   

mycomponentNull = MyComponentA(countersNull)

count_exec = 2

for i in range(count_exec):
    mycomponentNull.mymethod()
```