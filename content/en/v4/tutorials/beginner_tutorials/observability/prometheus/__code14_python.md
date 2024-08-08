
```python
from pip_services4_components.config import ConfigParams
from pip_services4_components.refer import Descriptor, References
from pip_services4_components.context import ContextInfo
from pip_services4_prometheus.count import PrometheusCounters
from pip_services4_prometheus.controllers import PrometheusMetricsController

console_log = True


class MyComponentA:

    def __init__(self):
        if console_log:
            print("MyComponentA has been created.")

    def mymethod(self):
        # Count the number of calls to this method
        counters.increment("mycomponent.mymethod.calls", 1)
        
        # Measure execution time
        timing = counters.begin_timing("mycomponent.mymethod.exec_time")

        # Task for this method: print greetings in two languages.
        try:
            if console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()
       
        # Save the values of counters
        counters.dump()

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
controller = PrometheusMetricsController()

controller.configure(ConfigParams.from_tuples(
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
    Descriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller
)

controller.set_references(references)
counters.set_references(references)

# Connect the service and counters objects
controller.open("123")
counters.open("123")

# Run "mymethod"
count_exec = 2

for i in range(count_exec):
    mycomponent.mymethod()

# Get the counters    
result = counters.get_all()

```
