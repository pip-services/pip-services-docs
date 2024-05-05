
```python
from pip_services4_components.build import Factory 
from pip_services4_container.container import ProcessContainer

# Creating a process container
class MyProcess(ProcessContainer):
    def __init__(self):
        super(MyProcess, self).__init__('myservice', 'My service running as a process')
        self._config_path = './configV4.yaml'

        # Creating a factory
        MyFactory1 = Factory()

        MyFactory1.register_as_type(Descriptor("myservice", "component-a1", "default", "*", "1.0"), ComponentA1)
        MyFactory1.register_as_type(Descriptor("myservice", "component-a2", "default", "*", "1.0"), ComponentA2)
        MyFactory1.register_as_type(Descriptor("myservice", "component-b", "default", "*", "1.0"), ComponentB)

        self._factories.add(MyFactory1)

# Running the container

import os

os.environ["COMPA2_ENABLED"] = "True"

if __name__ == '__main__':
    runner = MyProcess()
    print("run")
    try:
        runner.run()
    except Exception as ex:
        print(ex)        

```
