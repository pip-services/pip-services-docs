
```python
__timer = FixedRateTimer()

...

def open(self, correlation_id: Optional[str]):
    self.__timer.set_callback(lambda: self.perform_analysis(correlation_id))
    self.__timer.set_interval(1000)
    self.__timer.set_delay(1000)
    self.__timer.start()
    self.__logger.trace(correlation_id, "Counter controller opened")

```

