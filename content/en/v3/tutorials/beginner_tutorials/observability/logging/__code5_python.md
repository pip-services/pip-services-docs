
```python
# Creating a process container

from pip_services3_container import ProcessContainer

class MyProcess(ProcessContainer):
    def __init__(self):
        super(MyProcess, self).__init__('myservice', 'My service running as a process')
        self._config_path = 'E:\\config2.yaml'
        self._factories.add(MyFactory1)
  
```
