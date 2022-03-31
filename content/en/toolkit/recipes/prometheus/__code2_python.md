
```python
from pip_services3_components.count import CachedCounters

class MyComponentA:
    _console_log = True

    def __init__(self, counters: CachedCounters):
        self.counters = counters

        if _console_log:
            print("MyComponentA has been created.")

    def mymethod(self):
        self.counters.increment("mycomponent.mymethod.calls", 1)
        timing = self.counters.begin_timing("mycomponent.mymethod.exec_time")
        try:
            if _console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()
        self.counters.dump()
```
