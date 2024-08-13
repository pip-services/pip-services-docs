
**/pip_facades_sample_python/container/FacadeProcess.py**

```python
# -*- coding: utf-8 -*-
from pip_services4_container.container import ProcessContainer
from pip_services4_http.build.DefaultRpcFactory import DefaultRpcFactory

from ..build.ClientFacadeFactory import ClientFacadeFactory
from ..build.FacadeFactory import FacadeFactory


class FacadeProcess(ProcessContainer):

    def __init__(self):
        super(FacadeProcess, self).__init__("pip-facades-example", "Example Pip.Services facade")

        self._factories.add(ClientFacadeFactory())
        self._factories.add(FacadeFactory())
        self._factories.add(DefaultRpcFactory())

```
