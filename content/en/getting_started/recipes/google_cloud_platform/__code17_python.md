
```python
import flask
from pip_services3_gcp.containers import CloudFunction
from pip_services3_gcp.services import CloudFunctionService
from pip_services3_commons.refer import Descriptor, IReferences, IReferenceable
from pip_services3_components.build import Factory
from pip_services3_commons.convert import TypeCode
from pip_services3_commons.run import Parameters
from pip_services3_commons.validate import ObjectSchema


class MyCloudService(CloudFunctionService):
    def __init__(self):
        super().__init__('mygroup')
        # Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        # self._dependency_resolver.put('controller',
                                      Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'))

        self._controller: MyController = None
        self._headers = {
            'Content-Type': 'application/json'
        }

    def set_references(self, references: IReferences):
        super().set_references(references)
        # Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        # self._controller = self._dependency_resolver.get_one_required('controller')
        # Comment out the next line of code when using the dependency resolver, uncomment for configuration file
        self._controller = references.get_one_required(Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'))

    def register(self):
        def handler(req: flask.Request):
            name = 'default name'
            if req.is_json:
                name = req.json.get('name', name)
            res = self._controller.greeting(name)
            return res, 200

        self._register_action(
            'greetings',
            ObjectSchema(True).with_required_property("body",
                                                      ObjectSchema().with_required_property("name", TypeCode.String)),
            handler
        )

class MyController(IReferenceable):

    def __init__(self):
        super().__init__()

    def set_references(self, references):
        pass

    def greeting(self, name):
        return f"Hello, {name} !"

class MyFactory(Factory):

    def __init__(self):
        super().__init__()
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController)
        self.register_as_type(Descriptor("mygroup", "service", "gcp-function", "function", "1.0"), MyCloudService)
        
class MyCloudFunction(CloudFunction):
    def __init__(self):
        super().__init__("mygroup", "Mygroup service")
        self._controller: MyController = None
        self._service: MyCloudService = None

        self._config_path = './config.yaml'
        self._factories.add(MyFactory())
        # Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        # self._dependency_resolver.put('controller', Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        # self._dependency_resolver.put('service', Descriptor('mygroup', 'service', 'gcp-function', 'function', '*'))

    def set_references(self, references: IReferences):
        super().set_references(references)
        # Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        # self._controller = self._dependency_resolver.get_one_required('controller')
        # self._service = self._dependency_resolver.get_one_required('service') 
        # Comment out the next two lines of code when using the dependency resolver, uncomment for configuration file
        self._controller = references.get_one_required(Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        self._service = references.get_one_required(Descriptor('mygroup', 'service', 'gcp-function', 'function', '*'))


```