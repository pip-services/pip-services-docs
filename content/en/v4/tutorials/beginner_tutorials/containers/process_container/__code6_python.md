
```python
from pip_services4_components.refer import IReferenceable, IReferences, IUnreferenceable
from pip_services4_components.run import IOpenable
from pip_services4_components.exec import IExecutable
from pip_services4_components.config import IConfigurable

class MyComponentA(IReferenceable, IUnreferenceable, IConfigurable, IOpenable, IExecutable):
    
    def __init__(self):
        print("MyComponentA has been created.")
            
    def configure(self, config):
        print("MyComponentA has been configured.")
       
    def is_open(self):
        return self._open

    def open(self, context):
        print("MyComponentA has been opened.")
    def close(self, context):
        print("MyComponentA has been closed.")
        
    def my_task(self, context):
        print("Doing my business task")
        dummy_variable = "dummy value"
    
    def set_references(self, references):
        print("MyComponentA's references have been defined.")    
        
    def unset_references(self):
        print("References cleared")
    
    def __del__(self):
        print("Component destroyed")
        
    def execute(self, context: str, args: str): 
        print('Executing')
        result = args
        return result
    
    
from pip_services4_components.build import Factory 

class MyFactory(Factory):
    def __init__(self):
        super(MyFactory, self).__init__()

        ComponentADescriptor = Descriptor("mycontroller", "MyComponentA", "*", "*", "1.0")
        self.register_as_type(ComponentADescriptor, MyComponentA)
        
from pip_services4_container import ProcessContainer
from pip_services4_components.refer import Descriptor

class MyProcess(ProcessContainer):
    def __init__(self):
        super(MyProcess, self).__init__('mycontroller', 'My controller running as a process')
        self._config_path = './configProcessContainer.yaml'
        self._factories.add(MyFactory())
        
if __name__ == '__main__':
    runner = MyProcess()
    print("run")
    try:
        runner.run()
    except Exception as ex:
        print(ex)
        
```
