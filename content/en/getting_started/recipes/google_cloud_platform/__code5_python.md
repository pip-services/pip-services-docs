
```python
import flask
from pip_services3_gcp.containers import CloudFunction
from pip_services3_commons.refer import IReferences       
from pip_services3_commons.refer import Descriptor, IReferences, IReferenceable
from pip_services3_components.build import Factory

class MyController(IReferenceable):
    def __init__(self):
        super().__init__()

    def set_references(self, references):
        pass
    
    def greetings(self, name: str):
        return f"Hello, {name} !"

class MyFactory(Factory):
    
    def __init__(self):
        super().__init__()
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController)
        
class MyCloudFunction(CloudFunction):
    
    def __init__(self):
        super().__init__("mygroup", "MyGroup")
        self._controller: MyController = None
        self._config_path = './config.yaml'
        self._factories.add(MyFactory())
        # Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        # self._dependency_resolver.put('controller', Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
   
    def set_references(self, references: IReferences):
        super().set_references(references)
        # Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        # self._controller = self._dependency_resolver.get_one_required('controller')
        # Comment out the next line of code when using the dependency resolver, uncomment for configuration file
        self._controller = references.get_one_required(Descriptor('mygroup', 'controller', 'default', 'controller', '*'))

    def __action(self, req: flask.Request):
        name = 'default name'
        if req.is_json:
            name = req.json.get("name", name)
        return self._controller.greetings(name), 200

    def register(self):
        self._register_action("greetings", None, self.__action)



```