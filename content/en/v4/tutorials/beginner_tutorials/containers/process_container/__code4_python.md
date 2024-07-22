
```python
from pip_services4_container import ProcessContainer
from pip_services4_components.refer import Descriptor

class MyProcess(ProcessContainer):
    def __init__(self):
        super(MyProcess, self).__init__('mycontroller', 'My controller running as a process')
        self._config_path = './config.yaml'
        self._factories.add(MyFactory())
```
