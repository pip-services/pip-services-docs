
**/pip_facades_sample_python/build/FacadeFactory.py**

```python
# -*- coding: utf-8 -*-

from pip_services3_commons.refer.Descriptor import Descriptor
from pip_services3_components.build.Factory import Factory

from pip_facades_sample_python.services.version1.FacadeServiceV1 import FacadeServiceV1
from pip_facades_sample_python.services.version2.FacadeServiceV2 import FacadeServiceV2


class FacadeFactory(Factory):
    FacadeServiceV1Descriptor = Descriptor("nov-facades-application", "service", "http", "*", "1.0")
    FacadeServiceV2Descriptor = Descriptor("nov-facades-application", "service", "http", "*", "2.0")

    def __init__(self):
        super(FacadeFactory, self).__init__()
        self.register_as_type(FacadeFactory.FacadeServiceV1Descriptor, FacadeServiceV1)
        self.register_as_type(FacadeFactory.FacadeServiceV2Descriptor, FacadeServiceV2)


```
