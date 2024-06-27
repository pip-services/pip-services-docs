
```python
# Creating a process container

from pip_services4_container.container import ProcessContainer

class MyProcess(ProcessContainer):
    def __init__(self):
        super(MyProcess, self).__init__('myservice', 'My service running as a process')
        self._config_path = 'config.yaml'
        self._factories.add(MyClassFactory())


```

