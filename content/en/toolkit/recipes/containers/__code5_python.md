
```python
from pip_services3_container import ProcessContainer
from pip_services3_commons.refer import Descriptor

class MyProcess(ProcessContainer):
    def __init__(self):
        super(MyProcess, self).__init__('myservice', 'My service running as a process')
        self._config_path = './config.yaml'
        self._factories.add(MyFactory())
```
