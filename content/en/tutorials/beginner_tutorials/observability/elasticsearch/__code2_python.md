
```python

class MyComponentA:

    _console_log = True
    
    def __init__(self, logger: ElasticSearchLogger):
        self._logger = logger

        self._logger.info("123" , "MyComponentA has been created.")

    def mymethod(self):

        try:
            if self._console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
            self._logger.info("123" , "Greetings created.")
        finally:
                self._logger.info("123" , "Finally reached.")
```
