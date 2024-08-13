
**/pip_facades_sample_python/build/FacadeFactory.py**

```python
# -*- coding: utf-8 -*-

from pip_services4_components.refer.Descriptor import Descriptor
from pip_services4_components.build.Factory import Factory

from pip_facades_sample_python.controllers.version1.FacadeControllerV1 import FacadeControllerV1
from pip_facades_sample_python.controllers.version2.FacadeControllerV2 import FacadeControllerV2


class FacadeFactory(Factory):
    FacadeControllerV1Descriptor = Descriptor('pip-facades-example', 'controller', 'http', '*', '1.0')
    FacadeControllerV2Descriptor = Descriptor('pip-facades-example', 'controller', 'http', '*', '2.0')

    def __init__(self):
        super(FacadeFactory, self).__init__()
        self.register_as_type(FacadeFactory.FacadeControllerV1Descriptor, FacadeControllerV1)
        self.register_as_type(FacadeFactory.FacadeControllerV2Descriptor, FacadeControllerV2)

```
