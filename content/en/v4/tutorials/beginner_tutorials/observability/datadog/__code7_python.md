
```python
from pip_services4_datadog.log import DataDogLogger

class MyComponentA:
    _Datadog_log = True
    
    def __init__(self, logger: DataDogLogger):
        self._logger = logger

        if self._Datadog_log:
            logger.info(ctx , "MyComponentA has been created.")

    def mymethod(self):

        try:
            if self._Datadog_log:
                print("Hola amigo")
                print("Bonjour mon ami")
                logger.info(ctx , "Greetings created.")
        finally:
                logger.info(ctx , "Finally reached.")

```
