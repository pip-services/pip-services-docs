
```python
 class BeaconsProcess(ProcessContainer):
    def __init__(self):
        super(BeaconsProcess, self).__init__('beacons', 'Beacons microservice')

        self._factories.add(BeaconsServiceFactory())
        self._factories.add(DefaultRpcFactory())
        self._factories.add(DefaultSwaggerFactory())


```
