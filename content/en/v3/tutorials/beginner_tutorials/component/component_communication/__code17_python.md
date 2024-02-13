
```python
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
```
