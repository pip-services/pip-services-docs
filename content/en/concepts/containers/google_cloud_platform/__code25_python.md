
```python
import flask
from pip_services3_commons.refer import IReferences, IReferenceable
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory

from pip_services3_gcp.containers import CloudFunction


class MyController1(IReferenceable):

    def __init__(self):
        super().__init__()

    def set_references(self, references):
        pass

    def greetings1(self, name: str):
        return f"greetings1: Hello, {name}"


class MyController2(IReferenceable):

    def __init__(self):
        super().__init__()

    def set_references(self, references):
        pass

    def greetings2(self, name: str):
        return f"greetings2: Hello, {name}"


class MyFactory(Factory):

    def __init__(self):
        super().__init__()
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller1", "1.0"), MyController1)
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller2", "1.0"), MyController2)

class MyCloudFunction(CloudFunction):

    def __init__(self):
        super().__init__("mygroup", "MyGroup")
        self._config_path = './config.yaml'
        self._dependency_resolver.put('controller1', Descriptor('mygroup', 'controller', 'default', 'controller1', '*'))
        self._dependency_resolver.put('controller2', Descriptor('mygroup', 'controller', 'default', 'controller2', '*'))
        self._factories.add(MyFactory())

        self._controller1: MyController1 = None
        self._controller2: MyController2 = None

    def set_references(self, references: IReferences):
        super().set_references(references)
        self._controller1 = self._dependency_resolver.get_one_required('controller1')
        self._controller2 = self._dependency_resolver.get_one_required('controller2')

    def __action1(self, req: flask.Request):
        name = 'default name'
        if req.is_json:
            name = req.json.get("name", name)
        return self._controller1.greetings1(name), 200

    def __action2(self, req: flask.Request):
        name = 'default name'
        if req.is_json:
            name = req.json.get("name", name)
        return self._controller2.greetings2(name), 200

    def register(self):
        self._register_action("greetings1", None, self.__action1)
        self._register_action("greetings2", None, self.__action2)

```