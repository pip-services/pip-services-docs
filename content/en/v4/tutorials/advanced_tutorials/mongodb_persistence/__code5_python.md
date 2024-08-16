
And add the [DefaultMongoDbFactory](../../../toolkit_api/python/mongodb/build/default_mongodb_factory/) to the microservice's ProcessContainer:

```python
 class BeaconsProcess(ProcessContainer):
    def __init__(self):
        super(BeaconsProcess, self).__init__('beacons', 'Beacons microservice')

        self._factories.add(BeaconsControllerFactory())
        self._factories.add(DefaultRpcFactory())
        self._factories.add(DefaultSwaggerFactory())
```
