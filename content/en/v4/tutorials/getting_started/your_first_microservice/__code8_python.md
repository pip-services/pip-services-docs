
**/HelloWorldProcess.py**

```python
# -*- coding: utf-8 -*- 
from HelloWorldControllerFactory import HelloWorldControllerFactory
from pip_services4_container.container import ProcessContainer
from pip_services4_http.build import DefaultRpcFactory


class HelloWorldProcess(ProcessContainer):
    def __init__(self):

        super(HelloWorldProcess, self).__init__('hello-world', 'HelloWorld microservice')
        self._config_path = './config.yaml'
        self._factories.add(HelloWorldControllerFactory())
        self._factories.add(DefaultRpcFactory())

```

