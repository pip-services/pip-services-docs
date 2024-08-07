
```python
from pip_services4_datadog.log import DataDogLogger
from pip_services4_components.run import IOpenable
from pip_services4_components.context import Context
from pip_services4_components.config import IConfigurable, ConfigParams

from typing import Optional

class MyComponentA(IConfigurable, IOpenable):

    _Datadog_log = True
    
    def __init__(self):
        self._logger = DataDogLogger()

        if self._Datadog_log:
            self._logger.info(null , "MyComponentA has been created.")

    def configure(self, config: ConfigParams):
        self._logger.configure(config)
        
    def open(self, ctx: Context):
        self._logger.open(ctx)
       
    def close(self, ctx: Context):
        self._logger.close(ctx)
        
    def mymethod(self):

        try:
            if self._Datadog_log:
                print("Hola amigo")
                print("Bonjour mon ami")
                self._logger.info(ctx, "Greetings created.")
        finally:
                self._logger.info(ctx, "Finally reached.")

```
