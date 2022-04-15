
```python
from pip_services3_datadog.log import DataDogLogger

import time

class MyComponentA:

    start_time = time.time()
    _Datadog_log = True
    
    def __init__(self, logger: DataDogLogger):
        self._logger = logger

        if self._Datadog_log:
            logger.info("123" , "MyComponentA has been created.")

    def mymethod(self):

        try:
            if self._Datadog_log:
                print("Hola amigo")
                print("Bonjour mon ami")
                logger.info("123" , "Greetings created.")
        finally:
                logger.info("123" , "Finally reached.")
```
