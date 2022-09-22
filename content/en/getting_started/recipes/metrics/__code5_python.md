
```python
from typing import List

from pip_services3_components.count import CompositeCounters, Counter
from pip_services3_components.log import LogMessage
from pip_services3_commons.refer import IReferenceable, IReferences
from pip_services3_commons.refer import References, Descriptor
from pip_services3_components.count import LogCounters
from pip_services3_components.log import CachedLogger
from pip_services3_prometheus.count import PrometheusCounters
from pip_services3_commons.config import ConfigParams
from pip_services3_components.count import CompositeCounters


class MyComponent(IReferenceable):
    _counters: CompositeCounters = CompositeCounters()

    _console_log = True

    def __init__(self):
        if self._console_log:
            print("MyComponent has been created.")

    def setReferences(self, references: IReferences):
        self._counters.set_references(references)

    def myMethod(self):
        self._counters.increment("mycomponent.mymethod.calls", 1)
        timing = self._counters.begin_timing("mycomponent.mymethod.exec_time")
        try:
            if self._console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()


class MyCachedLogger(CachedLogger):
    def _save(self, messages: List[LogMessage]):
        print("Saving somewhere")


def print_result(results: List[Counter]):
    for result in results:
        print("Count: " + str(result.count))
        print("Min: " + str(result.min))
        print("Max: " + str(result.max))
        print("Average: " + str(result.average))
        print("Time: " + str(result.time))
        print("Name: " + result.name)
        print("Type: " + str(result.type))
        print("-----------------")


counters_log = LogCounters()

counters_prom = PrometheusCounters()
counters_prom.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

counters = CompositeCounters()

my_component = MyComponent()
my_component.set_references(References.from_tuples(
    Descriptor("pip-services", "counters", "prometheus", "default4", "1.0"), counters_prom,
    Descriptor("pip-services", "counters", "logger", "default3", "1.0"), counters_log,
    Descriptor("pip-services", "logger", "cached", "default2", "1.0"), MyCachedLogger()
))

counters_prom.open("123")

count_exec = 2

for i in range(count_exec):
    my_component.myMethod()

results = counters_log.get_all()

print("\nMetrics to logger")
print_result(results)

results = counters_prom.get_all()

print("\nMetrics to Prometheus")
print_result(results)
```
