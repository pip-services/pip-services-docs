
```python
from pip_services3_commons.config import ConfigParams
from pip_services3_commons.refer import Descriptor, References, IReferences
from pip_services3_components.info import ContextInfo
from pip_services3_prometheus.count import PrometheusCounters
from pip_services3_prometheus.services import PrometheusMetricsService

from pip_services3_commons.refer import IReferenceable


class MyComponentA(IReferenceable):
    console_log: bool = True  # console log flag

    def __init__(self):
        self._counters: PrometheusCounters = None
        if self.console_log:
            print("MyComponentA has been created.")

    # Added references for getting counters
    def set_references(self, references: IReferences):
        self._counters = references.get_one_required(
            Descriptor("*", "counters", "*", "*", "*")
        )

    def mymethod(self):
        # Count the number of calls to this method
        self._counters.increment("mycomponent.mymethod.calls", 1)

        # Measure execution time
        timing = self._counters.begin_timing("mycomponent.mymethod.exec_time")

        # Task for this method: print greetings in two languages.
        try:
            if self.console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()

        # Save the values of counters
        self._counters.dump()


# Create an instance of the component
mycomponent = MyComponentA()

# Create an instance of PrometheusCounters and configure it
counters = PrometheusCounters()
counters.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

# Create an instance of PrometheusMetricsService and configure it
service = PrometheusMetricsService()

service.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
    "prometheus_counters", counters
))

# Create the references
context_info = ContextInfo()
context_info.name = 'Test'
context_info.description = 'This is a test container'

references = References.from_tuples(
    Descriptor("pip-services", "context-info", "default", "default", "1.0"), context_info,
    Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
    Descriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service
)

service.set_references(references)
counters.set_references(references)
mycomponent.set_references(references)

# Connect the service and counters objects
service.open("123")
counters.open("123")

# Run "mymethod"
count_exec = 2

for i in range(count_exec):
    mycomponent.mymethod()

# Get the counters
result = counters.get_all()

# close service for closing Http server
service.close('123')
# close counter, for closing Http client for prometheus
counters.close('123')


```
