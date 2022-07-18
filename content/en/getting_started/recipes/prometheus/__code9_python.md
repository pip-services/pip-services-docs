
```python

class MyComponentA:
    _console_log = True

    def __init__(self, counters: CachedCounters):
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
        self.counters.dump()


counters = PrometheusCounters()
counters.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

mycomponent = MyComponentA(counters)
```
