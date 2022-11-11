
```python
import flask
from pip_services3_gcp.services.CloudFunctionService import CloudFunctionService
from pip_services3_commons.refer import IReferences, IReferenceable
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory
from pip_services3_gcp.containers import CloudFunction


class MyCloudFunctionService(CloudFunctionService):

    def __init__(self):
        super().__init__('myservice')

        self._controller: MyController1 = None
        self._headers = {
            'Content-Type': 'application/json'
        }
        
    def set_references(self, references: IReferences):
        super().set_references(references)
        self._controller = references.get_one_required(Descriptor("mygroup", "controller", "*", "controller1", "1.0"))

    def __action(self, req: flask.Request):
        name = 'default name'
        if req.is_json:
            name = req.json.get("name", name)
        return self._controller.greetings1(name), 200

    def register(self):
        self._register_action("greetings1", None, self.__action)


class MyController1(IReferenceable):

    def __init__(self):
        super().__init__()

    def set_references(self, references):
        pass

    def greetings1(self, name: str):
        return f"Greetings from service: Hello, {name}"


class MyController2(IReferenceable):

    def __init__(self):
        super().__init__()

    def set_references(self, references):
        pass

    def greetings2(self, name: str):
        return f"Greetings from container: Hello, {name}"


class MyFactory(Factory):

    def __init__(self):
        super().__init__()
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller1", "1.0"), MyController1)
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller2", "1.0"), MyController2)
        self.register_as_type(Descriptor("mygroup", "service", "gcp-function", "*", "1.0"), MyCloudFunctionService)

class MyCloudFunction(CloudFunction):
    def __init__(self):
        super().__init__("mygroup", "MyGroup")
        self._config_path = './config.yaml'
        self._factories.add(MyFactory())

        self._controller = None

    def set_references(self, references: IReferences):
        super().set_references(references)
        self._controller = references.get_one_required(Descriptor("mygroup", "controller", "*", "controller2", "1.0"))

    def __action(self, req: flask.Request):
        name = 'default name'
        if req.is_json:
            name = req.json.get("name", name)
        return self._controller.greetings2(name), 200

    def register(self):
        self._register_action("greetings2", None, self.__action)

```