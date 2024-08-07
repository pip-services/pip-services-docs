
```python
import time

from typing import Optional

from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.run import IOpenable
from pip_services4_components.context import Context
from pip_services4_datadog.count import DataDogCounters


class MyComponentA(IConfigurable, IOpenable):
    _console_log = True

    def __init__(self):
        self._counters = DataDogCounters()

        if self._console_log:
            print("MyComponentA has been created.")

    def configure(self, config: ConfigParams):
        self._counters.configure(config)

    def get_counters(self) -> DataDogCounters:
        return self._counters

    def is_open(self) -> bool:
        return self._counters.is_open()

    def open(self, ctx: Context):
        self._counters.open(ctx)

    def close(self, ctx: Context):
        self._counters.close(ctx)

    def my_method(self):
        self._counters.increment("mycomponent.mymethod.calls", 1)
        timing = self._counters.begin_timing("mycomponent.mymethod.exec_time")
        try:
            if self._console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()
        self._counters.dump()


```
